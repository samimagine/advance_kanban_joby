import React from 'react';
import { Box, Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { FileProps } from '../../../../../../store/interfaces';
import SelectDepartmentComponent from './SelectDepartmentComponent/SelectDepartmentComponent';
import FilesComponent from './FilesComponent/FilesComponent';

interface FilesSectionProps {
    selectedTab: string;
    onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
    filteredFiles: FileProps[];
}

const FilesSectionComponent: React.FC<FilesSectionProps> = ({ selectedTab, onTabChange, filteredFiles }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
            marginTop: 2
        }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '80px'
            }}>
            <InsertDriveFileOutlinedIcon fontSize="large" sx={{ color: '#626879' }} />
            <Typography variant="h6">Files:</Typography>
        </Box>

        <Box
            sx={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden'
            }}>
            <SelectDepartmentComponent selectedTab={selectedTab} onTabChange={onTabChange} />
            <FilesComponent files={filteredFiles} />
        </Box>
    </Box>
);

export default FilesSectionComponent;
