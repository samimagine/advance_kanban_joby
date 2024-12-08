import React from 'react';
import { Box } from '@mui/material';
import DroppableColumn from '../Columns/DroppableColumn';
import { DetailedCard, Column } from '../../../store/interfaces';

interface ColumnsMainContainerProps {
    columns: Column[];
    filterCards: (cards: DetailedCard[]) => DetailedCard[];
    onDrop: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}

const ColumnsMainContainer: React.FC<ColumnsMainContainerProps> = ({ columns, filterCards, onDrop }) => (
    <Box
        display='flex'
        gap={2}
        p={2}
        sx={{
            backgroundColor: 'hsl(0deg 0% 0% / 20%)',
            width: 'fit-content',
            borderRadius: '20px',
        }}>
        {columns.map((column) => (
            <DroppableColumn
                key={column.id}
                id={column.id}
                title={column.title}
                cards={filterCards(column.cards || [])}
                onDrop={onDrop}
            />
        ))}
    </Box>
);

export default ColumnsMainContainer;
