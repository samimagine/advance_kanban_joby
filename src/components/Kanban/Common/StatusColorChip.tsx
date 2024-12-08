import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

interface StatusColorChipProps {
    label: string;
    isLastViewed: boolean;
    onClick?: () => void;
}

const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'priority' && prop !== 'isLastViewed',
})<{ priority: string; isLastViewed: boolean }>(({ priority, isLastViewed }) => {
    let backgroundColor;
    let textColor;

    switch (priority) {
        case 'Critical Path':
            backgroundColor = '#f8e1db';
            textColor = '#ff3d00';
            break;
        case 'High Priority':
            backgroundColor = '#f6eddb';
            textColor = '#ca8b00';
            break;
        case 'Standard':
            backgroundColor = '#dbf0dd';
            textColor = '#2ac21c';
            break;
        default:
            backgroundColor = '#dbf0dd';
            textColor = '#2ac21c';
    }

    return {
        backgroundColor,
        color: textColor,
        fontSize: '10px',
        fontWeight: 'bold',
        borderRadius: '16px',
        textTransform: 'capitalize',
        height: '20px',
        cursor: isLastViewed ? 'default' : 'pointer',
        '&:hover': {
            opacity: isLastViewed ? 1 : 0.8,
        },
    };
});

const StatusColorChip: React.FC<StatusColorChipProps> = ({ label, isLastViewed, onClick }) => {
    return (
        <StyledChip
            label={label}
            priority={label}
            isLastViewed={isLastViewed}
            onClick={isLastViewed ? undefined : onClick}
            data-testid='status-chip'
        />
    );
};

export default StatusColorChip;
