import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
  MenuItem,
  Select,
  Tooltip,
  Divider,
  Popover,
  Modal,
} from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DetailedCardProps, useKanbanStore } from '../store/kanbanStore';
import ColorChip from './common/StatusColorChip/StatusColorChip';
import CardEditModal from './CardEditModal';
import OrderDetailsModalComponent from './OrderDetailsModalComponent';

interface DraggableCardProps {
  id: string;
  title: string;
  orderDescription?: string;
  priority: string;
  estimatedShippingDate: string;
  columnId: string;
}

const Draggable: React.FC<DraggableCardProps> = ({
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

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [details, setDetails] = useState<DetailedCardProps | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isEditingPriority, setIsEditingPriority] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const { addLastViewed, editCard, deleteCard, columns } = useKanbanStore();

  const currentCard = columns
    .flatMap((col) => col.cards)
    .find((card) => card.id === id);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDetails = () => {
    const localCard = columns
      .flatMap((col) => col.cards)
      .find((card) => card.id === id);

    if (localCard) {
      const localCardDetails: DetailedCardProps = {
        id: localCard.id,
        title: localCard.title,
        priority: localCard.priority,
        estimatedShippingDate: localCard.estimatedShippingDate,
        orderDetails: localCard.orderDetails || {
          part: '',
          partNumber: '',
          releaseStatus: '',
          drawingNumber: '',
          flightArticle: '',
        },
        processDetails: localCard.processDetails || {
          material: '',
          materialStockSize: '',
          surfaceTreatment: '',
          machine: '',
        },
        files: localCard.files || [],
      };
      setDetails(localCardDetails);
    } else {
      console.error('Card details not found in local data.');
    }

    addLastViewed({ id, title, orderDescription, priority, estimatedShippingDate });
    setOpenDetailsModal(true);
  };

  const handleEditOpen = () => {
    addLastViewed({ id, title, orderDescription, priority, estimatedShippingDate });
    setOpenEditModal(true);
  };

  const handleDelete = () => {
    deleteCard(columnId, id);
    setOpenDeleteModal(false);
  };

  const handlePriorityChange = (newPriority: string) => {
    setIsEditingPriority(false);
    editCard(id, { priority: newPriority });
  };

  return (
    <>
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
          cursor: 'pointer',
        }}
      >
        <Card sx={{ backgroundColor: '#f3f4f5' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6">{currentCard?.title || title}</Typography>
                <IconButton aria-label="details" size="small" onClick={handleOpenDetails}>
                  <Tooltip title="Details" placement="bottom">
                    <DescriptionIcon fontSize="inherit" />
                  </Tooltip>
                </IconButton>
              </Box>
              <IconButton size="small" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            </Box>
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
                  value={currentCard?.priority || priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  onBlur={() => setIsEditingPriority(false)}
                >
                  <MenuItem value="Standard">Standard</MenuItem>
                  <MenuItem value="High Priority">High Priority</MenuItem>
                  <MenuItem value="Critical Path">Critical Path</MenuItem>
                </Select>
              ) : (
                <ColorChip
                  label={currentCard?.priority || priority}
                  onClick={() => setIsEditingPriority(true)}
                />
              )}
            </Box>
            <Typography variant="body2">
              Due Date: {currentCard?.estimatedShippingDate || estimatedShippingDate}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Popover
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
          <Button
            startIcon={<EditIcon />}
            onClick={() => {
              handleMenuClose();
              handleEditOpen();
            }}
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteForeverOutlinedIcon />}
            color="error"
            onClick={() => {
              handleMenuClose();
              setOpenDeleteModal(true);
            }}
          >
            Delete
          </Button>
        </Box>
      </Popover>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="h6" align="center">
            Confirm Deletion
          </Typography>
          <Typography variant="body2" align="center" mt={2}>
            Are you sure you want to delete this card?
          </Typography>
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setOpenDeleteModal(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <CardEditModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        card={{ id, title, orderDescription, priority, estimatedShippingDate }}
      />
      <OrderDetailsModalComponent
        open={openDetailsModal}
        onClose={() => setOpenDetailsModal(false)}
        title={title}
        orderDescription={orderDescription}
        priority={priority}
        estimatedShippingDate={estimatedShippingDate}
        details={details || undefined}
      />
    </>
  );
};

export default Draggable;