import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardBody from './CardBody';

jest.mock('./PrioritySelection', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="priority-selection">Priority Selection</div>)
}));

jest.mock('./CardTags', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="card-tags">Card Tags</div>)
}));

describe('CardBody', () => {
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
        render(<CardBody {...props} />);
        expect(screen.getByText(/Test order description/i)).toBeInTheDocument();
    });

    it('renders due date', () => {
        render(<CardBody {...props} />);
        expect(screen.getByText(/Due Date: 2023-12-31/i)).toBeInTheDocument();
    });

    it('renders PrioritySelection', () => {
        render(<CardBody {...props} />);
        expect(screen.getByTestId('priority-selection')).toBeInTheDocument();
    });

    it('renders CardTags', () => {
        render(<CardBody {...props} />);
        expect(screen.getByTestId('card-tags')).toBeInTheDocument();
    });
});
