import React from 'react';
import { Box, List, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from '../../../assets/images/joby_logo.webp';
import SidebarMenuItem from './components/SidebarMenuItem';

interface SidebarProps {
    selectedView: string;
    onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedView, onViewChange }) => {
    const menuItems = [
        { label: 'Home', icon: 'HomeIcon' },
        { label: 'User', icon: 'PersonIcon' },
        { label: 'Settings', icon: 'SettingsIcon' },
        { label: 'Order Overview', icon: 'NoteAltIcon' },
    ];

    return (
        <Box
            sx={{
                width: 80,
                backgroundColor: '#f4f4f4',
                borderRight: '1px solid #ddd',
                position: 'fixed',
                height: '100vh',
                overflow: 'auto',
                zIndex: '100',
            }}>
            <Box
                sx={{
                    textAlign: 'center',
                    padding: 2,
                    borderBottom: '1px solid #ddd',
                }}>
                <img src={logo} alt='Logo' style={{ width: '40px', height: '40px' }} />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                alignItems='center'
                sx={{ height: 'calc(100% - 100px)' }}>
                <List>
                    {menuItems.map((item) => (
                        <SidebarMenuItem
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={selectedView === item.label}
                            onClick={() => onViewChange(item.label)}
                        />
                    ))}
                </List>
                <Tooltip title='Need help?'>
                    <HelpOutlineIcon fontSize='large' />
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Sidebar;
