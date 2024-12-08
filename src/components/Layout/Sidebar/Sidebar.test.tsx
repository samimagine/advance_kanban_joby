import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders correctly', () => {
        render(
            <Sidebar
                selectedView={''}
                onViewChange={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />,
        );
    });
});
