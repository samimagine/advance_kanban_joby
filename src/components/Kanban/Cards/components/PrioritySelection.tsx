import React from 'react';
import { Select, MenuItem } from '@mui/material';
import StatusColorChip from '../../Common/StatusColorChip';

interface PrioritySelectionProps {
    isEditingPriority: boolean;
    priority: string;
    currentPriority?: string;
    isLastViewed: boolean;
    onEdit: () => void;
    onChange: (value: string) => void;
    onBlur: () => void;
}

const PrioritySelection: React.FC<PrioritySelectionProps> = ({
    isEditingPriority,
    priority,
    currentPriority,
    isLastViewed,
    onEdit,
    onChange,
    onBlur,
}) => {
    return isEditingPriority && !isLastViewed ? (
        <Select
            value={currentPriority || priority}
            size='small'
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            sx={{
                width: '120px',
                fontSize: '12px',
                '& .MuiSelect-select': {
                    padding: '4px',
                },
            }}>
            <MenuItem value='Standard'>Standard</MenuItem>
            <MenuItem value='High Priority'>High Priority</MenuItem>
            <MenuItem value='Critical Path'>Critical Path</MenuItem>
        </Select>
    ) : (
        <StatusColorChip label={currentPriority || priority} onClick={onEdit} isLastViewed={isLastViewed} />
    );
};

export default PrioritySelection;
