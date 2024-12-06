import React from 'react';
import { Box, Button, Popover } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface CardActionsProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({
  anchorEl,
  onClose,
  onDelete,
  onEdit,
}) => (
  <Popover
    open={Boolean(anchorEl)}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
      <Button
        startIcon={<EditIcon />}
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Edit
      </Button>
      <Button
        startIcon={<DeleteForeverOutlinedIcon />}
        color="error"
        onClick={onDelete}
      >
        Delete
      </Button>
    </Box>
  </Popover>
);

export default CardActions;
