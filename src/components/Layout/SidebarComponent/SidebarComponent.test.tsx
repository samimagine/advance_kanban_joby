import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './SidebarComponent';

describe('SidebarComponent Component', () => {
    it('renders correctly', () => {
        render(
            <Sidebar
                selectedView={''}
                onViewChange={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );
        // Add your assertions here
    });
});
