import React from 'react';
import { Box, Typography } from '@mui/material';
import { FileProps } from '../../../../../../../store/interfaces';
import ItemFileComponent from './components/ItemFileComponent';

interface FilesComponentProps {
    files: FileProps[];
}

const FilesComponent: React.FC<FilesComponentProps> = ({ files }) => {
    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '10px',
                maxHeight: '215px',
                marginRight: '32px',
            }}
        >
            {files.length ? (
                files.map((file: FileProps) => (
                    <ItemFileComponent key={file.id} file={file} />
                ))
            ) : (
                <Typography variant="body2" color="text.secondary">
                    No files available in this category.
                </Typography>
            )}
        </Box>
    );
};

export default FilesComponent;
