import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import AddCardButtonComponent from './components/AddCardButtonComponent';
import { DetailedCardProps } from '../../../store/interfaces';
import ColumnHeaderComponent from './components/ColumnHeaderComponent';
import ColumnFilterPopoverComponent from './components/ColumnFilterPopoverFilter';
import ColumnCardListComponent from './components/ColumnCardListComponent';
import ColumnWrapperComponent from './components/ColumnWrapperComponent';
import { getFilteredAndSortedCards } from '../../../utils/cardUtils';

interface DroppableColumnProps {
  id: string;
  title: string;
  cards: DetailedCardProps[];
  onDrop: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}

const DroppableColumnComponent: React.FC<DroppableColumnProps> = ({
  id,
  title,
  cards = [],
  onDrop,
}) => {
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

  const filteredCards = getFilteredAndSortedCards(
    cards,
    priorityFilter,
    sortOrder,
  );

  return (
    <ColumnWrapperComponent dropRef={dropRef}>
      <ColumnHeaderComponent
        title={title}
        isLastViewed={isLastViewed}
        onFilterClick={(e) => setAnchorEl(e.currentTarget)}
      />
      <ColumnFilterPopoverComponent
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
      <ColumnCardListComponent
        cards={filteredCards}
        isLastViewed={isLastViewed}
        columnId={id}
      />
      {!isLastViewed && <AddCardButtonComponent columnId={id} />}
    </ColumnWrapperComponent>
  );
};

export default DroppableColumnComponent;
