import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCard from './DraggableCardComponent';

jest.mock('../../../store/kanbanStore', () => ({
    useKanbanStore: jest.fn(() => ({
        columns: [],
        deleteCard: jest.fn(),
        editCard: jest.fn(),
        addTagToCard: jest.fn(),
        removeTagFromCard: jest.fn(),
        addLastViewed: jest.fn(),
    })),
}));

describe('DraggableCard', () => {
    const renderWithDndProvider = (ui: React.ReactElement) => {
        return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
    };

    it('renders card title and priority', () => {
        renderWithDndProvider(
            <DraggableCard
                id="1"
                title="Test Card"
                orderDescription="Test Order"
                priority="High Priority"
                estimatedShippingDate="2023-12-31"
                columnId="todo-column"
                isLastViewed={false}
            />
        );

        expect(screen.getByText(/Test Card/i)).toBeInTheDocument();

        expect(screen.getByText(/High Priority/i)).toBeInTheDocument();
    });
});