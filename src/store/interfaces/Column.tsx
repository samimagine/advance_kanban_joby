import { DetailedCard } from './Cards';

export interface Column {
    id: string;
    title: string;
    cards: DetailedCard[];
}

export type AddCardColumn = Column;
