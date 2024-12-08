import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnHeader from './ColumnHeader';

describe('ColumnHeader', () => {
    it('renders the title', () => {
        render(<ColumnHeader title='To Do' isLastViewed={false} onFilterClick={jest.fn()} />);

        expect(screen.getByText('To Do')).toBeInTheDocument();
    });

    it('renders the filter icon and calls onFilterClick when clicked', () => {
        const mockOnFilterClick = jest.fn();
        render(<ColumnHeader title='To Do' isLastViewed={false} onFilterClick={mockOnFilterClick} />);

        const filterButton = screen.getByRole('button', { name: /filter/i });
        expect(filterButton).toBeInTheDocument();

        fireEvent.click(filterButton);

        expect(mockOnFilterClick).toHaveBeenCalledTimes(1);
    });

    it('does not render the filter icon when isLastViewed is true', () => {
        render(<ColumnHeader title='To Do' isLastViewed={true} onFilterClick={jest.fn()} />);

        const filterButton = screen.queryByRole('button', { name: /filter/i });
        expect(filterButton).not.toBeInTheDocument();
    });
});
