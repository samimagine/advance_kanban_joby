export const useKanbanStore = jest.fn(() => ({
    columns: [
        { id: 'todo-column', title: 'To Do', cards: [] },
        { id: 'in-progress-column', title: 'In Progress', cards: [] },
    ],
    lastViewed: [],
    loadCards: jest.fn(),
    addLastViewed: jest.fn(),
    moveCard: jest.fn(),
    addTagToCard: jest.fn(),
    removeTagFromCard: jest.fn(),
    editCard: jest.fn(),
    addCard: jest.fn(),
    deleteCard: jest.fn(),
}));