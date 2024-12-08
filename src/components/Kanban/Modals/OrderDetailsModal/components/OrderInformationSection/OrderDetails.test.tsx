import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderDetails from './OrderDetails';

jest.mock('../../../../Common/StatusColorChip', () => ({
    __esModule: true,
    default: ({ label }: { label: string }) => <span data-testid='status-chip'>{label}</span>,
}));

describe('OrderDetails', () => {
    it('renders with all details provided', () => {
        const mockDetails = {
            id: '1',
            title: 'Test Card',
            priority: 'Critical Path',
            estimatedShippingDate: '2023-12-15',
            orderDetails: {
                part: 'Test Part',
                partNumber: 'P12345',
                releaseStatus: 'Released',
                drawingNumber: 'DR123',
                flightArticle: 'FA456',
            },
        };

        render(
            <OrderDetails
                orderDescription='Test Part'
                estimatedShippingDate='2023-12-15'
                priority='Critical Path'
                details={mockDetails}
            />,
        );

        const labels = [
            'Part',
            'Part Number',
            'Release Status',
            'Drawing Number',
            'Flight Article',
            'Estimated Shipping Date',
            'Priority',
        ];
        const values = ['Test Part', 'P12345', 'Released', 'DR123', 'FA456', '2023-12-15'];

        labels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });

        values.forEach((value) => {
            expect(screen.getByText(value)).toBeInTheDocument();
        });

        expect(screen.getByTestId('status-chip')).toHaveTextContent('Critical Path');
    });

    it('renders fallback for missing nested details', () => {
        const mockDetails = {
            id: '2',
            title: 'Fallback Test',
            priority: 'High Priority',
            estimatedShippingDate: '2023-12-20',
            orderDetails: {
                part: '',
                partNumber: '',
                releaseStatus: '',
                drawingNumber: '',
                flightArticle: '',
            },
        };

        render(
            <OrderDetails
                orderDescription='Fallback Test'
                estimatedShippingDate='2023-12-20'
                priority='High Priority'
                details={mockDetails}
            />,
        );

        expect(screen.getByText('Fallback Test')).toBeInTheDocument();
        expect(screen.getAllByText('-')).toHaveLength(4);
        expect(screen.getByText('2023-12-20')).toBeInTheDocument();
        expect(screen.getByTestId('status-chip')).toHaveTextContent('High Priority');
    });
});
