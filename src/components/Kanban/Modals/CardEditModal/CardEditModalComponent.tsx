import React, { useState } from 'react';
import dayjs from 'dayjs';
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
import { DetailedCardProps } from '../../../../store/interfaces';
import { useKanbanStore } from '../../../../store/kanbanStore';

interface CardEditModalProps {
    open: boolean;
    onClose: (updatedCard?: Partial<DetailedCardProps>) => void;
    card: DetailedCardProps;
}

const CardEditModalComponent: React.FC<CardEditModalProps> = ({ open, onClose, card }) => {
    const editCard = useKanbanStore(state => state.editCard);

    const [form, setForm] = useState({
        title: card.title,
        priority: card.priority,
        estimatedShippingDate: card.estimatedShippingDate
    });

    const handleInputChange =
        (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm(prev => ({ ...prev, [field]: event.target.value }));
        };

    const handleSelectChange = (field: keyof typeof form) => (event: SelectChangeEvent<string>) => {
        setForm(prev => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const updatedFields = { ...form };

        try {
            await editCard(card.id, updatedFields);
            onClose(updatedFields);
        } catch (error) {
            console.error('Failed to update card:', error);
        }
    };

    return (
        <Modal open={open} onClose={() => onClose()}>
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
                    <Typography variant="h6">Edit Card</Typography>
                    <IconButton onClick={() => onClose()}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Title"
                        value={form.title}
                        onChange={handleInputChange('title')}
                        fullWidth
                        required
                    />
                    <Select value={form.priority} onChange={handleSelectChange('priority')} fullWidth required>
                        <MenuItem value="Standard">Standard</MenuItem>
                        <MenuItem value="High Priority">High Priority</MenuItem>
                        <MenuItem value="Critical Path">Critical Path</MenuItem>
                    </Select>
                    <TextField
                        label="Due Date"
                        type="date"
                        value={dayjs(form.estimatedShippingDate, 'DD/MMM/YYYY').format('YYYY-MM-DD')}
                        onChange={handleInputChange('estimatedShippingDate')}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={!form.title || !form.priority || !form.estimatedShippingDate}>
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CardEditModalComponent;
