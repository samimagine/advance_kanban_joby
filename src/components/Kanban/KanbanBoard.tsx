import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useKanbanStore } from '../../store/kanbanStore';
import ColumnsMainContainer from './Layout/ColumnsMainContainer';
import SearchBar from './Layout/SearchBar';
import { DetailedCardProps } from '../../store/interfaces';

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

        const { columns, moveCard } = useKanbanStore.getState();
        const sourceColumn = columns.find(col => col.id === fromColumnId);
        const targetColumn = columns.find(col => col.id === toColumnId);

        if (!sourceColumn || !targetColumn) {
            console.error('Source or Target column not found:', {
                fromColumnId,
                toColumnId
            });
            return;
        }

        const sourceIndex = sourceColumn.cards.findIndex(card => card.id === cardId);

        if (sourceIndex === -1) {
            console.error('Card not found in source column:', {
                cardId,
                sourceColumn
            });
            return;
        }

        const destinationIndex = targetColumn.cards.length;
        moveCard(fromColumnId, toColumnId, sourceIndex, destinationIndex);
    };

    const filterCards = (cards: DetailedCardProps[]) => {
        return cards.filter(card => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { priority, ...cardWithoutPriority } = card;

            return Object.values(cardWithoutPriority).join(' ').toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw'
            }}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ColumnsMainContainer columns={columns} filterCards={filterCards} onDrop={handleDrop} />
        </Box>
    );
};

export default KanbanBoard;
