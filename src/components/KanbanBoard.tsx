import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import Droppable from './Droppable';
import { useKanbanStore } from '../store/kanbanStore';

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

  const filterCards = (cards: any[]) => {
    if (!searchQuery.trim()) return cards;
    const normalizedQuery = searchQuery.toLowerCase();

    return cards.filter((card) =>
      [card.title, card.orderDescription, card.priority]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(normalizedQuery))
    );
  };

  const filteredColumns = columns.map((column) => ({
    ...column,
    cards: filterCards(column.cards || []),
  }));

  const hasResults = filteredColumns.some((column) => column.cards.length > 0);

  return (
    <Box>
      <TextField
        label="Search Cards"
        variant="outlined"
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Box display="flex" gap={2} p={2} sx={{ backgroundColor: 'hsl(0deg 0% 0% / 20%)', width: 'fit-content', borderRadius: '20px' }}>
        {hasResults ? (
          filteredColumns.map((column) => (
            <Droppable
              key={column.id}
              id={column.id}
              title={column.title}
              cards={column.cards}
              onDrop={handleDrop}
            />
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No cards match your search query.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default KanbanBoard;