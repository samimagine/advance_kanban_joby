import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardBodyComponent from './CardBodyComponent';

jest.mock('./PrioritySelectionComponent', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="priority-selection">Priority Selection</div>)
}));

jest.mock('./CardTagsComponent', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="card-tags">Card Tags</div>)
}));

describe('CardBodyComponent', () => {
    const mockOnPriorityChange = jest.fn();
    const mockOnPriorityEdit = jest.fn();
    const mockOnPriorityBlur = jest.fn();
    const mockOnAddTag = jest.fn();
    const mockOnRemoveTag = jest.fn();

    const props = {
        orderDescription: 'Test order description',
        estimatedShippingDate: '2023-12-31',
        currentPriority: 'High Priority',
        priority: 'Critical Path',
        isLastViewed: false,
        isEditingPriority: false,
        onPriorityChange: mockOnPriorityChange,
        onPriorityEdit: mockOnPriorityEdit,
        onPriorityBlur: mockOnPriorityBlur,
        tags: ['tag1', 'tag2'],
        onAddTag: mockOnAddTag,
        onRemoveTag: mockOnRemoveTag
    };

    it('renders order description', () => {
        render(<CardBodyComponent {...props} />);
        expect(screen.getByText(/Test order description/i)).toBeInTheDocument();
    });

    it('renders due date', () => {
        render(<CardBodyComponent {...props} />);
        expect(screen.getByText(/Due Date: 2023-12-31/i)).toBeInTheDocument();
    });

    it('renders PrioritySelectionComponent', () => {
        render(<CardBodyComponent {...props} />);
        expect(screen.getByTestId('priority-selection')).toBeInTheDocument();
    });

    it('renders CardTagsComponent', () => {
        render(<CardBodyComponent {...props} />);
        expect(screen.getByTestId('card-tags')).toBeInTheDocument();
    });
});
