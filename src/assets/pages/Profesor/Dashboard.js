import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import BoxPlotC from './components/BoxPlot/BoxPlot';
import ZoomableTimeP from './components/ZoomableTime/ZoomableTime';
import ScatterChart from './components/ScatterChart/ScatterChart';
import LineNColumn from './components/LineNColumn/LineNColumn';
import DisColumn from './components/DisColumn/DisColumn';
import Barras from './components/Barras/Barras';
import BarChart from './components/BarChart/BarChart';
import DispersionSelect from './components/DispersionSelect/DispersionSelect';
import CustomDatalabels from './components/Custom-DataLabels/CustomDatalabels';
import BarrasSelect from './components/BarrasSelect/BarrasSelect'
const drawerWidth = 240;

import { Button } from '@mui/material';

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

const mdTheme = createTheme();


function DashboardContent() {
  const saved = localStorage.getItem("user");
  const user = JSON.parse(saved);
  //console.log(user);

  const savedCurso = localStorage.getItem("cursoActual");
  const cursoActual = JSON.parse(savedCurso);
  const objCurso = cursoActual;

  //console.log("Holaaa", objCurso);
  const titulo = "Dashboard de " + objCurso.nombre;
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Boton Crear Actividad
  const navigate = useNavigate();
  const redirigirCrearActividad = (e) => {
    navigate('/crearActividad', { state: { user } },);
  }
  let botonCrearActividad;
  // Cambiar a !== estudiante
  if (user.dbdata.tipoUsuario === "estudiante") {
    botonCrearActividad =
      <Box item sx={{ m: 2 }}> <Button type="submit" variant="contained"
        onClick={redirigirCrearActividad} >Crear Actividad</Button></Box>
  } else {
    // No mostrar boton
  }

  // Para mostrar pantalla de carga en lo que se obtiene informacion
  const [infoBaseDatos, setInfoBaseDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar tituloNavBar={titulo} open={open} setOpen={setOpen} />

        <Menu user={user} open={open} setOpen={setOpen} />

          <Container maxWidth="lg" sx={{ mt: 10, mb: 3 }}>

          {botonCrearActividad}


            <Grid container spacing={6}>
              <Grid item xs={12} md={8} lg={9}>
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

                  <Barras />
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
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
                  <BoxPlotC />
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
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
                  <BarChart />
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
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
                  <BarrasSelect />
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
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
                  <CustomDatalabels />
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
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



export default function Dashboard() {
  return <DashboardContent />;
}