import React from 'react';
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
import { mainListItems, secondaryListItems } from './components/Listitems/listitemsalumno';
import Chart from './components/Misiones/ChartAlumno';
import Insignias from './components/Insignias/InsigniasAlumno'
import Deposits from './components/Deposits/DepositsAlumno';
import Datos from './components/Chart/chart';
import Dispersion from './components/Dispersion/Dispersion';
import TablaActividades from './components/TablaActividades/TablaActividades';
import tablaTest from './components/TablaActividades/tabla';
import "./Alumno.css";
import Pastel from './components/Pastel/Pastel';
import Barras from './components/Barras/Barras';
import ZoomableTime from './components/ZoomableTimeSeries/ZoomableTime'
var ReactDOM = require('react-dom');

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);

const mdTheme = createTheme();



const DashboardContent= () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
      

      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="80" sx={{ mt: 4, mb: 4 }}> 
              <Grid container spacing={3}>
                  <div className='total-chart'>
                    <div className='first-section'>
                      <div>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                          <Paper
                            sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: 3,
                              height: 360,
                              width: 800,
                              //backgroundColor:'red'
                            }}
                          >
                            {/* <Chart /> */}
                            {/* <Datos /> */}
                            <ZoomableTime />
                            
                          </Paper>
                        </Grid>
                      </div>
                      {/* PASTEL DE ACTIVIDADES */}
                      <div className='Progress-activities'>
                        <Paper
                            sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: 3,
                              height: 360,                          
                              width:350,
                              marginleft:10,
                            //backgroundColor: 'blue',
                            //  justifyContent: 'centar'
                            }}

                            > 
                            
                            <h4 className='titulo-Actividades'>Progreso de Actividades</h4>
                            <div className='actividad-Nombre'>
                                <Pastel/>                          
                            </div>
                        </Paper>
                      </div>
                    </div>                    
                    <div className='second-section'>
                      <div className='dispersion-container'>
                        <Grid item xs={12} md={8} lg={9}>
                          <Paper
                            sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: 3,
                              height: 320,                          
                              width:350,                            
                              //backgroundColor:'red'
                            }}
                            >
                            {/* <Dispersion /> */}
                            {/* <Barras /> */}
                            <TablaActividades /> 
                          </Paper>
                        </Grid>
                      </div>
                      <div className='insignias-container'> 
                        <Grid item xs={12} md={8} lg={9}>
                        <Paper
                          sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 3,
                            height: 320,
                            width: 800,
                            //backgroundColor: 'red',
                          }}
                        >
                          {/* <TablaActividades />  */}
                          <Barras />
                          {/* <div id="root"></div> */}
                        </Paper>
                        </Grid>

                      </div>
                    </div>
                    <div className='third-section'>
                      <div className='medallero-container'>
                        {/* Medallero */}
                        <Grid item xs={12} md={8} lg={9}>
                          <Paper
                            sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: 3,
                              height: 330,
                              width: 1170,
                              overflow: 'auto'
                              }}
                            >
                            <Insignias />
                          </Paper>
                        </Grid>
                      </div>                                        
                    </div>                    
                  </div>
              </Grid>
              {/* PROGRESS BAR */}
              {/*
              <Grid item xs={12} md={8} lg={9}>
              <div className="Alumno">
                <div>
                  <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        height: 400,
                        margin :3,
                        width:380,
                        //backgroundColor: 'red'

                      }}
                      > 
                      <h4 className='titulo-Actividades'>Progreso de Actividades</h4>
                      <div className='actividad-Nombre'>
                        Crea un server de minecraft
                        <Progress done="10" />
                      </div>
                      <div className='actividad-Nombre'>
                        Crea un Equipo
                        <Progress done="80" />
                      </div>
                      <div className='actividad-Nombre'>
                        Encontrar un diamente en una mina
                        <Progress done="40" />
                      </div>
                      <div className='actividad-Nombre'>
                        Realización de un diagrama de flujo
                        <Progress done="60" />
                      </div>
                
                    </Paper>
                    
                </div>
                
                <div>
                  <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        height: 400,
                        margin :3,
                        width:380,
                        //backgroundColor: 'red'
                      }}
                      > 
                      <h4 className='titulo-Actividades'>Participación semanal</h4>
                      
                       <div>
                          {/* <Pie Data={data} options={opciones} /> 
                      </div>
              
                    </Paper>                    
                </div>
              </div>
                </Grid>*/}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}