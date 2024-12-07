import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardActions from './CardActions';

describe('CardActions', () => {
    const mockOnClose = jest.fn();
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    const renderComponent = (anchorEl: HTMLElement | null) =>
        render(<CardActions anchorEl={anchorEl} onClose={mockOnClose} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

    it('renders correctly when anchorEl is provided', () => {
        const anchor = document.createElement('div');
        renderComponent(anchor);

        expect(screen.getByText(/Edit/i)).toBeInTheDocument();

        expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });

    it('calls onEdit and onClose when Edit is clicked', () => {
        const anchor = document.createElement('div');
        renderComponent(anchor);

        const editButton = screen.getByText(/Edit/i);
        fireEvent.click(editButton);

        expect(mockOnEdit).toHaveBeenCalledTimes(1);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('calls onDelete when Delete is clicked', () => {
        const anchor = document.createElement('div');
        renderComponent(anchor);

        const deleteButton = screen.getByText(/Delete/i);
        fireEvent.click(deleteButton);

        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });

    it('does not render when anchorEl is null', () => {
        renderComponent(null);

        expect(screen.queryByText(/Edit/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();
    });
});
