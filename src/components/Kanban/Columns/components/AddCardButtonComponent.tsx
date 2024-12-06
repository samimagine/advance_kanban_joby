import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardAddModalComponent from '../../Modals/CardAddModalComponent/CardAddModalComponent';

interface AddCardButtonProps {
    columnId: string;
}

const AddCardButtonComponent: React.FC<AddCardButtonProps> = ({ columnId }) => {
    const [isAddCardOpen, setIsAddCardOpen] = useState(false);

    const handleAddCardOpen = () => setIsAddCardOpen(true);
    const handleAddCardClose = () => setIsAddCardOpen(false);

    return (
        <>
            <Button variant="outlined" sx={{ margin: '8px 16px' }} endIcon={<AddIcon />} onClick={handleAddCardOpen}>
                Add new card
            </Button>
            <CardAddModalComponent open={isAddCardOpen} onClose={handleAddCardClose} columnId={columnId} />
        </>
    );
};

export default AddCardButtonComponent;
