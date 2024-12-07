import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentRenderer from './ContentRenderer';

describe('ContentRenderer', () => {
    test('renders Home view when selectedView is "Home"', () => {
        render(<ContentRenderer selectedView="Home" />);
        expect(screen.getByRole('heading', { name: /welcome home/i })).toBeInTheDocument();
    });

    test('renders UserProfile view when selectedView is "User"', () => {
        render(<ContentRenderer selectedView="User" />);
        expect(screen.getByRole('heading', { name: /user profile/i })).toBeInTheDocument();
    });

    test('renders Settings view when selectedView is "Settings"', () => {
        render(<ContentRenderer selectedView="Settings" />);
        expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument();
    });

    test('renders Order Overview view when selectedView is "Order Overview"', () => {
        render(<ContentRenderer selectedView="Order Overview" />);
        expect(screen.getByRole('heading', { name: /order overview/i })).toBeInTheDocument();
    });

    test('renders default view when selectedView is unknown', () => {
        render(<ContentRenderer selectedView="Unknown" />);
        expect(screen.getByRole('heading', { name: /welcome home/i })).toBeInTheDocument();
    });
});
