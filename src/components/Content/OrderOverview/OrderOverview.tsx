import React from 'react';
import { Typography } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from '../../Kanban/KanbanBoard';

const OrderOverview: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
    <Typography variant="h3" color="#003B4A" align="center">
      Order Overview
    </Typography>
    <KanbanBoard />
  </DndProvider>
);

export default OrderOverview;
