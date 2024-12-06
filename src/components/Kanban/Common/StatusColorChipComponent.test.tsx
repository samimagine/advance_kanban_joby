import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusColorChipComponent from './StatusColorChipComponent';

describe('StatusColorChipComponent', () => {
    test('renders with the correct label', () => {
        render(<StatusColorChipComponent label="High Priority" isLastViewed={false} />);
        const chip = screen.getByText('High Priority');
        expect(chip).toBeInTheDocument();
    });

    test('applies correct styles for High Priority', () => {
        render(<StatusColorChipComponent label="High Priority" isLastViewed={false} />);
        const chip = screen.getByTestId('status-chip');

        expect(chip).toHaveStyle('background-color: #f6eddb');
        expect(chip).toHaveStyle('color: #ca8b00');
    });

    test('does not allow clicks when isLastViewed is true', () => {
        const handleClick = jest.fn();
        render(<StatusColorChipComponent label="Standard" isLastViewed={true} onClick={handleClick} />);
        const chip = screen.getByTestId('status-chip');
        chip.click();
        expect(handleClick).not.toHaveBeenCalled();
    });

    test('calls onClick when clicked and isLastViewed is false', () => {
        const handleClick = jest.fn();
        render(<StatusColorChipComponent label="Standard" isLastViewed={false} onClick={handleClick} />);
        const chip = screen.getByText('Standard');
        chip.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies correct styles when isLastViewed is true', () => {
        render(<StatusColorChipComponent label="Critical Path" isLastViewed={true} />);
        const chip = screen.getByTestId('status-chip');

        expect(chip).toHaveStyle('cursor: default');
    });
});
