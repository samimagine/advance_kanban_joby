import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderDetailsModal from './OrderDetailsModal';
import { DetailedCardProps } from '../../../../store/interfaces';

jest.mock('./components/FilesSection/FilesSection', () => ({
    __esModule: true,
    default: () => <div data-testid="files-section">FilesSection</div>
}));

jest.mock('./components/HeaderModal/HeaderModal', () => ({
    __esModule: true,
    default: ({ title, onClose }: { title: string; onClose: () => void }) => (
        <div>
            <h1 data-testid="header-modal">{title}</h1>
            <button data-testid="close-button" onClick={onClose}>
                Close
            </button>
        </div>
    )
}));

jest.mock('./components/OrderInformationSection/OrderInformation', () => ({
    __esModule: true,
    default: () => <div data-testid="order-information-section">OrderInformationSection</div>
}));

describe('OrderDetailsModal', () => {
    const mockOnClose = jest.fn();
    const mockDetails: DetailedCardProps = {
        id: '1',
        title: 'Test Card',
        priority: 'High Priority',
        estimatedShippingDate: '2023-12-15',
        files: [
            {
                id: 'f1',
                name: 'File1',
                category: 'All Categories',
                thumbnail: 'thumbnail1.jpg',
                date: '2023-11-01',
                description: 'Test File 1',
                type: 'image/png'
            },
            {
                id: 'f2',
                name: 'File2',
                category: 'Category A',
                thumbnail: 'thumbnail2.jpg',
                date: '2023-11-02',
                description: 'Test File 2',
                type: 'application/pdf'
            }
        ],
        orderDetails: {
            part: 'Test Part',
            partNumber: 'P12345',
            releaseStatus: 'Released',
            drawingNumber: 'DR123',
            flightArticle: 'FA456'
        }
    };

    it('renders the modal with all sections', () => {
        render(
            <OrderDetailsModal
                open={true}
                onClose={mockOnClose}
                title="Test Modal"
                orderDescription="Test Order"
                priority="High Priority"
                estimatedShippingDate="2023-12-15"
                details={mockDetails}
            />
        );

        expect(screen.getByTestId('header-modal')).toHaveTextContent('Test Modal');
        expect(screen.getByTestId('order-information-section')).toBeInTheDocument();
        expect(screen.getByTestId('files-section')).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        render(
            <OrderDetailsModal
                open={true}
                onClose={mockOnClose}
                title="Test Modal"
                orderDescription="Test Order"
                priority="High Priority"
                estimatedShippingDate="2023-12-15"
                details={mockDetails}
            />
        );

        fireEvent.click(screen.getByTestId('close-button'));
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('renders correctly without details', () => {
        render(
            <OrderDetailsModal
                open={true}
                onClose={mockOnClose}
                title="Test Modal"
                orderDescription="Test Order"
                priority="High Priority"
                estimatedShippingDate="2023-12-15"
                details={undefined}
            />
        );

        expect(screen.getByTestId('header-modal')).toHaveTextContent('Test Modal');
        expect(screen.getByTestId('order-information-section')).toBeInTheDocument();
        expect(screen.getByTestId('files-section')).toBeInTheDocument();
    });

    it('does not render anything when modal is closed', () => {
        render(
            <OrderDetailsModal
                open={false}
                onClose={mockOnClose}
                title="Test Modal"
                orderDescription="Test Order"
                priority="High Priority"
                estimatedShippingDate="2023-12-15"
                details={mockDetails}
            />
        );

        expect(screen.queryByTestId('header-modal')).not.toBeInTheDocument();
        expect(screen.queryByTestId('order-information-section')).not.toBeInTheDocument();
        expect(screen.queryByTestId('files-section')).not.toBeInTheDocument();
    });
});
