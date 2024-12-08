import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

interface HeaderModalProps {
    title: string;
    onClose: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({ title, onClose }) => (
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
            color: '#61677c',
            padding: '2px 10px',
            boxSizing: 'border-box',
        }}>
        <Typography
            sx={{
                fontWeight: '700',
                color: '#61677c',
                marginLeft: '16px',
            }}>
            {title}
        </Typography>
        <IconButton size='medium' onClick={onClose}>
            <CancelIcon sx={{ color: '#61677c' }} />
        </IconButton>
    </Box>
);

export default HeaderModal;
