import React from 'react';
import CardEditModal from '../../Modals/CardEditModal/CardEditModal';
import OrderDetailsModal from '../../Modals/OrderDetailsModal/OrderDetailsModal';
import { DetailedCard } from '../../../../store/interfaces';

interface CardModalsProps {
    openDetailsModal: boolean;
    setOpenDetailsModal: (open: boolean) => void;
    openEditModal: boolean;
    setOpenEditModal: (open: boolean) => void;
    id: string;
    title: string;
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    currentCard?: DetailedCard;
}

const CardModals: React.FC<CardModalsProps> = ({
    openDetailsModal,
    setOpenDetailsModal,
    openEditModal,
    setOpenEditModal,
    id,
    title,
    orderDescription,
    priority,
    estimatedShippingDate,
    currentCard,
}) => (
    <>
        <CardEditModal
            open={openEditModal}
            onClose={() => setOpenEditModal(false)}
            card={{
                id,
                title,
                orderDescription,
                priority,
                estimatedShippingDate,
            }}
        />
        <OrderDetailsModal
            open={openDetailsModal}
            onClose={() => setOpenDetailsModal(false)}
            title={title}
            orderDescription={orderDescription}
            priority={priority}
            estimatedShippingDate={estimatedShippingDate}
            details={currentCard}
        />
    </>
);

export default CardModals;
