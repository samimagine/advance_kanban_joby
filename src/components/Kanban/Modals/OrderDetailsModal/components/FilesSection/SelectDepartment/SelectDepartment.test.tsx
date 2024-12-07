import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectDepartment from './SelectDepartment';

describe('SelectDepartment', () => {
    const mockOnTabChange = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the component with all tabs and the selected tab', () => {
        render(<SelectDepartment selectedTab="All Categories" onTabChange={mockOnTabChange} />);

        expect(screen.getByText(/Select a Department:/i)).toBeInTheDocument();

        const tabs = ['All Categories', 'Process Engineering', 'Quality', 'Programming', 'Surface Treatment'];

        tabs.forEach(tab => {
            expect(screen.getByText(tab)).toBeInTheDocument();
        });

        const selectedTab = screen.getByRole('tab', { name: 'All Categories' });
        expect(selectedTab).toHaveAttribute('aria-selected', 'true');
    });

    it('calls onTabChange when a tab is clicked', () => {
        render(<SelectDepartment selectedTab="All Categories" onTabChange={mockOnTabChange} />);

        const tab = screen.getByRole('tab', { name: 'Quality' });
        fireEvent.click(tab);

        expect(mockOnTabChange).toHaveBeenCalledTimes(1);
        expect(mockOnTabChange).toHaveBeenCalledWith(expect.any(Object), 'Quality');
    });
});
