import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { FileProps } from '../../../store/kanbanStore';

interface FilesComponentProps {
  files: FileProps[];
}

const FilesComponent: React.FC<FilesComponentProps> = ({ files }) => {
  return (
    <Box sx={{
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '10px',
      maxHeight: '260px',
    }}>
      {files.length ? (
        files.map((file: FileProps) => (
          <>
            <Box key={file.id} display="flex" flexDirection="row" gap={4} mt={2} sx={{ margin: '8px 8px 30px 8px' }}>
              <Box
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                src={file.thumbnail}
                alt={file.name}
              />
              <Box>
                <Grid container spacing={2} justifyContent="space-between" sx={{ marginBottom: '16px' }}>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Name</Typography>
                    <Typography variant="body1">{file.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>Date</Typography>
                    <Typography variant="body1">{file.date}</Typography>
                  </Grid>
                </Grid>
                <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>File Description</Typography>
                <Typography variant="body1">{file.description}</Typography>
              </Box>
            </Box>
            <Divider sx={{ marginY: 2, color: 'red' }} />
          </>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No files available in this category.
        </Typography>
      )}
    </Box>
  )
}

export default FilesComponent;