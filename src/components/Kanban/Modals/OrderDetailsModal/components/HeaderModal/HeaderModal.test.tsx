import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderModal from './HeaderModal';

describe('HeaderModal', () => {
    const mockOnClose = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the modal header with the given title', () => {
        render(<HeaderModal title="Test Modal" onClose={mockOnClose} />);

        expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        render(<HeaderModal title="Test Modal" onClose={mockOnClose} />);

        fireEvent.click(screen.getByRole('button'));

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
