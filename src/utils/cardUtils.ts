import { DetailedCardProps } from '../store/interfaces';

export const getFilteredAndSortedCards = (
  cards: DetailedCardProps[],
  priorityFilter: string,
  sortOrder: string,
): DetailedCardProps[] => {
  return cards
    .filter((card) =>
      priorityFilter ? card.priority === priorityFilter : true,
    )
    .sort((a, b) => {
      if (sortOrder === 'oldest') {
        return (
          new Date(a.estimatedShippingDate).getTime() -
          new Date(b.estimatedShippingDate).getTime()
        );
      }
      if (sortOrder === 'newest') {
        return (
          new Date(b.estimatedShippingDate).getTime() -
          new Date(a.estimatedShippingDate).getTime()
        );
      }
      return 0;
    });
};
