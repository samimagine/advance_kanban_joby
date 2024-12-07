import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardModals from './CardModals';
import CardEditModal from '../../Modals/CardEditModal/CardEditModal';
import OrderDetailsModal from '../../Modals/OrderDetailsModal/OrderDetailsModal';

jest.mock('../../Modals/CardEditModal/CardEditModal', () => {
    return jest.fn(({ open }) => (open ? <div data-testid="card-edit-modal">Edit Modal</div> : null));
});

jest.mock('../../Modals/OrderDetailsModal/OrderDetailsModal', () => {
    return jest.fn(({ open }) => (open ? <div data-testid="order-details-modal">Details Modal</div> : null));
});

const mockedCardEditModal = CardEditModal as jest.Mock;
const mockedOrderDetailsModal = OrderDetailsModal as jest.Mock;

describe('CardModals', () => {
    const props = {
        openDetailsModal: false,
        setOpenDetailsModal: jest.fn(),
        openEditModal: false,
        setOpenEditModal: jest.fn(),
        id: '1',
        title: 'Test Card',
        orderDescription: 'Test Order',
        priority: 'High Priority',
        estimatedShippingDate: '2023-12-31',
        currentCard: {
            id: '1',
            title: 'Test Card',
            orderDescription: 'Test Order',
            priority: 'High Priority',
            estimatedShippingDate: '2023-12-31',
            tags: []
        }
    };

    it('renders modals but they are closed by default', () => {
        render(<CardModals {...props} />);

        expect(screen.queryByTestId('card-edit-modal')).not.toBeInTheDocument();
        expect(screen.queryByTestId('order-details-modal')).not.toBeInTheDocument();
    });

    it('renders and opens the edit modal when openEditModal is true', () => {
        render(<CardModals {...props} openEditModal={true} />);

        expect(screen.getByTestId('card-edit-modal')).toBeInTheDocument();
    });

    it('renders and opens the details modal when openDetailsModal is true', () => {
        render(<CardModals {...props} openDetailsModal={true} />);

        expect(screen.getByTestId('order-details-modal')).toBeInTheDocument();
    });

    it('calls setOpenEditModal(false) when the edit modal closes', () => {
        render(<CardModals {...props} openEditModal={true} />);

        const editModalProps = mockedCardEditModal.mock.calls[0][0];
        editModalProps.onClose();

        expect(props.setOpenEditModal).toHaveBeenCalledWith(false);
    });

    it('calls setOpenDetailsModal(false) when the details modal closes', () => {
        render(<CardModals {...props} openDetailsModal={true} />);

        const detailsModalProps = mockedOrderDetailsModal.mock.calls[0][0];
        detailsModalProps.onClose();

        expect(props.setOpenDetailsModal).toHaveBeenCalledWith(false);
    });
});
