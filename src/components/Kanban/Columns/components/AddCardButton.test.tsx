import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCardButton from './AddCardButton';

jest.mock('../../Modals/CardAddModal/CardAddModal', () => {
    return jest.fn(({ open, onClose }) =>
        open ? (
            <div data-testid="card-add-modal">
                Card Add Modal
                <button data-testid="close-modal-button" onClick={onClose}>
                    Close
                </button>
            </div>
        ) : null
    );
});

describe('AddCardButton', () => {
    it('renders the Add new card button', () => {
        render(<AddCardButton columnId="todo-column" />);

        const button = screen.getByRole('button', { name: /Add new card/i });
        expect(button).toBeInTheDocument();
    });

    it('opens the modal when the button is clicked', () => {
        render(<AddCardButton columnId="todo-column" />);

        const button = screen.getByRole('button', { name: /Add new card/i });
        fireEvent.click(button);

        const modal = screen.getByTestId('card-add-modal');
        expect(modal).toBeInTheDocument();
    });

    it('closes the modal when onClose is triggered', () => {
        render(<AddCardButton columnId="todo-column" />);

        fireEvent.click(screen.getByRole('button', { name: /Add new card/i }));
        expect(screen.getByTestId('card-add-modal')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('close-modal-button'));
        expect(screen.queryByTestId('card-add-modal')).not.toBeInTheDocument();
    });
});
