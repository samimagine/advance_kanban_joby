import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KanbanBoard from "./components/KanbanBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import bgImage from "./assets/images/joby_background.jpg";
import logo from "./assets/images/joby_logo.png";


const App = () => {
  const [selectedView, setSelectedView] = useState("Order Overview");

  const renderContent = () => {
    switch (selectedView) {
      case "Home":
        return <Typography variant="h4">Welcome Home</Typography>;
      case "User":
        return <Typography variant="h4">User Profile</Typography>;
      case "Settings":
        return <Typography variant="h4">Settings</Typography>;
      case "Order Overview":
        return (
          <DndProvider backend={HTML5Backend}>
            <Typography variant="h5" color="#c2d8ff" align="center">Order Overview</Typography>
            <KanbanBoard />
          </DndProvider>
        );
      default:
        return <Typography variant="h4">Welcome Home</Typography>;
    }
  };

  return (
    <Box sx={{
      display: "flex",
      height: "110vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      <Box
        sx={{
          width: 80,
          backgroundColor: "#f4f4f4",
          borderRight: "1px solid #ddd",
          position: "fixed",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: 2,
            borderBottom: "1px solid #ddd",
          }}
        >
          <img
            src={logo}
            alt="Icon Description"
            style={{ width: '40px', height: '40px' }}
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" sx={{ height: 'calc(100% - 100px)' }}>
          <List>
            {[
              { label: "Home", icon: <HomeIcon fontSize="large" /> },
              { label: "User", icon: <PersonIcon fontSize="large" /> },
              { label: "Settings", icon: <SettingsIcon fontSize="large" /> },
              { label: "Order Overview", icon: <NoteAltIcon fontSize="large" /> },
            ].map((item) => (
              <Tooltip title={item.label} placement="right" key={item.label}>
                <ListItem
                  onClick={() => setSelectedView(item.label)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor:
                      selectedView === item.label ? "#e0e0e0" : "transparent",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "auto" }}>{item.icon}</ListItemIcon>
                </ListItem>
              </Tooltip>
            ))}
          </List>
          <Tooltip title="Need help?">
            <HelpOutlineIcon fontSize="large" />
          </Tooltip>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: '80px',
          flexGrow: 1,
          padding: 3,
          overflowY: "auto",
          height: "100vh",
          width: "fit-content",
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default App;