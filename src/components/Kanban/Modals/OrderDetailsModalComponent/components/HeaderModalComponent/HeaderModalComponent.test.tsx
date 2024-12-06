import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderModalComponent from './HeaderModalComponent';

describe('HeaderModalComponent', () => {
    const mockOnClose = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the modal header with the given title', () => {
        render(<HeaderModalComponent title="Test Modal" onClose={mockOnClose} />);

        expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        render(<HeaderModalComponent title="Test Modal" onClose={mockOnClose} />);

        fireEvent.click(screen.getByRole('button'));

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
