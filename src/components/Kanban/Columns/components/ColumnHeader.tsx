import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

interface DroppableColumnHeaderProps {
    title: string;
    isLastViewed: boolean;
    onFilterClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ColumnHeader: React.FC<DroppableColumnHeaderProps> = ({ title, isLastViewed, onFilterClick }) => (
    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{
            backgroundColor: '#61687c',
            color: 'white',
            padding: '0 16px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            height: '30px'
        }}>
        <Typography
            variant="subtitle2"
            sx={{
                fontWeight: '700'
            }}>
            {title}
        </Typography>
        {!isLastViewed && (
            <Tooltip title="Filter">
                <IconButton
                    size="medium"
                    onClick={onFilterClick}
                    sx={{
                        color: '#a3d5ff',
                        '&:hover': {
                            color: '#ffffff'
                        }
                    }}>
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
        )}
    </Box>
);

export default ColumnHeader;
