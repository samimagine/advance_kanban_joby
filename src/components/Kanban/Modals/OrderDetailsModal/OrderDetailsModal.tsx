import React, { useState } from 'react';
import { Modal, Box, Divider } from '@mui/material';
import { DetailedCard, File } from '../../../../store/interfaces';
import FilesSection from './components/FilesSection/FilesSection';
import HeaderModal from './components/HeaderModal/HeaderModal';
import OrderInformationSection from './components/OrderInformationSection/OrderInformation';

interface OrderDetailsModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    details?: DetailedCard;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
    open,
    onClose,
    title,
    orderDescription,
    priority,
    estimatedShippingDate,
    details,
}) => {
    const [selectedTab, setSelectedTab] = useState<string>('All Categories');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    const filteredFiles: File[] =
        selectedTab === 'All Categories'
            ? details?.files || []
            : details?.files?.filter((file: File) => file.category === selectedTab) || [];

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
                    overflow: 'hidden',
                }}>
                <HeaderModal title={title} onClose={onClose} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        padding: '16px 32px',
                        overflow: 'hidden',
                    }}>
                    <OrderInformationSection
                        orderDescription={orderDescription}
                        estimatedShippingDate={estimatedShippingDate}
                        priority={priority}
                        details={details}
                    />
                    <Divider sx={{ marginY: 2 }} />
                    <FilesSection
                        selectedTab={selectedTab}
                        onTabChange={handleTabChange}
                        filteredFiles={filteredFiles}
                    />
                </Box>
            </Box>
        </Modal>
    );
};

export default OrderDetailsModal;
