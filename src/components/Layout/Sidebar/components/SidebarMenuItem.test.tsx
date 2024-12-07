import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SidebarMenuItem from './SidebarMenuItem';

describe('SidebarMenuItem', () => {
    test('renders the correct tooltip label and icon', () => {
        render(<SidebarMenuItem label="Home" icon="HomeIcon" selected={false} onClick={() => {}} />);

        const listItem = screen.getByLabelText('Home');
        expect(listItem).toBeInTheDocument();

        const icon = screen.getByTestId('HomeIcon');
        expect(icon).toBeInTheDocument();
    });

    test('applies selected styles when selected', () => {
        render(<SidebarMenuItem label="Settings" icon="SettingsIcon" selected={true} onClick={() => {}} />);

        const listItem = screen.getByLabelText('Settings');
        expect(listItem).toHaveStyle('background-color: #e0e0e0');
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<SidebarMenuItem label="User" icon="PersonIcon" selected={false} onClick={handleClick} />);

        const listItem = screen.getByLabelText('User');
        fireEvent.click(listItem);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('displays the tooltip on hover', async () => {
        render(<SidebarMenuItem label="Home" icon="HomeIcon" selected={false} onClick={() => {}} />);

        const listItem = screen.getByLabelText('Home');
        await userEvent.hover(listItem);

        const tooltip = await screen.findByText('Home');
        expect(tooltip).toBeInTheDocument();
    });
});
