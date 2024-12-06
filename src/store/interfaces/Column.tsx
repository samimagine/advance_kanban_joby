import { DetailedCardProps } from './Cards';

export interface Column {
  id: string;
  title: string;
  cards: DetailedCardProps[];
}

export type AddCardColumn = Column;
