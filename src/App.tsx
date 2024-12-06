import React, { useState } from 'react';
import { Box } from '@mui/material';

import bgImage from './assets/images/joby_background.jpg';
import SidebarComponent from './components/Layout/SidebarComponent/SidebarComponent';
import ContentRendererComponent from './components/Layout/ContentRendererComponent/ContentRendererComponent';

const App = () => {
    const [selectedView, setSelectedView] = useState('Order Overview');

    return (
        <Box
            sx={{
                display: 'flex',
                height: '110vh',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
            <SidebarComponent selectedView={selectedView} onViewChange={setSelectedView} />
            <Box
                sx={{
                    marginLeft: '80px',
                    flexGrow: 1,
                    padding: 3,
                    overflowY: 'auto',
                    height: '100vh',
                    width: 'fit-content'
                }}>
                <ContentRendererComponent selectedView={selectedView} />
            </Box>
        </Box>
    );
};

export default App;
