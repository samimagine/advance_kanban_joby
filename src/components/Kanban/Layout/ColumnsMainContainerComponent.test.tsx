import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnsMainContainerComponent from './ColumnsMainContainerComponent';
import { Column, DetailedCardProps } from '../../../store/interfaces';

jest.mock('../Columns/DroppableColumn', () => {
    // eslint-disable-next-line react/display-name
    return ({ id, title, cards }: { id: string; title: string; cards: DetailedCardProps[] }) => (
        <div data-testid={`column-${id}`}>
            <h3>{title}</h3>
            <p>{cards.length} cards</p>
        </div>
    );
});

describe('ColumnsMainContainerComponent', () => {
    const mockFilterCards = jest.fn(cards => cards);
    const mockOnDrop = jest.fn();

    it('renders all columns with correct titles and card counts', () => {
        const columns: Column[] = [
            {
                id: 'column1',
                title: 'Column 1',
                cards: [
                    { id: 'card1', title: 'Card 1', priority: 'High', estimatedShippingDate: '2023-12-31' },
                    { id: 'card2', title: 'Card 2', priority: 'Low', estimatedShippingDate: '2024-01-15' },
                ],
            },
            {
                id: 'column2',
                title: 'Column 2',
                cards: [{ id: 'card3', title: 'Card 3', priority: 'Medium', estimatedShippingDate: '2024-03-10' }],
            },
        ];

        render(
            <ColumnsMainContainerComponent
                columns={columns}
                filterCards={mockFilterCards}
                onDrop={mockOnDrop}
            />
        );

        expect(screen.getByTestId('column-column1')).toBeInTheDocument();
        expect(screen.getByTestId('column-column2')).toBeInTheDocument();

        expect(screen.getByText('Column 1')).toBeInTheDocument();
        expect(screen.getByText('2 cards')).toBeInTheDocument();

        expect(screen.getByText('Column 2')).toBeInTheDocument();
        expect(screen.getByText('1 cards')).toBeInTheDocument();

        expect(mockFilterCards).toHaveBeenCalledTimes(2);
    });

    it('renders no columns when the list is empty', () => {
        render(
            <ColumnsMainContainerComponent
                columns={[]}
                filterCards={mockFilterCards}
                onDrop={mockOnDrop}
            />
        );

        expect(screen.queryByTestId('column-column1')).not.toBeInTheDocument();
        expect(screen.queryByTestId('column-column2')).not.toBeInTheDocument();
    });
});