import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnCardList from './ColumnCardListComponent';

describe('ColumnCardList when isLastViewed is true', () => {
    const mockCards = [
        {
            id: '1',
            title: 'Card 1',
            orderDescription: 'Description 1',
            priority: 'High Priority',
            estimatedShippingDate: '2023-12-31',
            tags: ['Tag1', 'Tag2'],
            isDeleted: false,
            orderDetails: {
                part: 'Part1',
                partNumber: 'PN-123',
                releaseStatus: 'Released',
                drawingNumber: 'DR-456',
                flightArticle: 'FA-789'
            }
        },
        {
            id: '2',
            title: 'Deleted Card',
            orderDescription: 'Description 2',
            priority: 'Low Priority',
            estimatedShippingDate: '2023-11-30',
            tags: [],
            isDeleted: true,
            orderDetails: {
                part: 'Part2',
                partNumber: 'PN-456',
                releaseStatus: 'Not Released',
                drawingNumber: 'DR-789',
                flightArticle: 'FA-123'
            }
        }
    ];

    it('renders static cards with correct properties', () => {
        render(<ColumnCardList cards={mockCards} isLastViewed={true} columnId="column-1" />);

        expect(screen.getByText('Card 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('High Priority')).toBeInTheDocument();

        expect(screen.getByText('Tag1')).toBeInTheDocument();
        expect(screen.getByText('Tag2')).toBeInTheDocument();

        expect(screen.getByText('Deleted Card')).toBeInTheDocument();
    });

    it('renders a tooltip for deleted cards', async () => {
        render(<ColumnCardList cards={mockCards} isLastViewed={true} columnId="column-1" />);

        const deletedCard = screen.getByText('Deleted Card');
        fireEvent.mouseOver(deletedCard);

        const tooltip = await screen.findByText(/This card was removed from the board/i);
        expect(tooltip).toBeInTheDocument();
    });
});