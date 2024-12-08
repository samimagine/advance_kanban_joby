import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./components/Layout/Sidebar/Sidebar', () => {
    const SidebarMock = ({ selectedView }: { selectedView: string }) => (
        <div data-testid='sidebar'>{`Sidebar: ${selectedView}`}</div>
    );
    SidebarMock.displayName = 'SidebarMock';
    return SidebarMock;
});

jest.mock('./components/Layout/ContentRenderer/ContentRenderer', () => {
    const ContentRendererMock = ({ selectedView }: { selectedView: string }) => (
        <div data-testid='content-renderer'>{`Content: ${selectedView}`}</div>
    );
    ContentRendererMock.displayName = 'ContentRendererMock';
    return ContentRendererMock;
});

describe('App ', () => {
    test('renders Sidebar and ContentRenderer', () => {
        render(<App />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveTextContent('Sidebar: Order Overview');

        expect(screen.getByTestId('content-renderer')).toBeInTheDocument();
        expect(screen.getByTestId('content-renderer')).toHaveTextContent('Content: Order Overview');
    });

    test('changes the view when Sidebar updates the selectedView', () => {
        render(<App />);

        const sidebarElement = screen.getByTestId('sidebar');
        const contentElement = screen.getByTestId('content-renderer');

        expect(sidebarElement).toHaveTextContent('Sidebar: Order Overview');
        expect(contentElement).toHaveTextContent('Content: Order Overview');
    });
});
