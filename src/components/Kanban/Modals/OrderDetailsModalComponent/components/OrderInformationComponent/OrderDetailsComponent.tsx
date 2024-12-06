import React from 'react';
import { Typography, Box } from '@mui/material';
import { DetailedCardProps } from '../../../../../../store/interfaces';
import StatusColorChipComponent from '../../../../Common/StatusColorChipComponent/StatusColorChipComponent';

interface OrderDetailsProps {
  orderDescription?: string;
  estimatedShippingDate: string;
  priority: string;
  details?: DetailedCardProps;
}

const OrderDetailsComponent: React.FC<OrderDetailsProps> = ({
  orderDescription,
  estimatedShippingDate,
  priority,
  details,
}) => {
  const orderDetails = [
    { label: 'Part', value: orderDescription },
    { label: 'Part Number', value: details?.orderDetails?.partNumber },
    { label: 'Release Status', value: details?.orderDetails?.releaseStatus },
    { label: 'Drawing Number', value: details?.orderDetails?.drawingNumber },
    { label: 'Flight Article', value: details?.orderDetails?.flightArticle },
    { label: 'Estimated Shipping Date', value: estimatedShippingDate },
    {
      label: 'Priority',
      value: <StatusColorChipComponent label={priority} />,
    },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ margin: '16px' }}>
        Order Details
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
        {orderDetails.map((detail, index) => (
          <Box key={index}>
            <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
              {detail.label}
            </Typography>
            <Typography variant="body1">{detail.value || '-'}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default OrderDetailsComponent;
