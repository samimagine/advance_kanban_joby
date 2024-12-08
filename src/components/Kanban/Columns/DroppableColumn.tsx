import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { AddCardButton, ColumnHeader, ColumnCardList, ColumnFilterPopover, ColumnWrapper } from './components';
import { DetailedCard } from '../../../store/interfaces';
import { getFilteredAndSortedCards } from '../../../utils/cardUtils';

interface DroppableColumnProps {
    id: string;
    title: string;
    cards: DetailedCard[];
    onDrop: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ id, title, cards = [], onDrop }) => {
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

    const filteredCards = getFilteredAndSortedCards(cards, priorityFilter, sortOrder);

    return (
        <ColumnWrapper dropRef={dropRef}>
            <ColumnHeader
                title={title}
                isLastViewed={isLastViewed}
                onFilterClick={(e) => setAnchorEl(e.currentTarget)}
            />
            <ColumnFilterPopover
                anchorEl={anchorEl}
                isOpen={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                priorityFilter={priorityFilter}
                sortOrder={sortOrder}
                onPriorityChange={(value) => {
                    setPriorityFilter(value);
                    setAnchorEl(null);
                }}
                onSortChange={(value) => {
                    setSortOrder(value);
                    setAnchorEl(null);
                }}
            />
            <ColumnCardList cards={filteredCards} isLastViewed={isLastViewed} columnId={id} />
            {!isLastViewed && <AddCardButton columnId={id} />}
        </ColumnWrapper>
    );
};

export default DroppableColumn;
