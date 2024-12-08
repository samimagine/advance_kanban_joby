import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardAddModal from '../../Modals/CardAddModal/CardAddModal';

interface AddCardButtonProps {
    columnId: string;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ columnId }) => {
    const [isAddCardOpen, setIsAddCardOpen] = useState(false);

    const handleAddCardOpen = () => setIsAddCardOpen(true);
    const handleAddCardClose = () => setIsAddCardOpen(false);

    return (
        <>
            <Button variant='outlined' sx={{ margin: '8px 16px' }} endIcon={<AddIcon />} onClick={handleAddCardOpen}>
                Add new card
            </Button>
            <CardAddModal open={isAddCardOpen} onClose={handleAddCardClose} columnId={columnId} />
        </>
    );
};

export default AddCardButton;
