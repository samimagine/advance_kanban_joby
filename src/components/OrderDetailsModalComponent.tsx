import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DetailedCardProps, FileProps } from '../store/kanbanStore';
import ColorChip from './common/StatusColorChip/StatusColorChip';
import FilesComponent from './card/FilesComponent/FilesComponent';

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

  const filteredFiles: FileProps[] = selectedTab === 'All Categories'
    ? details?.files || []
    : details?.files?.filter((file: FileProps) => file.category === selectedTab) || [];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '80px',
          width: "80%",
          height: '80%',
          marginLeft: '180px',
          bgcolor: '#f2f4f5',
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{
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
        }}>
          <Typography sx={{
            fontWeight: '700',
          }} ml={2}>{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: '#61677c' }} />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ flex: 1 }}>
          <Box flex={1} pr={2} sx={{
            margin: '8px 32px 0 32px'
          }}>
            <Typography variant="h6" sx={{ margin: '16px' }}>Order Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Part</Typography>
                <Typography variant="body1">{orderDescription}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Part Number</Typography>
                <Typography variant="body1">{details?.orderDetails?.partNumber}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Release Status</Typography>
                <Typography variant="body1">{details?.orderDetails?.releaseStatus}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Drawing Number</Typography>
                <Typography variant="body1">{details?.orderDetails?.drawingNumber}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Flight Article</Typography>
                <Typography variant="body1">{details?.orderDetails?.flightArticle}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Estimated shipping date</Typography>
                <Typography variant="body1">{estimatedShippingDate}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Priority</Typography>
                <ColorChip label={priority} />
              </Grid>
            </Grid>
          </Box>
          <Box flex={1} pr={2} sx={{
            margin: '8px 32px 0 80px',
            width: '300px',
          }}>
            <Typography variant="h6" sx={{ margin: '16px' }}>Process Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Material: </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{details?.processDetails?.material}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Material Stock Size:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{details?.processDetails?.materialStockSize}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Surface Treatment:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{details?.processDetails?.surfaceTreatment}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Machine:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{details?.processDetails?.machine}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
          </Box>
        </Box>
        <Box mt={2} sx={{
          overflow: 'hidden', marginLeft: '32px', flex: '1'
        }}>
          <Typography variant="h6" sx={{ margin: '0 16px' }}>Files:</Typography>
          <Box display='flex' flexDirection='row' sx={{
            flex: 1,
            overflow: 'hidden',
          }}>
            <Box sx={{
              width: '200px'
            }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Select a Department:
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                }}
              >
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  aria-label="File Categories"
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      borderRadius: '16px',
                      padding: '4px 10px',
                      minHeight: '30px',
                      color: 'text.primary',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease',
                    },
                    '& .MuiTab-root.Mui-selected': {
                      backgroundColor: '#1976d2',
                      color: 'white',
                      border: '1px solid #1976d2',
                    },
                    '& .MuiTab-root:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                    '& .MuiTabs-flexContainer': {
                      gap: '8px',
                    },
                  }}
                  orientation="vertical"
                >
                  <Tab sx={{ maxHeight: '20px' }} label="All Categories" value="All Categories" />
                  <Tab label="Process Engineering" value="Process Engineering" />
                  <Tab label="Quality" value="Quality" />
                  <Tab label="Programming" value="Programming" />
                  <Tab label="Surface Treatment" value="Surface Treatment" />
                </Tabs>
              </Box>
            </Box>
            <FilesComponent files={filteredFiles} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderDetailsModalComponent;