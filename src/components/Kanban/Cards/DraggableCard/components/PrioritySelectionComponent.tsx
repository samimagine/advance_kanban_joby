import React from 'react';
import { Select, MenuItem } from '@mui/material';
import StatusColorChipComponent from '../../../Common/StatusColorChipComponent/StatusColorChipComponent';

interface PrioritySelectionProps {
    isEditingPriority: boolean;
    priority: string;
    currentPriority?: string;
    onEdit: () => void;
    onChange: (value: string) => void;
    onBlur: () => void;
}

const PrioritySelectionComponent: React.FC<PrioritySelectionProps> = ({
    isEditingPriority,
    priority,
    currentPriority,
    onEdit,
    onChange,
    onBlur
}) => {
    return isEditingPriority ? (
        <Select
            defaultValue={currentPriority || priority}
            size="small"
            onChange={e => onChange(e.target.value)}
            onBlur={onBlur}
            sx={{
                width: '120px',
                height: '025px',
                fontSize: '12px',
                '& .MuiSelect-select': {
                    padding: '4px'
                }
            }}>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="High Priority">High Priority</MenuItem>
            <MenuItem value="Critical Path">Critical Path</MenuItem>
        </Select>
    ) : (
        <StatusColorChipComponent label={currentPriority || priority} onClick={onEdit} />
    );
};

export default PrioritySelectionComponent;
