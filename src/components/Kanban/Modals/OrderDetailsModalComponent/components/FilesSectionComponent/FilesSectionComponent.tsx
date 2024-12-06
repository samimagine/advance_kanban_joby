import React from 'react';
import { Box, Typography } from '@mui/material';
import { FileProps } from '../../../../../../store/interfaces';
import SelectDepartmentComponent from './SelectDepartmentComponent/SelectDepartmentComponent';
import FilesComponent from './FilesComponent/FilesComponent';

interface FilesSectionProps {
  selectedTab: string;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  filteredFiles: FileProps[];
}

const FilesSectionComponent: React.FC<FilesSectionProps> = ({
  selectedTab,
  onTabChange,
  filteredFiles,
}) => (
  <Box
    mt={2}
    sx={{
      overflow: 'hidden',
      marginLeft: '32px',
      flex: '1',
    }}
  >
    <Typography variant="h6" sx={{ margin: '16px 0 0 46px' }}>
      Files:
    </Typography>
    <Box
      display="flex"
      flexDirection="row"
      sx={{
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <SelectDepartmentComponent
        selectedTab={selectedTab}
        onTabChange={onTabChange}
      />
      <FilesComponent files={filteredFiles} />
    </Box>
  </Box>
);

export default FilesSectionComponent;
