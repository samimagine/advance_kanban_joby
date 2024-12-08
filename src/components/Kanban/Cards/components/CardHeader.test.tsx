import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
    const mockOnDetailsClick = jest.fn();
    const mockOnMenuClick = jest.fn();
    const mockAddLastViewed = jest.fn();

    const props = {
        title: 'Sample Title',
        currentCard: { title: 'Current Card Title' },
        onDetailsClick: mockOnDetailsClick,
        onMenuClick: mockOnMenuClick,
        addLastViewed: mockAddLastViewed,
    };

    it('renders the card title', () => {
        render(<CardHeader {...props} />);
        expect(screen.getByText('Current Card Title')).toBeInTheDocument();
    });

    it('renders the fallback title if currentCard title is undefined', () => {
        render(<CardHeader {...props} currentCard={undefined} />);
        expect(screen.getByText('Sample Title')).toBeInTheDocument();
    });

    it('calls addLastViewed and onDetailsClick when the details button is clicked', () => {
        render(<CardHeader {...props} />);

        const detailsButton = screen.getByLabelText('details');
        fireEvent.click(detailsButton);

        expect(mockAddLastViewed).toHaveBeenCalledTimes(1);
        expect(mockOnDetailsClick).toHaveBeenCalledTimes(1);
    });

    it('calls onMenuClick when the menu button is clicked', () => {
        render(<CardHeader {...props} />);

        const menuButton = screen.getByRole('button', { name: /more options/i });
        fireEvent.click(menuButton);

        expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
    });
});
