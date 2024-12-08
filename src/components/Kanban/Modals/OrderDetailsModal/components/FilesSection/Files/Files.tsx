import React from 'react';
import { Box, Typography } from '@mui/material';
import { File } from '../../../../../../../store/interfaces';
import ItemFile from './components/ItemFile';

interface FilesProps {
    files: File[];
}

const Files: React.FC<FilesProps> = ({ files }) => {
    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '10px',
                marginRight: '32px',
                marginBottom: '16px',
            }}>
            {files.length ? (
                files.map((file: File) => <ItemFile key={file.id} file={file} />)
            ) : (
                <Typography variant='body2' color='#626879'>
                    No files available in this category.
                </Typography>
            )}
        </Box>
    );
};

export default Files;
