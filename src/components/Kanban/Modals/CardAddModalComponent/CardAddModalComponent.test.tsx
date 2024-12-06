import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useKanbanStore } from '../../../../__mocks__/kanbanStore';
import CardAddModalComponent from './CardAddModalComponent';

jest.mock('../../../../store/kanbanStore', () => ({
    useKanbanStore: jest.fn(() => ({
        addCard: jest.fn(),
    })),
}));

describe('CardAddModalComponent', () => {
    const mockAddCard = jest.fn();
    const mockOnClose = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useKanbanStore as jest.Mock).mockReturnValue({
            addCard: mockAddCard,
        });
    });

    it('renders the modal with the correct initial state', () => {
        render(<CardAddModalComponent open={true} onClose={mockOnClose} columnId="test-column" />);
        
        expect(screen.getByText(/Add New Card/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Estimated Shipping Date/i)).toBeInTheDocument();
        expect(screen.getByText(/Order Details/i)).toBeInTheDocument();
        expect(screen.getByTestId('add-card-button')).toBeDisabled();
    });
});