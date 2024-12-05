export interface CardsProps {
    id: string;
    title: string;
    priority: string;
    estimatedShippingDate: string;
  }
  
  export interface FileProps {
    id: string;
    category: string;
    name: string;
    date: string;
    description: string;
    type: string;
    thumbnail: string;
  }
  
  export interface DetailedCardProps extends CardsProps {
    orderDetails: {
      part: string;
      partNumber: string;
      releaseStatus: string;
      drawingNumber: string;
      flightArticle: string;
    };
    processDetails: {
      material: string;
      materialStockSize: string;
      surfaceTreatment: string;
      machine: string;
    }
    files?: FileProps[];
    orderDescription?: string;
    isDeleted?: boolean;
  }
  
  export interface Column {
    id: string;
    title: string;
    cards: DetailedCardProps[];
  }
  
  export interface AddCardColumn {
    id: string;
    title: string;
    cards: DetailedCardProps[];
  }
  
  export interface KanbanState {
    columns: Column[];
    lastViewed: DetailedCardProps[];
    loadCards: () => Promise<void>;
    addLastViewed: (card: DetailedCardProps) => void;
    moveCard: (sourceColumnId: string, targetColumnId: string, sourceIndex: number, destinationIndex: number) => void;
    editCard: (id: string, updatedFields: Partial<DetailedCardProps>) => void;
    addCard: (columnId: string, newCard: Partial<DetailedCardProps>) => void; 
    deleteCard: (columnId: string, cardId: string) => void; 
  }
  