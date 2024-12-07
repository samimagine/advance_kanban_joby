import React from 'react';
import { Box, Typography, Popover, Select, MenuItem } from '@mui/material';

interface ColumnFilterPopoverProps {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
    onClose: () => void;
    priorityFilter: string;
    sortOrder: string;
    onPriorityChange: (value: string) => void;
    onSortChange: (value: string) => void;
}

const ColumnFilterPopover: React.FC<ColumnFilterPopoverProps> = ({
    anchorEl,
    isOpen,
    onClose,
    priorityFilter,
    sortOrder,
    onPriorityChange,
    onSortChange
}) => (
    <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1">Filters</Typography>
            <Select value={priorityFilter} size="small" onChange={e => onPriorityChange(e.target.value)} displayEmpty>
                <MenuItem value="">All Priorities</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="High Priority">High Priority</MenuItem>
                <MenuItem value="Critical Path">Critical Path</MenuItem>
            </Select>
            <Select value={sortOrder} size="small" onChange={e => onSortChange(e.target.value)} displayEmpty>
                <MenuItem value="">Default Order</MenuItem>
                <MenuItem value="oldest">Sort by Date (Oldest to Newest)</MenuItem>
                <MenuItem value="newest">Sort by Date (Newest to Oldest)</MenuItem>
            </Select>
        </Box>
    </Popover>
);

export default ColumnFilterPopover;
