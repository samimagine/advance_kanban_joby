import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCardWrapper from './DraggableCardWrapper';

describe('DraggableCardWrapper', () => {
    const renderWithDndProvider = (ui: React.ReactElement) => {
        return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
    };

    it('renders children and applies correct styles', () => {
        renderWithDndProvider(
            <DraggableCardWrapper id='test-card' columnId='test-column' isLastViewed={false}>
                <div data-testid='child-content'>Child Content</div>
            </DraggableCardWrapper>,
        );

        const wrapper = screen.getByTestId('child-content').parentElement;

        expect(screen.getByTestId('child-content')).toBeInTheDocument();

        expect(wrapper).toHaveStyle('opacity: 1');
        expect(wrapper).toHaveStyle('cursor: grab');
    });

    it('applies correct styles when isLastViewed is true', () => {
        renderWithDndProvider(
            <DraggableCardWrapper id='test-card' columnId='test-column' isLastViewed={true}>
                <div data-testid='child-content'>Child Content</div>
            </DraggableCardWrapper>,
        );

        const wrapper = screen.getByTestId('child-content').parentElement;

        expect(wrapper).toHaveStyle('cursor: default');
    });
});
