import React, {useEffect, useState} from "react";
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

import Mision from './components/Mision/Mision';
import Deposits from './components/Deposits/Deposits';
import Orders from './components/Orders/Orders';

import CalificarAlumno from './componentsActividad/CalificarActividad/CalificarAlumno';
import Actividad from './componentsActividad/Actividad.json';
const drawerWidth = 240;

const mdTheme = createTheme();

function CalificarActividadContent() {
    const saved = localStorage.getItem("user");
    const [localStorageActividad, setLocalStorageActividad] = useState(JSON.parse(window.localStorage.getItem('localStorageActividad')));
    const user = JSON.parse(saved);
    // console.log("calificarActividad",localStorageActividad);

    const [data, setData] = useState(Actividad);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    // console.log(data.Actividades[0])
    return (
      <React.Fragment>
        <ThemeProvider theme={mdTheme} >
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <NavBar tituloNavBar="Calificar Actividad" open={ open } setOpen={ setOpen }/>

            <Menu user={ user }  open ={ open } setOpen={ setOpen }/>
            
            {/* Paper es la sección completa del Form cuadro blanco*/}
            <Paper
              fixed
              sx={{
                p: 2,
                margin: 'auto',
                flexDirection: 'column',
                borderRadius: 3,
                height: 'auto',
                width: '50%',
                alignItems: 'center',
                alignContent: 'center',
                //textAlign:'center',
                marginTop: 15,
              }}
            >
              {/* Box es todo el contenido del form */}
              <Box
                fixed
                sx={{
                  marginTop: 3,
                  '& .MuiTextField-root': { m: 1, width: '100%'},
                  my: 1,
                  mx: 1,
                  //bgcolor: 'pink',
                  height: 'auto',
                  minWidth: '100%',
                }}

              >

                <Grid item xs>
                    <Box
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                        margin: 'auto',
                        padding: 1,
                        minWidth: '100%',
                      }}

                    >
                      <CalificarAlumno  data = {localStorageActividad}/> 
                    </Box>
                </Grid>

              </Box>

            </Paper>

          </Box>
        </ThemeProvider>

      </React.Fragment>
    );
}



export default function CalificarActividad() {
    return <CalificarActividadContent />;
}
