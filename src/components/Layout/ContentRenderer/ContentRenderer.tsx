import React from 'react';
import { Typography } from '@mui/material';
import Home from '../../Content/Home/Home';
import UserProfile from '../../Content/UserProfile/UserProfile';
import Settings from '../../Content/Settings/Settings';
import OrderOverview from '../../Content/OrderOverview/OrderOverview';

interface ContentRendererProps {
    selectedView: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ selectedView }) => {
    switch (selectedView) {
        case 'Home':
            return <Home />;
        case 'User':
            return <UserProfile />;
        case 'Settings':
            return <Settings />;
        case 'Order Overview':
            return <OrderOverview />;
        default:
            return <Typography variant="h4">Welcome Home</Typography>;
    }
};

export default ContentRenderer;
