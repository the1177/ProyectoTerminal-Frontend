import React, {useEffect, useState} from "react";
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';
import ListaActividadesProfesor from './ListaActividadesProfesor';

import Actividades from './componentsActividad/Actividad.json';
const drawerWidth = 240;

const mdTheme = createTheme();

function MisionesContent() {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);

    const [data, setData] = useState(Actividades);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <NavBar tituloNavBar="Misiones" open={ open } setOpen={ setOpen }/>

          <Menu user={ user }  open ={ open } setOpen={ setOpen }/>

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
                    <ListaActividadesProfesor  data = {data.Actividades}/>
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