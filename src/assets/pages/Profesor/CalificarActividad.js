import React, {useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';
import CalificarAlumno from './componentsActividad/CalificarActividad/CalificarAlumno';
import Actividad from './componentsActividad/Actividad.json';

const drawerWidth = 240;
const mdTheme = createTheme();

function CalificarActividadContent() {
    const saved = localStorage.getItem("user");
    //const [localStorageActividad, setLocalStorageActividad] = useState(JSON.parse(window.localStorage.getItem('localStorageActividad')));
    const localStorageActividad = localStorage.getItem('localStorageActividad');
    const user = JSON.parse(saved);
    // console.log("calificarActividad",localStorageActividad);

    const [data, setData] = useState(localStorageActividad);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
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
                      <CalificarAlumno/> 
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
