import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColumnWrapper from './ColumnWrapper';

describe('ColumnWrapper', () => {
    it('renders its children', () => {
        const { getByTestId } = render(
            <ColumnWrapper>
                <div data-testid='child-element'>Child Content</div>
            </ColumnWrapper>,
        );

        const childElement = getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent('Child Content');
    });

    it('applies the dropRef when provided', () => {
        const mockRef = createRef<HTMLDivElement>();
        render(
            <ColumnWrapper dropRef={mockRef}>
                <div>Child Content</div>
            </ColumnWrapper>,
        );

        expect(mockRef.current).toBeInstanceOf(HTMLDivElement);
    });
});
