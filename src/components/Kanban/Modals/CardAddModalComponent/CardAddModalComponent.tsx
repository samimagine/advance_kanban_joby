import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useKanbanStore } from '../../../../store/kanbanStore';
import { DetailedCardProps } from '../../../../store/interfaces';

interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  columnId: string;
}

const AddCardModal: React.FC<AddCardModalProps> = ({
  open,
  onClose,
  columnId,
}) => {
  const addCard = useKanbanStore((state) => state.addCard);

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [estimatedShippingDate, setEstimatedShippingDate] = useState('');
  const [dateError, setDateError] = useState(false);

  const [part, setPart] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [releaseStatus, setReleaseStatus] = useState('');
  const [drawingNumber, setDrawingNumber] = useState('');
  const [flightArticle, setFlightArticle] = useState('');

  const resetForm = () => {
    setTitle('');
    setPriority('');
    setEstimatedShippingDate('');
    setPart('');
    setPartNumber('');
    setReleaseStatus('');
    setDrawingNumber('');
    setFlightArticle('');
    setDateError(false);
  };

  const handleSubmit = () => {
    if (!estimatedShippingDate) {
      setDateError(true);
      return;
    }

    const newCard: Partial<DetailedCardProps> = {
      title,
      priority,
      estimatedShippingDate,
      orderDetails: {
        part,
        partNumber,
        releaseStatus,
        drawingNumber,
        flightArticle,
      },
    };

    addCard(columnId, newCard);
    resetForm();
    onClose();
  };

  const handleDateChange = (value: string) => {
    setEstimatedShippingDate(value);
    setDateError(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add New Card</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
          >
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="High Priority">High Priority</MenuItem>
            <MenuItem value="Critical Path">Critical Path</MenuItem>
          </Select>
          <TextField
            label="Estimated Shipping Date"
            type="date"
            value={estimatedShippingDate}
            onChange={(e) => handleDateChange(e.target.value)}
            InputLabelProps={{ shrink: true }}
            error={dateError}
            helperText={dateError ? 'Date is required' : ''}
            fullWidth
            required
          />
          <Typography variant="subtitle1">Order Details</Typography>
          <TextField
            label="Part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            fullWidth
          />
          <TextField
            label="Part Number"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            fullWidth
          />
          <TextField
            label="Release Status"
            value={releaseStatus}
            onChange={(e) => setReleaseStatus(e.target.value)}
            fullWidth
          />
          <TextField
            label="Drawing Number"
            value={drawingNumber}
            onChange={(e) => setDrawingNumber(e.target.value)}
            fullWidth
          />
          <TextField
            label="Flight Article"
            value={flightArticle}
            onChange={(e) => setFlightArticle(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            disabled={!title || !priority || !estimatedShippingDate}
          >
            Add Card
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCardModal;
