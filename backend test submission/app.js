import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">AffordMed URL Shortener</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
