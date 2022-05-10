import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';
import ListaActividadesProfesor from './ListaActividadesProfesor';
import { Button } from '@mui/material';

import Actividades from './componentsActividad/Actividad.json';
const drawerWidth = 240;

const mdTheme = createTheme();

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

function MisionesContent() {
  const saved = localStorage.getItem("user");
  const user = JSON.parse(saved);
  console.log(user);

  const [data, setData] = useState(Actividades);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Boton Crear Actividad
  const navigate = useNavigate();
  const redirigirCrearActividad = (e) => {
    navigate('/crearactividad', { state: { user } },);
  }
  let botonCrearActividad;
  // Cambiar a !== estudiante
  if (user.dbdata.tipoUsuario === "estudiante") {
    botonCrearActividad =
      <Box item sx={{ m: 2 }}> <Button type="submit" variant="contained"
        onClick={redirigirCrearActividad}>Crear Actividad</Button></Box>
  } else {
    // No mostrar boton
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar tituloNavBar="Actividades" open={open} setOpen={setOpen} />

        <Menu user={user} open={open} setOpen={setOpen} />

        <Box
          component="main"
          sx={{
            backgroundcolor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            {botonCrearActividad}

            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                  }}
                >
                  <ListaActividadesProfesor data={data.Actividades} />
                </Paper>
              </Grid>
            </Grid>

          </Container>


        </Box>
      </Box>
    </ThemeProvider>
  );
}



export default function Misiones() {
  return <MisionesContent />;
}