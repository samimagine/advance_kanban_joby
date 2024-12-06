import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
    test('renders the User Profile header', () => {
        render(<UserProfile />);

        expect(screen.getByRole('heading', { name: /user profile/i })).toBeInTheDocument();
    });
});
