import React, { useState } from 'react';
import { Modal, Box, Divider } from '@mui/material';
import { DetailedCardProps, FileProps } from '../../../../store/interfaces';
import FilesSectionComponent from './components/FilesSectionComponent/FilesSectionComponent';
import HeaderModalComponent from './components/HeaderModalComponent/HeaderModalComponent';
import OrderInformationSectionComponent from './components/OrderInformationComponent/OrderInformationComponent';

interface OrderDetailsModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    details?: DetailedCardProps;
}

const OrderDetailsModalComponent: React.FC<OrderDetailsModalProps> = ({
    open,
    onClose,
    title,
    orderDescription,
    priority,
    estimatedShippingDate,
    details
}) => {
    const [selectedTab, setSelectedTab] = useState<string>('All Categories');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    const filteredFiles: FileProps[] =
        selectedTab === 'All Categories'
            ? details?.files || []
            : details?.files?.filter((file: FileProps) => file.category === selectedTab) || [];

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    bgcolor: '#f2f4f5',
                    boxShadow: 24,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                <HeaderModalComponent title={title} onClose={onClose} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        padding: '16px 32px',
                        overflow: 'hidden'
                    }}>
                    <OrderInformationSectionComponent
                        orderDescription={orderDescription}
                        estimatedShippingDate={estimatedShippingDate}
                        priority={priority}
                        details={details}
                    />
                    <Divider sx={{ marginY: 2 }} />
                    <FilesSectionComponent
                        selectedTab={selectedTab}
                        onTabChange={handleTabChange}
                        filteredFiles={filteredFiles}
                    />
                </Box>
            </Box>
        </Modal>
    );
};

export default OrderDetailsModalComponent;
