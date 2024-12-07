import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderOverview from './OrderOverview';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

jest.mock('../../Kanban/KanbanBoard', () => {
    const KanbanBoardMock = () => <div data-testid="kanban-board">Kanban Board Mock</div>;
    KanbanBoardMock.displayName = 'KanbanBoardMock';
    return KanbanBoardMock;
});

describe('OrderOverview', () => {
    test('renders the component correctly', () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <OrderOverview />
            </DndProvider>
        );

        expect(screen.getByRole('heading', { name: /order overview/i })).toBeInTheDocument();

        expect(screen.getByTestId('kanban-board')).toBeInTheDocument();
    });
});
