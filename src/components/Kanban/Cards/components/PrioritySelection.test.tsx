import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrioritySelection from './PrioritySelection';

describe('PrioritySelection', () => {
    it('renders StatusColorChip when not editing priority', () => {
        render(
            <PrioritySelection
                isEditingPriority={false}
                priority='Standard'
                isLastViewed={false}
                onEdit={jest.fn()}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />,
        );

        expect(screen.getByText('Standard')).toBeInTheDocument();
    });

    it('renders Select dropdown when editing priority and not last viewed', () => {
        render(
            <PrioritySelection
                isEditingPriority={true}
                priority='Standard'
                isLastViewed={false}
                onEdit={jest.fn()}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />,
        );

        const selectDropdown = screen.getByRole('combobox');
        expect(selectDropdown).toBeInTheDocument();
        expect(selectDropdown).toHaveTextContent('Standard');
    });

    it('calls onEdit when StatusColorChip is clicked', () => {
        const mockOnEdit = jest.fn();

        render(
            <PrioritySelection
                isEditingPriority={false}
                priority='Standard'
                isLastViewed={false}
                onEdit={mockOnEdit}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />,
        );

        fireEvent.click(screen.getByText('Standard'));

        expect(mockOnEdit).toHaveBeenCalledTimes(1);
    });
});
