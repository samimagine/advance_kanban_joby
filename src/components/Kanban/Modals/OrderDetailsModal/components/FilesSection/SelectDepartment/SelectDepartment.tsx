import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';

interface SelectDepartmentProps {
    selectedTab: string;
    onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const SelectDepartment: React.FC<SelectDepartmentProps> = ({ selectedTab, onTabChange }) => {
    return (
        <Box
            sx={{
                width: '200px',
                marginLeft: '34px',
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Box sx={{ marginBottom: '16px' }}>
                <Typography
                    variant="body1"
                    sx={{
                        margin: '16px 0 0 0'
                    }}>
                    Select a Department:
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 300px)'
                }}>
                <Tabs
                    value={selectedTab}
                    onChange={onTabChange}
                    aria-label="File Categories"
                    sx={{
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            borderRadius: '16px',
                            padding: '4px 10px',
                            minHeight: '30px',
                            color: '#626879',
                            backgroundColor: 'white',
                            transition: 'all 0.3s ease'
                        },
                        '& .MuiTab-root.Mui-selected': {
                            backgroundColor: '#1976d2',
                            color: 'white'
                        },
                        '& .MuiTab-root:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)'
                        },
                        '& .MuiTabs-flexContainer': {
                            gap: '8px'
                        }
                    }}
                    orientation="vertical">
                    <Tab sx={{ maxHeight: '20px' }} label="All Categories" value="All Categories" />
                    <Tab label="Process Engineering" value="Process Engineering" />
                    <Tab label="Quality" value="Quality" />
                    <Tab label="Programming" value="Programming" />
                    <Tab label="Surface Treatment" value="Surface Treatment" />
                </Tabs>
            </Box>
        </Box>
    );
};

export default SelectDepartment;
