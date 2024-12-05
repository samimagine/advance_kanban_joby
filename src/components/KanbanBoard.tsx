import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import Droppable from './Droppable';
import { DetailedCardProps, useKanbanStore } from '../store/kanbanStore';

const KanbanBoard: React.FC = () => {
  const { columns, loadCards } = useKanbanStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const handleDrop = (cardId: string, fromColumnId: string, toColumnId: string) => {
    if (fromColumnId === toColumnId) {
      console.warn('Card dropped in the same column, no changes made.');
      return;
    }

    const columns = useKanbanStore.getState().columns;

    const sourceColumn = columns.find((col) => col.id === fromColumnId);
    const targetColumn = columns.find((col) => col.id === toColumnId);

    if (!sourceColumn || !targetColumn) {
      console.error('Source or Target column not found:', { fromColumnId, toColumnId });
      return;
    }

    const sourceIndex = sourceColumn.cards.findIndex((card) => card.id === cardId);

    if (sourceIndex === -1) {
      console.error('Card not found in source column:', { cardId, sourceColumn });
      return;
    }

    const destinationIndex = targetColumn.cards.length;

    useKanbanStore.getState().moveCard(fromColumnId, toColumnId, sourceIndex, destinationIndex);
  };

  const filterCards = (cards: DetailedCardProps[]) => {
    return cards.filter((card) =>
      Object.values(card)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Box>
      <TextField
        label="Search Cards"
        variant="outlined"
        sx={{
          marginLeft: 'auto',
          margin: 'normal',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#c2d8ff',
            },
            '&:hover fieldset': {
              borderColor: '#c2d8ff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c2d8ff',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#c2d8ff',
          },
          '& .MuiInputBase-input': {
            color: '#c2d8ff',
          },
        }}
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Box display="flex" gap={2} p={2} sx={{
        backgroundColor: 'hsl(0deg 0% 0% / 20%)',
        width: 'fit-content',
        borderRadius: '20px',
      }}>
        {columns.map((column) => (
          <Droppable
            key={column.id}
            id={column.id}
            title={column.title}
            cards={filterCards(column.cards || [])}
            onDrop={handleDrop}
          />
        ))}
      </Box>
    </Box>
  );
};

export default KanbanBoard;