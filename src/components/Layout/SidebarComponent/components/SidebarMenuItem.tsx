import React from 'react';
import { ListItem, ListItemIcon, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const icons: { [key: string]: JSX.Element } = {
    HomeIcon: <HomeIcon fontSize="large" />,
    PersonIcon: <PersonIcon fontSize="large" />,
    SettingsIcon: <SettingsIcon fontSize="large" />,
    NoteAltIcon: <NoteAltIcon fontSize="large" />
};

interface SidebarMenuItemProps {
    label: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ label, icon, selected, onClick }) => {
    return (
        <Tooltip title={label} placement="right" aria-label={label}>
            <ListItem
            role="button"
                onClick={onClick}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: selected ? '#e0e0e0' : 'transparent',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                    cursor: 'pointer'
                }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>{icons[icon]}</ListItemIcon>
            </ListItem>
        </Tooltip>
    );
};

export default SidebarMenuItem;
