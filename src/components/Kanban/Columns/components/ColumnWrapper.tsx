import React, { ReactNode, Ref } from 'react';
import { Paper } from '@mui/material';

interface ColumnWrapperProps {
    dropRef?: Ref<HTMLDivElement>;
    children: ReactNode;
}

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({ dropRef, children }) => (
    <Paper
        ref={dropRef}
        sx={{
            width: 240,
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f4f4f4',
            borderRadius: '15px',
            minWidth: '200px',
            height: 'fit-content',
            paddingBottom: '24px',
        }}>
        {children}
    </Paper>
);

export default ColumnWrapper;
