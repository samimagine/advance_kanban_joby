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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DetailedCardProps } from '../../../../store/interfaces';
import { useKanbanStore } from '../../../../store/kanbanStore';

interface CardEditModalProps {
    open: boolean;
    onClose: (updatedCard?: Partial<DetailedCardProps>) => void;
    card: DetailedCardProps;
}

const CardEditModalComponent: React.FC<CardEditModalProps> = ({
    open,
    onClose,
    card,
}) => {
    const [title, setTitle] = useState(card.title);
    const [priority, setPriority] = useState<string>(card.priority);
    const [dueDate, setDueDate] = useState(card.estimatedShippingDate);
    const editCard = useKanbanStore((state) => state.editCard);

    const handleSubmit = async () => {
        const updatedFields = {
            title,
            priority,
            estimatedShippingDate: dueDate,
        };

        try {
            await editCard(card.id, updatedFields);
            onClose(updatedFields);
            console.log('Updated card:', updatedFields);
        } catch (error) {
            console.error('Failed to update card:', error);
        }
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
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6">Edit Card</Typography>
                    <IconButton onClick={() => onClose()}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
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
                        label="Due Date"
                        type="date"
                        value={dayjs(dueDate, 'DD/MMM/YYYY').format(
                            'YYYY-MM-DD',
                        )}
                        onChange={(e) => {
                            const formattedDate = dayjs(
                                e.target.value,
                                'YYYY-MM-DD',
                            ).format('DD/MMM/YYYY');
                            setDueDate(formattedDate);
                        }}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CardEditModalComponent;
