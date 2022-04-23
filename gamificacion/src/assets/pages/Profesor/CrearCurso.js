import {React, useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
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
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './components/Listitems/listitems';
import { StyledEngineProvider } from '@mui/material/styles';



import Upload from './components/Buttons/upload';
import InputAuto from './components/Buttons/inputauto';

import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';

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
  },
});

const mdTheme = createTheme();

function CrearCursoContent() {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);

    //const savedCursos = localStorage.getItem("cursos");
    var cursosString = '{ "cursos":[] }';
    var objCursos = JSON.parse(cursosString);

    //const [inputs, setInputs] = useState({});
    const [inputs, setInputs] = useState({});
    const [open, setOpen] = useState(true);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      const curso = inputs;
      objCursos['cursos'].push(curso);
      cursosString = JSON.stringify(objCursos);
      console.log(objCursos);
    }

    console.log(user);

    //const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <NavBar tituloNavBar="Crear Curso" open={ open } setOpen={ setOpen }/>

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
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 3,
                            height: 'auto',
                            
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
                            onSubmit={handleSubmit}
                            >

                                <Grid item xs>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Crear Curso
                                    </Typography>
                                </Grid>
                                

                                <div>
                                    <Divider light variant="h7" textAlign="left">Información del Curso</Divider>
                                    <Box sx={{ m: 2 }}>

                                        <CssTextField
                                          required 
                                          id="outlined-required" 
                                          label="Nombre del Curso" 
                                          variant="outlined"
                                          name="nombreCurso"
                                          value={inputs.nombreCurso || ""}
                                          onChange={handleChange} 
                                        />

                                    </Box>

                                    <Divider light variant="h7" textAlign="left">Detalles del Curso</Divider>
                                    <Box sx={{ m: 2 }}>


                                        <CssTextField
                                          required 
                                          id="outlined" 
                                          label="ID del Curso" 
                                          variant="outlined"
                                          name="idCurso"
                                          value={inputs.idCurso || ""}
                                          onChange={handleChange} 
                                        />

                                    </Box>

                                    <Box sx={{ m: 2 }}>

                                        <CssTextField
                                          required 
                                          id="outlined-required" 
                                          label="Sección del Curso" 
                                          variant="outlined"
                                          name="seccionCurso"
                                          value={inputs.seccionCurso || ""}
                                          onChange={handleChange} 
                                        />

                                    </Box>

                                    <Box sx={{ m: 2 }}>

                                        <CssTextField
                                          required 
                                          id="outlined-required" 
                                          label="Areá del Curso" 
                                          variant="outlined"
                                          name="areaCurso"
                                          value={inputs.areaCurso || ""}
                                          onChange={handleChange} 
                                        />

                                    </Box>

                                    <Box sx={{ m: 2 }}>

                                      <CssTextField
                                        id="outlined-multiline-static"
                                        label="Descripción"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        name="descripcionCurso"
                                        value={inputs.descripcionCurso || ""}
                                        onChange={handleChange} 
                                      />

                                    </Box>


                                    <input type="submit" />
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



export default function CrearCurso() {
    return <CrearCursoContent />;
}