import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    it('renders the welcome message correctly', () => {
        render(<Home />);
        const headingElement = screen.getByText(/Welcome Home/i);
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Welcome Home');
    });
});