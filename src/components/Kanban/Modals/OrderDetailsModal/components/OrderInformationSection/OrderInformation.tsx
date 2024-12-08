import React from 'react';
import { Box, Divider } from '@mui/material';
import OrderDetails from './OrderDetails';
import ProcessDetails from './ProcessDetails';
import { DetailedCard } from '../../../../../../store/interfaces';

interface OrderInformationSectionProps {
    orderDescription?: string;
    estimatedShippingDate: string;
    priority: string;
    details?: DetailedCard;
}

const OrderInformationSection: React.FC<OrderInformationSectionProps> = ({
    orderDescription,
    estimatedShippingDate,
    priority,
    details,
}) => (
    <Box display='flex' justifyContent='space-between' sx={{ flex: 1 }}>
        <Box
            flex={1}
            sx={{
                margin: '8px 32px 0 32px',
                padding: '0 32px 16px 32px',
            }}>
            <OrderDetails
                orderDescription={orderDescription}
                estimatedShippingDate={estimatedShippingDate}
                priority={priority}
                details={details}
            />
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem role='separator' />
        <Box
            flex={1}
            pr={2}
            sx={{
                margin: '8px 50px 0 50px',
                width: '300px',
            }}>
            <ProcessDetails details={details} />
        </Box>
    </Box>
);

export default OrderInformationSection;
