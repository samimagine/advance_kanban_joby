import React from 'react';
import { Box, Divider } from '@mui/material';
import OrderDetailsComponent from './OrderDetailsComponent';
import ProcessDetailsComponent from './ProcessDetailsComponent';
import { DetailedCardProps } from '../../../../../../store/interfaces';

interface OrderInformationSectionProps {
    orderDescription?: string;
    estimatedShippingDate: string;
    priority: string;
    details?: DetailedCardProps;
}

const OrderInformationSectionComponent: React.FC<OrderInformationSectionProps> = ({
    orderDescription,
    estimatedShippingDate,
    priority,
    details
}) => (
    <Box display="flex" justifyContent="space-between" sx={{ flex: 1 }}>
        <Box
            flex={1}
            sx={{
                margin: '8px 32px 0 32px',
                padding: '0 32px 16px 32px'
            }}>
            <OrderDetailsComponent
                orderDescription={orderDescription}
                estimatedShippingDate={estimatedShippingDate}
                priority={priority}
                details={details}
            />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
            flex={1}
            pr={2}
            sx={{
                margin: '8px 50px 0 50px',
                width: '300px'
            }}>
            <ProcessDetailsComponent details={details} />
        </Box>
    </Box>
);

export default OrderInformationSectionComponent;
