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
    details,
}) => {
    const [selectedTab, setSelectedTab] = useState<string>('All Categories');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    const filteredFiles: FileProps[] =
        selectedTab === 'All Categories'
            ? details?.files || []
            : details?.files?.filter(
                  (file: FileProps) => file.category === selectedTab,
              ) || [];

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '80px',
                    width: '80%',
                    height: '80%',
                    marginLeft: '180px',
                    bgcolor: '#f2f4f5',
                    boxShadow: 24,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <HeaderModalComponent title={title} onClose={onClose} />
                <Box
                    sx={{
                        padding: '16px, 32px',
                    }}
                >
                    <OrderInformationSectionComponent
                        orderDescription={orderDescription}
                        estimatedShippingDate={estimatedShippingDate}
                        priority={priority}
                        details={details}
                    />
                    <Divider
                        orientation="horizontal"
                        variant="middle"
                        flexItem
                    />
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
