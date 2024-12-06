import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnWrapperComponent from './ColumnWrapperComponent';

describe('ColumnWrapperComponent', () => {
    it('renders its children', () => {
        const { getByTestId } = render(
            <ColumnWrapperComponent>
                <div data-testid="child-element">Child Content</div>
            </ColumnWrapperComponent>
        );

        const childElement = getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent('Child Content');
    });

    it('applies the dropRef when provided', () => {
        const mockRef = createRef<HTMLDivElement>();
        render(
            <ColumnWrapperComponent dropRef={mockRef}>
                <div>Child Content</div>
            </ColumnWrapperComponent>
        );

        expect(mockRef.current).toBeInstanceOf(HTMLDivElement);
    });
});
