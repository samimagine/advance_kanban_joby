import React from 'react';
import { render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '@testing-library/jest-dom';
import KanbanBoard from './KanbanBoard';
import { useKanbanStore } from '../../__mocks__/kanbanStore';

jest.mock('../../store/kanbanStore', () => ({
    useKanbanStore: jest.fn()
}));

describe('KanbanBoard ', () => {
    const mockUseKanbanStore = useKanbanStore as jest.Mock;
    beforeEach(() => {
        mockUseKanbanStore.mockImplementation(() => ({
            columns: [
                { id: 'todo-column', title: 'To Do', cards: [] },
                { id: 'in-progress-column', title: 'In Progress', cards: [] }
            ],
            lastViewed: [],
            loadCards: jest.fn()
        }));
    });

    const renderWithDndProvider = (ui: React.ReactElement) => {
        return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
    };

    it('renders SearchBar and ColumnsMainContainer', () => {
        renderWithDndProvider(<KanbanBoard />);

        expect(screen.getByLabelText(/search cards/i)).toBeInTheDocument();

        expect(screen.getByText(/To Do/i)).toBeInTheDocument();
        expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    });

    it('calls loadCards on mount', () => {
        const loadCardsMock = jest.fn();
        mockUseKanbanStore.mockImplementation(() => ({
            columns: [],
            lastViewed: [],
            loadCards: loadCardsMock
        }));

        renderWithDndProvider(<KanbanBoard />);
        expect(loadCardsMock).toHaveBeenCalledTimes(1);
    });
});
