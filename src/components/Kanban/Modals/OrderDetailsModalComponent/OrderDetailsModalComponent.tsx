import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StatusColorChipComponent from '../../Common/StatusColorChipComponent/StatusColorChipComponent';
import { DetailedCardProps, FileProps } from '../../../../store/interfaces';
import FilesComponent from './components/FilesComponent/FilesComponent';
import SelectDepartmentComponent from './components/SelectDepartmentComponent/SelectDepartmentComponent';

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
          p: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#c8ccd7',
            width: '100%',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            padding: '6px',
            color: '#61677c',
          }}
        >
          <Typography
            sx={{
              fontWeight: '700',
            }}
            ml={2}
          >
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: '#61677c' }} />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ flex: 1 }}>
          <Box
            flex={1}
            pr={2}
            sx={{
              margin: '8px 32px 0 32px',
            }}
          >
            <Typography variant="h6" sx={{ margin: '16px' }}>
              Order Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Part
                </Typography>
                <Typography variant="body1">{orderDescription}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Part Number
                </Typography>
                <Typography variant="body1">
                  {details?.orderDetails?.partNumber}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Release Status
                </Typography>
                <Typography variant="body1">
                  {details?.orderDetails?.releaseStatus}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Drawing Number
                </Typography>
                <Typography variant="body1">
                  {details?.orderDetails?.drawingNumber}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Flight Article
                </Typography>
                <Typography variant="body1">
                  {details?.orderDetails?.flightArticle}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Estimated shipping date
                </Typography>
                <Typography variant="body1">{estimatedShippingDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
                  Priority
                </Typography>
                <StatusColorChipComponent label={priority} />
              </Grid>
            </Grid>
          </Box>
          <Box
            flex={1}
            pr={2}
            sx={{
              margin: '8px 32px 0 80px',
              width: '300px',
            }}
          >
            <Typography variant="h6" sx={{ margin: '16px' }}>
              Process Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Material: </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {details?.processDetails?.material}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Material Stock Size:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {details?.processDetails?.materialStockSize}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Surface Treatment:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {details?.processDetails?.surfaceTreatment}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Machine:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {details?.processDetails?.machine}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box></Box>
        </Box>
        <Box
          mt={2}
          sx={{
            overflow: 'hidden',
            marginLeft: '32px',
            flex: '1',
          }}
        >
          <Typography variant="h6" sx={{ margin: '0 16px' }}>
            Files:
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            sx={{
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <SelectDepartmentComponent
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
            />
            <FilesComponent files={filteredFiles} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderDetailsModalComponent;
