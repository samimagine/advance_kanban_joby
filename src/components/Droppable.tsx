import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import {
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip,
  Popover,
  Select,
  MenuItem,
  CardContent,
  Card,
  Divider,
  Chip,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import Draggable from './Draggable';
import { DetailedCardProps } from '../store/kanbanStore';
import ColorChip from './common/StatusColorChip/StatusColorChip';
import AddCardModal from './AddCardModal';

interface DroppableColumnProps {
  id: string;
  title: string;
  cards: DetailedCardProps[];
  onDrop: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}

const Droppable: React.FC<DroppableColumnProps> = ({ id, title, cards = [], onDrop }) => {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isLastViewed = id === 'last-viewed-column';

  const [, dropRef] = useDrop(() => ({
    accept: 'CARD',
    canDrop: () => !isLastViewed,
    drop: (item: { id: string; columnId: string }) => {
      if (!isLastViewed) {
        onDrop(item.id, item.columnId, id);
      }
    },
  }));

  let filteredCards = priorityFilter
    ? cards.filter((card) => card.priority === priorityFilter)
    : cards;

  if (sortOrder === 'oldest') {
    filteredCards = filteredCards.sort((a, b) => new Date(a.estimatedShippingDate).getTime() - new Date(b.estimatedShippingDate).getTime());
  } else if (sortOrder === 'newest') {
    filteredCards = filteredCards.sort((a, b) => new Date(b.estimatedShippingDate).getTime() - new Date(a.estimatedShippingDate).getTime());
  }

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const isFilterOpen = Boolean(anchorEl);

  const handleAddCard = () => {
    setIsAddCardOpen(true);
  };

  const handleAddCardClose = () => {
    setIsAddCardOpen(false);
  };

  return (
    <Paper
      ref={dropRef}
      sx={{
        width: 240,
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
        borderRadius: '15px',
        minWidth: '200px',
        height: 'fit-content',
        paddingBottom: '24px',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{
        backgroundColor: '#61687c',
        color: 'white',
        padding: '0 16px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        height: '30px',
      }}>
        <Typography variant="subtitle2" sx={{
          fontWeight: '700',
        }}>{title}</Typography>
        {!isLastViewed && (
          <Tooltip title="Filter">
            <IconButton onClick={handleFilterClick} sx={{ color: 'white' }}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Popover
        open={isFilterOpen}
        anchorEl={anchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="subtitle1">Filters</Typography>
          <Select
            value={priorityFilter}
            size="small"
            onChange={(e) => setPriorityFilter(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">All Priorities</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="High Priority">High Priority</MenuItem>
            <MenuItem value="Critical Path">Critical Path</MenuItem>
          </Select>
          <Select
            value={sortOrder}
            size="small"
            onChange={(e) => setSortOrder(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Default Order</MenuItem>
            <MenuItem value="oldest">Sort by Date (Oldest to Newest)</MenuItem>
            <MenuItem value="newest">Sort by Date (Newest to Oldest)</MenuItem>
          </Select>
        </Box>
      </Popover>
      {filteredCards.map((card) =>
        isLastViewed ? (
          <Tooltip
            key={card.id}
            title={card.isDeleted ? 'This card was removed from the board' : ''}
            arrow
          >
            <div
              style={{
                marginBottom: '8px',
                padding: '16px',
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <Card sx={{
                backgroundColor: card.isDeleted ? '#f8d7da' : '#f3f4f5',
                paddingBottom: '8px',
              }}>
                <CardContent sx={{
                  paddingBottom: '0 !important',
                }}>
                  <div
                    onClick={() => {
                      if (!card.isDeleted) {
                        const modalCard = document.getElementById(`modal-card-${card.id}`);
                        if (modalCard) modalCard.click();
                      }
                    }}
                    style={{
                      cursor: card.isDeleted ? 'not-allowed' : 'default',
                      textDecoration: card.isDeleted ? 'line-through' : 'none',
                    }}
                  >
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="body2">{card.orderDescription}</Typography>
                    <Divider sx={{ my: '10px' }} />
                    {!card.isDeleted && (<Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Typography variant="body2">Priority:</Typography>
                      <ColorChip
                        label={card.priority}
                      />
                    </Box>)}
                    <Typography variant="body2">Due Date: {card.estimatedShippingDate}</Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {card.tags?.map((tag, index) => (
                        <Chip key={index} label={tag} />
                      ))}
                    </Box>
                  </div>

                </CardContent>
              </Card>
            </div>
          </Tooltip>
        ) : (
          <Draggable
            key={card.id}
            id={card.id}
            title={card.title}
            orderDescription={card.orderDetails?.part}
            priority={card.priority}
            estimatedShippingDate={card.estimatedShippingDate}
            columnId={id}
          />
        )
      )}
      {!isLastViewed && (
        <Button variant="outlined" sx={{
          margin: '8px 16px',
        }} endIcon={<AddIcon />} onClick={handleAddCard}>
          Add new card
        </Button>
      )}
      <AddCardModal open={isAddCardOpen} onClose={handleAddCardClose} columnId={id} />
    </Paper>
  );
};

export default Droppable;