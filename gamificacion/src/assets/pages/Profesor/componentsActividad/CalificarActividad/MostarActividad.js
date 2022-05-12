import React, {useEffect, useState} from "react";
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '../../components/Menu/Menu.js'
import NavBar from '../../components/NavBar/NavBar';

import ActividadAlumno from "./Actividad";
import '../../Profesor.css'

const drawerWidth = 240;

const mdTheme = createTheme();



function MostrarActividadContent() {
    const saved = localStorage.getItem("user");
    const [localStorageActividadAlumno, setLocalStorageActividadAlumno] = useState(JSON.parse(window.localStorage.getItem('localStorageActividadAlumno')));
    const user = JSON.parse(saved);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return(
      <React.Fragment>
        <ThemeProvider theme={mdTheme} >
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <NavBar tituloNavBar="Calificar Actividad" open={ open } setOpen={ setOpen }/>
          <Menu user={ user }  open ={ open } setOpen={ setOpen }/>


          {/* Paper es la sección completa del Form cuadro blanco*/}
          <Paper
              
              sx={{
                p: 2,
                margin: 'auto',
                flexDirection: 'column',
                borderRadius: 3,
                height: 'auto',
                width: '60%',
                alignItems: 'center',
                alignContent: 'center',
                //textAlign:'center',
                marginTop: 15,
              }}
            >
              {/* Box es todo el contenido del form */}
              <Box
                
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
                       <ActividadAlumno data= {localStorageActividadAlumno}/> 
                    </Box>
                </Grid>

              </Box>

            </Paper>

        </Box>
        </ThemeProvider>
      </React.Fragment>
    )
}



export default function MostrarActividad() {
  return <MostrarActividadContent />;
}