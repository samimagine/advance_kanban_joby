import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import { useKanbanStore } from '../../../store/kanbanStore';
import {
    CardActionsComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardModalsComponent,
    DraggableCardWrapperComponent
} from './components';
import { DetailedCardProps } from '../../../store/interfaces';

interface DraggableCardProps {
    id: string;
    title: string;
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    columnId: string;
    isLastViewed: boolean;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
    id,
    title,
    orderDescription,
    priority,
    estimatedShippingDate,
    columnId,
    isLastViewed
}) => {
    const { columns, deleteCard, editCard, addTagToCard, removeTagFromCard, addLastViewed } = useKanbanStore();

    const [isEditingPriority, setIsEditingPriority] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const currentCard = columns.flatMap(col => col.cards).find(card => card.id === id) as DetailedCardProps | undefined;

    return (
        <DraggableCardWrapperComponent id={id} columnId={columnId} isLastViewed={isLastViewed}>
            <Card sx={{ backgroundColor: '#f3f4f5' }}>
                <CardContent>
                    <CardHeaderComponent
                        title={title}
                        orderDescription={orderDescription}
                        currentCard={currentCard}
                        onDetailsClick={() => setOpenDetailsModal(true)}
                        onMenuClick={e => setAnchorEl(e.currentTarget)}
                        addLastViewed={() =>
                            addLastViewed({
                                id,
                                title,
                                orderDescription,
                                priority,
                                estimatedShippingDate,
                                tags: currentCard?.tags || []
                            })
                        }
                    />
                    <CardBodyComponent
                        orderDescription={orderDescription}
                        priority={priority}
                        estimatedShippingDate={estimatedShippingDate}
                        currentPriority={currentCard?.priority || priority}
                        isLastViewed={isLastViewed}
                        isEditingPriority={isEditingPriority}
                        onPriorityChange={newPriority => {
                            editCard(id, { priority: newPriority });
                            setIsEditingPriority(false);
                        }}
                        onPriorityEdit={() => setIsEditingPriority(true)}
                        onPriorityBlur={() => setIsEditingPriority(false)}
                        tags={currentCard?.tags || []}
                        onAddTag={tag => addTagToCard(id, columnId, tag)}
                        onRemoveTag={tag => removeTagFromCard(id, columnId, tag)}
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
        </DraggableCardWrapperComponent>
    );
};

export default DraggableCard;
