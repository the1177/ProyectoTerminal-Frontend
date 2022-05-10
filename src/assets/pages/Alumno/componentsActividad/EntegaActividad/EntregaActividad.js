import React, {useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '../../../Profesor/components/Menu/Menu'
import NavBar from '../../../Profesor/components/NavBar/NavBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
//COMPONENTES
import "../../Alumno.css";
import Actividades from '../Actividad.json'; 
import TituloActividad from '../TituloActividad/Titulo';
import DescripcionActividad from '../DescripcionActividad/DescripcionActividad';
import MostrarRubricaActividad from '../MostrarRubricaActividad/MostrarRubricaActividad';
import InputActividad from '../InputActividad/InputActividad';

const drawerWidth = 240;

const mdTheme = createTheme();

const EntregarActividad= () => {

  const saved = localStorage.getItem("user");
  const user = JSON.parse(saved);
  const [localStorageInfo, setLocalStorageInfo] = useState(JSON.parse(window.localStorage.getItem('localStorageInfo')));

    const [data, setData] =  useState(Actividades);
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
              width: '65%',
              alignItems: 'center',
              alignContent: 'center',
              //textAlign:'center',
              marginTop: 15,
            }}
          >
            {/* Box es todo el contenido del form */}
            <Box
              component="main"
              sx={{
                backgroundcolor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
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
                                height: 'auto',
                                width: 800,
                                //backgroundColor:'red'
                              }}
                            >
                              <TituloActividad name={localStorageInfo.name}  />
                              <hr/>
                              <DescripcionActividad descripcion={localStorageInfo.description} />
                              <hr/>
                              <MostrarRubricaActividad />
                            </Paper>
                          </Grid>
                        </div>
                        {/* PASTEL DE ACTIVIDADES */}
                        <div className='Actividad-Entrega'>
                          <Paper
                              sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                height: '100%',                          
                                width:"95%",
                                marginleft:10,
                              //backgroundColor: 'blue',
                              //  justifyContent: 'centar'
                              }}

                              >                             
                              <h4 className='titulo-Actividades'>Sube tu actividad</h4>
                              <InputActividad />
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
                              </Paper>
                          </Grid>
                        </div>
                      </div>                   
                    </div>
                </Grid>              
              </Container>
            </Box>
{/* K */}
          </Paper>

        </Box>
      </ThemeProvider>

    </React.Fragment>
    );
}

export default function ActividadDetalles() {

    return <EntregarActividad  />;
    
}