import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrioritySelectionComponent from './PrioritySelectionComponent';

describe('PrioritySelectionComponent', () => {
    it('renders StatusColorChipComponent when not editing priority', () => {
        render(
            <PrioritySelectionComponent
                isEditingPriority={false}
                priority="Standard"
                isLastViewed={false}
                onEdit={jest.fn()}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />
        );

        expect(screen.getByText('Standard')).toBeInTheDocument();
    });

    it('renders Select dropdown when editing priority and not last viewed', () => {
        render(
            <PrioritySelectionComponent
                isEditingPriority={true}
                priority="Standard"
                isLastViewed={false}
                onEdit={jest.fn()}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />
        );

        const selectDropdown = screen.getByRole('combobox');
        expect(selectDropdown).toBeInTheDocument();
        expect(selectDropdown).toHaveTextContent('Standard');
    });

    it('calls onEdit when StatusColorChipComponent is clicked', () => {
        const mockOnEdit = jest.fn();

        render(
            <PrioritySelectionComponent
                isEditingPriority={false}
                priority="Standard"
                isLastViewed={false}
                onEdit={mockOnEdit}
                onChange={jest.fn()}
                onBlur={jest.fn()}
            />
        );

        fireEvent.click(screen.getByText('Standard'));

        expect(mockOnEdit).toHaveBeenCalledTimes(1);
    });
});
