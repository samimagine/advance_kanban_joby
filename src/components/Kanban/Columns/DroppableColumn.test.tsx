import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDrop } from 'react-dnd';
import DroppableColumn from './DroppableColumn';
import { DetailedCardProps } from '../../../store/interfaces';

jest.mock('react-dnd', () => ({
    useDrop: jest.fn(),
}));

jest.mock('./components', () => ({
    AddCardButtonComponent: () => <div data-testid="add-card-button">Add Card Button</div>,
    ColumnHeaderComponent: ({ title }: { title: string }) => <div data-testid="column-header">{title}</div>,
    ColumnCardListComponent: ({ cards }: { cards: DetailedCardProps[] }) => (
        <div data-testid="column-card-list">{cards.length} cards</div>
    ),
    ColumnFilterPopoverComponent: () => <div data-testid="column-filter-popover">Filter Popover</div>,
    ColumnWrapperComponent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="column-wrapper">{children}</div>
    ),
}));

describe('DroppableColumnComponent', () => {
    const mockOnDrop = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useDrop as jest.Mock).mockImplementation(() => [{}, jest.fn()]);
    });

    it('renders the column with the correct title and children', () => {
        const cards = [
            { id: 'card1', title: 'Card 1', priority: 'High', estimatedShippingDate: '2023-12-31' },
            { id: 'card2', title: 'Card 2', priority: 'Low', estimatedShippingDate: '2024-01-15' },
        ] as DetailedCardProps[];

        render(
            <DroppableColumn
                id="test-column"
                title="Test Column"
                cards={cards}
                onDrop={mockOnDrop}
            />
        );

        expect(screen.getByTestId('column-header')).toHaveTextContent('Test Column');

        expect(screen.getByTestId('column-card-list')).toHaveTextContent('2 cards');

        expect(screen.getByTestId('add-card-button')).toBeInTheDocument();
    });

    it('does not render the AddCardButtonComponent when isLastViewed is true', () => {
        render(
            <DroppableColumn
                id="last-viewed-column"
                title="Last Viewed Column"
                cards={[]}
                onDrop={mockOnDrop}
            />
        );

        expect(screen.queryByTestId('add-card-button')).not.toBeInTheDocument();
    });

});