import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBarComponent from './SearchBarComponent';

describe('SearchBarComponent', () => {
    it('renders the search bar with the correct initial value', () => {
        const mockSetSearchQuery = jest.fn();
        const initialSearchQuery = 'Initial Query';

        render(<SearchBarComponent searchQuery={initialSearchQuery} setSearchQuery={mockSetSearchQuery} />);

        const searchInput = screen.getByLabelText(/Search Cards/i);

        expect(searchInput).toBeInTheDocument();

        expect(searchInput).toHaveValue(initialSearchQuery);
    });

    it('updates the search query when typing in the input field', () => {
        const mockSetSearchQuery = jest.fn();
        const initialSearchQuery = '';

        render(<SearchBarComponent searchQuery={initialSearchQuery} setSearchQuery={mockSetSearchQuery} />);

        const searchInput = screen.getByLabelText(/Search Cards/i);

        fireEvent.change(searchInput, { target: { value: 'New Query' } });

        expect(mockSetSearchQuery).toHaveBeenCalledWith('New Query');
    });

    it('displays the search icon in the input field', () => {
        const mockSetSearchQuery = jest.fn();

        render(<SearchBarComponent searchQuery="" setSearchQuery={mockSetSearchQuery} />);

        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    });
});
