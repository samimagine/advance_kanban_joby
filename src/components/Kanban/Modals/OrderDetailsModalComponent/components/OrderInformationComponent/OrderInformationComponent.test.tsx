import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DetailedCardProps } from '../../../../../../store/interfaces';
import OrderInformationSectionComponent from './OrderInformationComponent';

jest.mock('./OrderDetailsComponent', () => ({
    __esModule: true,
    default: () => <div data-testid="order-details-component">OrderDetailsComponent</div>
}));

jest.mock('./ProcessDetailsComponent', () => ({
    __esModule: true,
    default: () => <div data-testid="process-details-component">ProcessDetailsComponent</div>
}));

describe('OrderInformationSectionComponent', () => {
    const mockDetails: DetailedCardProps = {
        id: '1',
        title: 'Test Card',
        priority: 'High Priority',
        estimatedShippingDate: '2023-12-15',
        orderDetails: {
            part: 'Test Part',
            partNumber: 'P12345',
            releaseStatus: 'Released',
            drawingNumber: 'DR123',
            flightArticle: 'FA456'
        },
        processDetails: {
            material: 'Steel',
            materialStockSize: '20x20x100 mm',
            surfaceTreatment: 'Anodizing',
            machine: 'CNC Milling Machine'
        }
    };

    it('renders OrderDetailsComponent and ProcessDetailsComponent', () => {
        render(
            <OrderInformationSectionComponent
                orderDescription="Test Order"
                estimatedShippingDate="2023-12-15"
                priority="High Priority"
                details={mockDetails}
            />
        );

        expect(screen.getByTestId('order-details-component')).toBeInTheDocument();
        expect(screen.getByTestId('process-details-component')).toBeInTheDocument();
    });

    it('renders without details', () => {
        render(
            <OrderInformationSectionComponent
                orderDescription="Test Order"
                estimatedShippingDate="2023-12-15"
                priority="High Priority"
                details={undefined}
            />
        );

        expect(screen.getByTestId('order-details-component')).toBeInTheDocument();
        expect(screen.getByTestId('process-details-component')).toBeInTheDocument();
    });

    it('renders the layout with divider', () => {
        render(
            <OrderInformationSectionComponent
                orderDescription="Test Order"
                estimatedShippingDate="2023-12-15"
                priority="High Priority"
                details={mockDetails}
            />
        );

        expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('renders with missing nested details in processDetails', () => {
        const incompleteDetails: DetailedCardProps = {
            id: '2',
            title: 'Incomplete Details',
            priority: 'Medium Priority',
            estimatedShippingDate: '2023-12-20',
            processDetails: {
                material: '',
                materialStockSize: '',
                surfaceTreatment: '',
                machine: ''
            }
        };

        render(
            <OrderInformationSectionComponent
                orderDescription="Incomplete Details Test"
                estimatedShippingDate="2023-12-20"
                priority="Medium Priority"
                details={incompleteDetails}
            />
        );

        expect(screen.getByTestId('order-details-component')).toBeInTheDocument();
        expect(screen.getByTestId('process-details-component')).toBeInTheDocument();
    });
});
