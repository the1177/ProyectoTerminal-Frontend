import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './components/Listitems/listitems';

import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';

import Chart from './components/Chart/Chart';
import Deposits from './components/Deposits/Deposits';
import Orders from './components/Orders/Orders';
import Schedule from './components/Scheduler/Scheduler';
import Misiones from './components/Chart/ChartMisiones'

const drawerWidth = 240;
const mdTheme = createTheme();

function CalendarioContent() {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    console.log(user);

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <NavBar tituloNavBar="Calendario" open={ open } setOpen={ setOpen }/>

          <Menu user={ user }  open ={open } setOpen={ setOpen }/>
          

            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
              <Grid container spacing={6}>

                <Grid item xs="auto" md="auto" lg={12}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      height: 'auto',
                      width: 'auto'
                    }}
                  >
                    <Schedule />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

      </ThemeProvider>
    );
}



export default function Calendario() {
    return <CalendarioContent />;
}