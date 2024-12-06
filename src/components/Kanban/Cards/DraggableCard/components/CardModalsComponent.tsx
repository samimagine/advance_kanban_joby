import React from 'react';
import CardEditModalComponent from '../../../Modals/CardEditModal/CardEditModalComponent';
import OrderDetailsModalComponent from '../../../Modals/OrderDetailsModalComponent/OrderDetailsModalComponent';
import { DetailedCardProps } from '../../../../../store/interfaces';

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
  currentCard?: DetailedCardProps;
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
    <CardEditModalComponent
      open={openEditModal}
      onClose={() => setOpenEditModal(false)}
      card={{ id, title, orderDescription, priority, estimatedShippingDate }}
    />
    <OrderDetailsModalComponent
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
