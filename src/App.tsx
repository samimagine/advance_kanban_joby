import React, { useState } from 'react';
import { Box } from '@mui/material';

import bgImage from './assets/images/joby_background.webp';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import ContentRenderer from './components/Layout/ContentRenderer/ContentRenderer';

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
                backgroundAttachment: 'fixed',
            }}>
            <Sidebar selectedView={selectedView} onViewChange={setSelectedView} />
            <Box
                sx={{
                    flexGrow: 1,
                    padding: 3,
                    overflowY: 'auto',
                    height: '100vh',
                    width: 'fit-content',
                }}>
                <ContentRenderer selectedView={selectedView} />
            </Box>
        </Box>
    );
};

export default App;
