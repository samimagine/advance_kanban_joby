import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import {
  Card,
  CardContent,
  Box,
  Typography,
  MenuItem,
  Select,
  Divider,
} from '@mui/material';
import StatusColorChipComponent from '../../Common/StatusColorChipComponent/StatusColorChipComponent';
import { useKanbanStore } from '../../../../store/kanbanStore';
import CardHeaderComponent from './components/CardHeaderComponent';
import CardTagsComponent from './components/CardTagsComponent';
import CardActionsComponent from './components/CardActionsComponent';
import CardModalsComponent from './components/CardModalsComponent';

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
    addLastViewed,
    removeTagFromCard,
  } = useKanbanStore();

  const [isEditingPriority, setIsEditingPriority] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentCard = columns
    .flatMap((col) => col.cards)
    .find((card) => card.id === id);

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
          <Typography variant="body2">{orderDescription}</Typography>
          <Divider sx={{ my: '10px' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2">Priority:</Typography>
            {isEditingPriority ? (
              <Select
                defaultValue={currentCard?.priority || priority}
                size="small"
                onChange={(e) => {
                  editCard(id, { priority: e.target.value });
                  setIsEditingPriority(false);
                }}
                onBlur={() => setIsEditingPriority(false)}
              >
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="High Priority">High Priority</MenuItem>
                <MenuItem value="Critical Path">Critical Path</MenuItem>
              </Select>
            ) : (
              <StatusColorChipComponent
                label={currentCard?.priority || priority}
                onClick={() => setIsEditingPriority(true)}
              />
            )}
          </Box>

          <Typography variant="body2">
            Due Date:{' '}
            {currentCard?.estimatedShippingDate || estimatedShippingDate}
          </Typography>

          <CardTagsComponent
            tags={currentCard?.tags || []}
            onAddTag={(tag: string) => addTagToCard(id, columnId, tag)}
            onRemoveTag={(tag: string) => removeTagFromCard(id, columnId, tag)}
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
