import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { CardTagsComponent, PrioritySelectionComponent } from '.';

interface CardBodyProps {
    orderDescription?: string;
    priority: string;
    estimatedShippingDate: string;
    currentPriority: string;
    isLastViewed: boolean;
    isEditingPriority: boolean;
    onPriorityChange: (newPriority: string) => void;
    onPriorityEdit: () => void;
    onPriorityBlur: () => void;
    tags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tag: string) => void;
}

const CardBodyComponent: React.FC<CardBodyProps> = ({
    orderDescription,
    estimatedShippingDate,
    currentPriority,
    isLastViewed,
    isEditingPriority,
    onPriorityChange,
    onPriorityEdit,
    onPriorityBlur,
    priority,
    tags,
    onAddTag,
    onRemoveTag
}) => (
    <>
        <Typography variant="body2">{orderDescription}</Typography>
        <Divider sx={{ my: '10px' }} />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2
            }}>
            <Typography variant="body2">Priority:</Typography>
            <PrioritySelectionComponent
                isEditingPriority={isEditingPriority}
                priority={priority}
                currentPriority={currentPriority}
                isLastViewed={isLastViewed}
                onEdit={onPriorityEdit}
                onChange={onPriorityChange}
                onBlur={onPriorityBlur}
            />
        </Box>
        <Typography variant="body2">Due Date: {estimatedShippingDate}</Typography>
        <CardTagsComponent tags={tags} onAddTag={onAddTag} onRemoveTag={onRemoveTag} />
    </>
);

export default CardBodyComponent;
