import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useKanbanStore } from '../../../../__mocks__/kanbanStore';
import CardEditModalComponent from './CardEditModalComponent';

jest.mock('../../../../store/kanbanStore');

describe('CardEditModalComponent', () => {
    const mockEditCard = jest.fn();
    const mockOnClose = jest.fn();
    const card = {
        id: 'card1',
        title: 'Test Card',
        priority: 'Standard',
        estimatedShippingDate: '15/Dec/2023'
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useKanbanStore as jest.Mock).mockReturnValue({
            editCard: mockEditCard
        });
    });

    it('closes the modal without saving when the close button is clicked', () => {
        render(<CardEditModalComponent open={true} onClose={mockOnClose} card={card} />);

        fireEvent.click(screen.getByTestId('close-button'));

        expect(mockOnClose).toHaveBeenCalled();
        expect(mockEditCard).not.toHaveBeenCalled();
    });
});
