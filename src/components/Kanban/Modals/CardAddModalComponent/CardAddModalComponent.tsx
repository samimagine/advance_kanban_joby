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
    SelectChangeEvent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useKanbanStore } from '../../../../store/kanbanStore';

interface AddCardModalProps {
    open: boolean;
    onClose: () => void;
    columnId: string;
}

const CardAddModalComponent: React.FC<AddCardModalProps> = ({ open, onClose, columnId }) => {
    const addCard = useKanbanStore(state => state.addCard);

    const [form, setForm] = useState({
        title: '',
        priority: '',
        estimatedShippingDate: '',
        part: '',
        partNumber: '',
        releaseStatus: '',
        drawingNumber: '',
        flightArticle: ''
    });

    const [dateError, setDateError] = useState(false);

    const resetForm = () =>
        setForm({
            title: '',
            priority: '',
            estimatedShippingDate: '',
            part: '',
            partNumber: '',
            releaseStatus: '',
            drawingNumber: '',
            flightArticle: ''
        });

    const handleTextFieldChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [field]: event.target.value }));
        if (field === 'estimatedShippingDate') setDateError(false);
    };

    const handleSelectChange = (field: keyof typeof form) => (event: SelectChangeEvent<string>) => {
        setForm(prev => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!form.estimatedShippingDate) {
            setDateError(true);
            return;
        }

        addCard(columnId, {
            ...form,
            orderDetails: {
                part: form.part,
                partNumber: form.partNumber,
                releaseStatus: form.releaseStatus,
                drawingNumber: form.drawingNumber,
                flightArticle: form.flightArticle
            }
        });
        resetForm();
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 3
                }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Add New Card</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Title"
                        value={form.title}
                        onChange={handleTextFieldChange('title')}
                        fullWidth
                        required
                    />
                    <Select
                        value={form.priority}
                        onChange={handleSelectChange('priority')}
                        data-testid="priority-select"
                        fullWidth
                        required>
                        <MenuItem value="Standard" role="option">
                            Standard
                        </MenuItem>
                        <MenuItem value="High Priority" role="option" data-testid="priority-option-high">
                            High Priority
                        </MenuItem>
                        <MenuItem value="Critical Path" role="option">
                            Critical Path
                        </MenuItem>
                    </Select>
                    <TextField
                        label="Estimated Shipping Date"
                        type="date"
                        value={form.estimatedShippingDate}
                        onChange={handleTextFieldChange('estimatedShippingDate')}
                        InputLabelProps={{ shrink: true }}
                        error={dateError}
                        helperText={dateError ? 'Date is required' : ''}
                        fullWidth
                        required
                    />
                    <Typography variant="subtitle1">Order Details</Typography>
                    {[
                        { label: 'Part', value: form.part, key: 'part' },
                        { label: 'Part Number', value: form.partNumber, key: 'partNumber' },
                        { label: 'Release Status', value: form.releaseStatus, key: 'releaseStatus' },
                        { label: 'Drawing Number', value: form.drawingNumber, key: 'drawingNumber' },
                        { label: 'Flight Article', value: form.flightArticle, key: 'flightArticle' }
                    ].map(field => (
                        <TextField
                            key={field.key}
                            label={field.label}
                            value={field.value}
                            onChange={handleTextFieldChange(field.key as keyof typeof form)}
                            fullWidth
                        />
                    ))}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={!form.title || !form.priority || !form.estimatedShippingDate}
                        data-testid="add-card-button">
                        Add Card
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CardAddModalComponent;
