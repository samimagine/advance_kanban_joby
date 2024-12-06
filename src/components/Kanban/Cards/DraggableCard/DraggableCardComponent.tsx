import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent } from '@mui/material';
import { useKanbanStore } from '../../../../store/kanbanStore';
import {
    CardActionsComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardModalsComponent,
} from './components';
import { DetailedCardProps } from '../../../../store/interfaces';

interface DraggableCardProps {
    id: string;
    title: string;
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    columnId: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
    id,
    title,
    orderDescription,
    priority,
    estimatedShippingDate,
    columnId,
}) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'CARD',
        item: { id, columnId },
        canDrag: columnId !== 'last-viewed-column',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const {
        columns,
        deleteCard,
        editCard,
        addTagToCard,
        removeTagFromCard,
        addLastViewed,
    } = useKanbanStore();

    const [isEditingPriority, setIsEditingPriority] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const currentCard = columns
        .flatMap((col) => col.cards)
        .find((card) => card.id === id) as DetailedCardProps | undefined;

    return (
        <div
            ref={dragRef}
            id={`modal-card-${id}`}
            style={{
                opacity: isDragging ? 0.5 : 1,
                marginBottom: '8px',
                padding: '16px',
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'grab',
            }}
        >
            <Card sx={{ backgroundColor: '#f3f4f5' }}>
                <CardContent>
                    <CardHeaderComponent
                        title={title}
                        orderDescription={orderDescription}
                        currentCard={currentCard}
                        onDetailsClick={() => setOpenDetailsModal(true)}
                        onMenuClick={(e) => setAnchorEl(e.currentTarget)}
                        addLastViewed={() =>
                            addLastViewed({
                                id,
                                title,
                                orderDescription,
                                priority,
                                estimatedShippingDate,
                                tags: currentCard?.tags || [],
                            })
                        }
                    />
                    <CardBodyComponent
                        orderDescription={orderDescription}
                        priority={priority}
                        estimatedShippingDate={estimatedShippingDate}
                        currentPriority={currentCard?.priority || priority}
                        isEditingPriority={isEditingPriority}
                        onPriorityChange={(newPriority) => {
                            editCard(id, { priority: newPriority });
                            setIsEditingPriority(false);
                        }}
                        onPriorityEdit={() => setIsEditingPriority(true)}
                        onPriorityBlur={() => setIsEditingPriority(false)}
                        tags={currentCard?.tags || []}
                        onAddTag={(tag) => addTagToCard(id, columnId, tag)}
                        onRemoveTag={(tag) =>
                            removeTagFromCard(id, columnId, tag)
                        }
                    />
                </CardContent>
            </Card>
            <CardActionsComponent
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                onDelete={() => {
                    deleteCard(columnId, id);
                    setAnchorEl(null);
                }}
                onEdit={() => setOpenEditModal(true)}
            />
            <CardModalsComponent
                openDetailsModal={openDetailsModal}
                setOpenDetailsModal={setOpenDetailsModal}
                openEditModal={openEditModal}
                setOpenEditModal={setOpenEditModal}
                id={id}
                title={title}
                orderDescription={orderDescription}
                priority={priority}
                estimatedShippingDate={estimatedShippingDate}
                currentCard={currentCard}
            />
        </div>
    );
};

export default DraggableCard;
