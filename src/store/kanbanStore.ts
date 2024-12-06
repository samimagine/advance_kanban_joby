import { create } from 'zustand';
import { mockCards } from './mock/mockData';
import { DetailedCardProps, Column } from './interfaces';

interface KanbanState {
  columns: Column[];
  lastViewed: DetailedCardProps[];
  loadCards: () => Promise<void>;
  addLastViewed: (card: DetailedCardProps) => void;
  moveCard: (
    sourceColumnId: string,
    targetColumnId: string,
    sourceIndex: number,
    destinationIndex: number,
  ) => void;
  addTagToCard: (cardId: string, columnId: string, tag: string) => void;
  removeTagFromCard: (cardId: string, columnId: string, tag: string) => void;
  editCard: (id: string, updatedFields: Partial<DetailedCardProps>) => void;
  addCard: (columnId: string, newCard: Partial<DetailedCardProps>) => void;
  deleteCard: (columnId: string, cardId: string) => void;
}

export const useKanbanStore = create<KanbanState>((set) => ({
  columns: JSON.parse(localStorage.getItem('kanbanColumns') || 'null') || [
    { id: 'todo-column', title: 'To Do', cards: [] },
    { id: 'in-progress-column', title: 'In Progress', cards: [] },
    { id: 'in-review-column', title: 'In Review', cards: [] },
    { id: 'done-column', title: 'Done', cards: [] },
    { id: 'last-viewed-column', title: 'Last Viewed', cards: [] },
  ],
  lastViewed: JSON.parse(localStorage.getItem('lastViewed') || '[]'),

  loadCards: async () => {
    try {
      const storedColumns = localStorage.getItem('kanbanColumns');
      const storedLastViewed = JSON.parse(
        localStorage.getItem('lastViewed') || '[]',
      );

      if (storedColumns) {
        const parsedColumns: Column[] = JSON.parse(storedColumns);
        const lastViewedColumn = {
          id: 'last-viewed-column',
          title: 'Last Viewed',
          cards: storedLastViewed.map((card: DetailedCardProps) => ({
            ...card,
            isDeleted: card.isDeleted || false,
          })),
        };

        set({
          columns: [
            ...parsedColumns.filter((col) => col.id !== 'last-viewed-column'),
            lastViewedColumn,
          ],
          lastViewed: storedLastViewed,
        });
        return;
      }

      const cards: DetailedCardProps[] = mockCards.map(
        (card: DetailedCardProps) => ({
          id: card.id,
          title: card.title,
          priority: card.priority,
          estimatedShippingDate: card.estimatedShippingDate,
          orderDescription: card.orderDetails?.part,
          orderDetails: {
            part: card.orderDetails?.part || '',
            partNumber: card.orderDetails?.partNumber || '',
            releaseStatus: card.orderDetails?.releaseStatus || '',
            drawingNumber: card.orderDetails?.drawingNumber || '',
            flightArticle: card.orderDetails?.flightArticle || '',
          },
          processDetails: {
            material: card.processDetails?.material || '',
            materialStockSize: card.processDetails?.materialStockSize || '',
            surfaceTreatment: card.processDetails?.surfaceTreatment || '',
            machine: card.processDetails?.machine || '',
          },
          isDeleted: false,
          files: card.files || [],
          tags: card.tags || [],
        }),
      );

      const initialColumns: Column[] = [
        { id: 'todo-column', title: 'To Do', cards: cards.slice(0, 5) },
        {
          id: 'in-progress-column',
          title: 'In Progress',
          cards: cards.slice(5, 10),
        },
        {
          id: 'in-review-column',
          title: 'In Review',
          cards: cards.slice(10, 15),
        },
        { id: 'done-column', title: 'Done', cards: cards.slice(15, 20) },
        {
          id: 'last-viewed-column',
          title: 'Last Viewed',
          cards: storedLastViewed.map((card: DetailedCardProps) => ({
            ...card,
            isDeleted: card.isDeleted || false,
            tags: card.tags || [],
          })),
        },
      ];

      localStorage.setItem('kanbanColumns', JSON.stringify(initialColumns));

      set({ columns: initialColumns });
    } catch (error) {
      console.error('Failed to load cards:', error);
    }
  },

  addLastViewed: (card) =>
    set((state) => {
      const withoutDuplicate = state.lastViewed.filter((c) => c.id !== card.id);
      const updatedLastViewed = [
        { ...card, tags: card.tags || [] },
        ...withoutDuplicate,
      ]
        .map((c) => ({ ...c, isDeleted: c.isDeleted || false }))
        .slice(0, 4);

      localStorage.setItem('lastViewed', JSON.stringify(updatedLastViewed));

      const updatedColumns = state.columns.map((column) =>
        column.id === 'last-viewed-column'
          ? { ...column, cards: updatedLastViewed }
          : column,
      );

      return {
        lastViewed: updatedLastViewed,
        columns: updatedColumns,
      };
    }),

  moveCard: (sourceColumnId, targetColumnId, sourceIndex, destinationIndex) =>
    set((state) => {
      const columns = [...state.columns];

      const sourceColumn = columns.find((col) => col.id === sourceColumnId);
      const targetColumn = columns.find((col) => col.id === targetColumnId);

      if (!sourceColumn || !targetColumn) {
        console.error('Source or Target column not found:', {
          sourceColumnId,
          targetColumnId,
        });
        return state;
      }

      if (sourceIndex < 0 || sourceIndex >= sourceColumn.cards.length) {
        console.error('Invalid source index:', { sourceIndex, sourceColumn });
        return state;
      }

      const [movedCard] = sourceColumn.cards.splice(sourceIndex, 1);

      if (!movedCard) {
        console.error('Failed to retrieve card from source column:', {
          sourceIndex,
          sourceColumn,
        });
        return state;
      }

      targetColumn.cards.splice(destinationIndex, 0, movedCard);

      const updatedColumns = columns.map((column) => {
        if (column.id === sourceColumnId) {
          return { ...column, cards: [...sourceColumn.cards] };
        }
        if (column.id === targetColumnId) {
          return { ...column, cards: [...targetColumn.cards] };
        }
        return column;
      });

      localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));
      return { columns: updatedColumns };
    }),

  addTagToCard: (cardId, columnId, tag) =>
    set((state) => {
      const updatedColumns = state.columns.map((column) => {
        if (column.id === columnId || column.id === 'last-viewed-column') {
          const updatedCards = column.cards.map((card) =>
            card.id === cardId
              ? { ...card, tags: [...(card.tags || []), tag] }
              : card,
          );
          return { ...column, cards: updatedCards };
        }
        return column;
      });

      localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));
      return { columns: updatedColumns };
    }),

  removeTagFromCard: (cardId, columnId, tag) =>
    set((state) => {
      const updatedColumns = state.columns.map((column) => {
        if (column.id === columnId || column.id === 'last-viewed-column') {
          const updatedCards = column.cards.map((card) =>
            card.id === cardId
              ? { ...card, tags: card.tags?.filter((t) => t !== tag) }
              : card,
          );
          return { ...column, cards: updatedCards };
        }
        return column;
      });

      localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));
      return { columns: updatedColumns };
    }),

  editCard: (id: string, updatedFields: Partial<DetailedCardProps>) => {
    try {
      set((state) => {
        const updatedColumns = state.columns.map((column) => {
          const updatedCards = column.cards.map((card) =>
            card.id === id ? { ...card, ...updatedFields } : card,
          );
          return { ...column, cards: updatedCards };
        });

        localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));

        return { columns: updatedColumns };
      });
    } catch (error) {
      console.error('Failed to edit card:', error);
    }
  },

  addCard: (columnId: string, newCard: Partial<DetailedCardProps>) =>
    set((state) => {
      const columns = [...state.columns];
      const column = columns.find((col) => col.id === columnId);

      if (!column) {
        console.error(`Column with ID ${columnId} not found.`);
        return state;
      }

      const nextId = String(
        Math.max(
          ...state.columns.flatMap((col) => col.cards.map((card) => +card.id)),
          0,
        ) + 1,
      );

      const cardToAdd: DetailedCardProps = {
        id: nextId,
        title: newCard.title || 'New Card',
        priority: newCard.priority || 'Standard',
        estimatedShippingDate: newCard.estimatedShippingDate || '',
        orderDescription: newCard.orderDetails?.part || '',
        orderDetails: {
          part: newCard.orderDetails?.part || '',
          partNumber: newCard.orderDetails?.partNumber || '',
          releaseStatus: newCard.orderDetails?.releaseStatus || '',
          drawingNumber: newCard.orderDetails?.drawingNumber || '',
          flightArticle: newCard.orderDetails?.flightArticle || '',
        },
      };

      column.cards.unshift(cardToAdd);

      const updatedColumns = columns.map((col) =>
        col.id === columnId ? column : col,
      );
      localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));
      return { columns: updatedColumns };
    }),

  deleteCard: (columnId: string, cardId: string) =>
    set((state) => {
      const updatedColumns = state.columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          };
        }
        if (column.id === 'last-viewed-column') {
          return {
            ...column,
            cards: column.cards.map((card) =>
              card.id === cardId ? { ...card, isDeleted: true } : card,
            ),
          };
        }
        return column;
      });

      const updatedLastViewed = state.lastViewed.map((card) =>
        card.id === cardId ? { ...card, isDeleted: true } : card,
      );

      localStorage.setItem('kanbanColumns', JSON.stringify(updatedColumns));
      localStorage.setItem('lastViewed', JSON.stringify(updatedLastViewed));

      return { columns: updatedColumns, lastViewed: updatedLastViewed };
    }),
}));
