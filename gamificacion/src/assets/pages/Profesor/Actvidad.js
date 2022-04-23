import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
import { StyledEngineProvider } from '@mui/material/styles';

import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';

import DateRange from './components/Date/DateRange';
import EditBox from './components/Box/EditBox';
import Upload from './components/Buttons/upload';
import InputR from './components/Buttons/inputrubric';

import Rubrica from './components/Rubricas/Rubrica';
import Insignias from './components/Insignias/Insignias';

import Dinamic from './components/Rubrica/DinamicRubrica';
import Prueba from './components/Rubrica/exr';
import FormHook from './components/Rubrica/FormHook';

const drawerWidth = 240;

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'light-green',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      },
      width: 'auto',
    },
});

const mdTheme = createTheme();


function ActividadContent() {
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
          
          <NavBar tituloNavBar="Crear Actividad" open={ open } setOpen={ setOpen }/>

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

            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>

                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={'auto'}>
                        <Paper
                            sx={{
                            p: 2,
                            display: 'fixed',
                            flexDirection: 'column',
                            borderRadius: 3,
                            height: 'auto',
                            width: 'auto',
                            
                            }}
                        >
                            <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '90ch' },
                                my: 3,
                                mx: 7
                            }}
                            noValidate
                            autoComplete="off"
                            >

                                <Grid item xs>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Crear Actividad
                                    </Typography>
                                </Grid>
                                

                                <div>
                                    <Divider light variant="h7" textAlign="left">Información de la Actvidad</Divider>
                                    <Box sx={{ m: 2 , width: '109vh' }}>

                                        <CssTextField
                                          required 
                                          id="outlined-required" 
                                          label="Título de la Actvidad" 
                                          variant="outlined"
                                        />

                                    </Box>

                                    <Box sx={{ width: '109vh' , overflow: 'auto', m: 2}}>
                                        <StyledEngineProvider injectFirst>
                                            <DateRange />
                                        </StyledEngineProvider>
                                    </Box>

                                    <Box sx={{'& button': {m: 2}}}>
                                      <div>
                                        <Insignias />
                                      </div>
                                    </Box>

                                    <Divider light variant="h7" textAlign="left">Detalles de la Actvidad</Divider>

                                    
                                    <Box sx={{'& button': {m: 2}}}>
                                      <div>
                                        <Upload />
                                      </div>
                                    </Box>

                                    <Box sx={{ m: 2 }}>
                                      <EditBox />
                                    </Box>

                                    <Divider light variant="h7" textAlign="left">Detalles de Evaluación</Divider>

                                    <Box sx={{ m: 2 }}>
                                      <InputR />
                                    </Box>

                                    <Box sx={{ width: '109vh' , overflow: 'auto', m: 2}}>
                                       <Prueba />
                                    </Box>
                                    
                    
                                </div>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Container>


          </Box>
        </Box>
      </ThemeProvider>
    );
}



export default function Actividad() {
    return <ActividadContent />;
}