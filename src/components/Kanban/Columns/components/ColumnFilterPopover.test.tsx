import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnFilterPopover from './ColumnFilterPopover';

describe('ColumnFilterPopover', () => {
    const mockOnClose = jest.fn();
    const mockOnPriorityChange = jest.fn();
    const mockOnSortChange = jest.fn();

    const renderComponent = () =>
        render(
            <ColumnFilterPopover
                anchorEl={document.body}
                isOpen={true}
                onClose={mockOnClose}
                priorityFilter="High Priority"
                sortOrder="newest"
                onPriorityChange={mockOnPriorityChange}
                onSortChange={mockOnSortChange}
            />
        );

    it('calls onPriorityChange when a priority is selected', () => {
        renderComponent();

        fireEvent.mouseDown(screen.getByText(/High Priority/i));

        fireEvent.click(screen.getByText('Standard'));

        expect(mockOnPriorityChange).toHaveBeenCalledWith('Standard');
    });

    it('calls onSortChange when a sort order is selected', () => {
        renderComponent();

        fireEvent.mouseDown(screen.getByText(/Sort by Date \(Newest to Oldest\)/i));

        fireEvent.click(screen.getByText('Sort by Date (Oldest to Newest)'));

        expect(mockOnSortChange).toHaveBeenCalledWith('oldest');
    });
});
