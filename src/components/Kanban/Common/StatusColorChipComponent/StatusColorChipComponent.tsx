import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

interface StatusColorChipProps {
  label: string;
  onClick?: () => void;
}

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'priority',
})<{ priority: string }>(({ priority }) => {
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
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  };
});

const StatusColorChipComponent: React.FC<StatusColorChipProps> = ({
  label,
  onClick,
}) => {
  return <StyledChip label={label} priority={label} onClick={onClick} />;
};

export default StatusColorChipComponent;
