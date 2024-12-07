import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusColorChip from './StatusColorChip';

describe('StatusColorChip', () => {
    test('renders with the correct label', () => {
        render(<StatusColorChip label="High Priority" isLastViewed={false} />);
        const chip = screen.getByText('High Priority');
        expect(chip).toBeInTheDocument();
    });

    test('applies correct styles for High Priority', () => {
        render(<StatusColorChip label="High Priority" isLastViewed={false} />);
        const chip = screen.getByTestId('status-chip');

        expect(chip).toHaveStyle('background-color: #f6eddb');
        expect(chip).toHaveStyle('color: #ca8b00');
    });

    test('does not allow clicks when isLastViewed is true', () => {
        const handleClick = jest.fn();
        render(<StatusColorChip label="Standard" isLastViewed={true} onClick={handleClick} />);
        const chip = screen.getByTestId('status-chip');
        chip.click();
        expect(handleClick).not.toHaveBeenCalled();
    });

    test('calls onClick when clicked and isLastViewed is false', () => {
        const handleClick = jest.fn();
        render(<StatusColorChip label="Standard" isLastViewed={false} onClick={handleClick} />);
        const chip = screen.getByText('Standard');
        chip.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies correct styles when isLastViewed is true', () => {
        render(<StatusColorChip label="Critical Path" isLastViewed={true} />);
        const chip = screen.getByTestId('status-chip');

        expect(chip).toHaveStyle('cursor: default');
    });
});
