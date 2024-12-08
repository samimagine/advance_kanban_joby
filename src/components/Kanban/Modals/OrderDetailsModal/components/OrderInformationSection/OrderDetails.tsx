import React from 'react';
import { Typography, Box } from '@mui/material';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { DetailedCard } from '../../../../../../store/interfaces';
import StatusColorChip from '../../../../Common/StatusColorChip';

interface OrderDetailsProps {
    orderDescription?: string;
    estimatedShippingDate: string;
    priority: string;
    details?: DetailedCard;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderDescription, estimatedShippingDate, priority, details }) => {
    const orderDetails = [
        { label: 'Part', value: orderDescription },
        { label: 'Part Number', value: details?.orderDetails?.partNumber },
        {
            label: 'Release Status',
            value: details?.orderDetails?.releaseStatus,
        },
        {
            label: 'Drawing Number',
            value: details?.orderDetails?.drawingNumber,
        },
        {
            label: 'Flight Article',
            value: details?.orderDetails?.flightArticle,
        },
        { label: 'Estimated Shipping Date', value: estimatedShippingDate },
        {
            label: 'Priority',
            value: <StatusColorChip label={priority} isLastViewed={false} />,
        },
    ];

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                <ReceiptLongOutlinedIcon fontSize='large' sx={{ color: '#626879' }} />
                <Typography variant='h6' sx={{ margin: '16px' }}>
                    Order Details
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                }}>
                {orderDetails.map((detail, index) => (
                    <Box key={index}>
                        <Typography variant='subtitle2' sx={{ fontWeight: '700' }}>
                            {detail.label}
                        </Typography>
                        <Box>
                            {typeof detail.value === 'string' || detail.value === null ? (
                                <Typography variant='body1'>{detail.value || '-'}</Typography>
                            ) : (
                                detail.value
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default OrderDetails;
