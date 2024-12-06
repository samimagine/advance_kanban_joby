import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Settings from './Settings';

describe('Settings Component', () => {
    test('renders the Settings header', () => {
        render(<Settings />);

        expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument();
    });
});