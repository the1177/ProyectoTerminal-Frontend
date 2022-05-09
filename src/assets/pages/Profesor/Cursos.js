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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './components/Listitems/listitems';
import { Button } from '@mui/material';
import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';

import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar'
import ClassIcon from '@mui/icons-material/Class';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Violeta from './components/CardCurso/images/violeta.png';

import TarjetaCurso from './components/CardCurso/TarjetaCurso';
import loading from './img/loading_icon.gif';

import axios from 'axios';
import { red } from '@mui/material/colors';

const drawerWidth = 240;

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

const mdTheme = createTheme();

const Cursos = (props) => {
  const saved = localStorage.getItem("user");
  const user = JSON.parse(saved);
  console.log(user);

  // Boton Crear curso
  const navigate = useNavigate();
  const redirigirCrearCurso = (e) => {
    navigate('/crearcurso', { state: { user } },);
  }
  let botonCrearCurso;
  // Cambiar a !== estudiante
  if (user.dbdata.tipoUsuario === "estudiante") {
    botonCrearCurso =
      <Box item sx={{ m: 2 }}> <Button type="submit" variant="contained"
        onClick={redirigirCrearCurso} endIcon={<ClassIcon />}>Crear Curso</Button></Box>
  } else {
    // No mostrar boton
  }

  // Para mostrar pantalla de carga en lo que se obtienen cursos
  const [cursos, setCursos] = useState([]);
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await axios.get(BackendURL + "/api/cursos");
    setCursos(res.data);
    //console.log(res.data);
    setIsLoading(false);
  }, []);

  // En lo que cargan cursos
  if(isLoading) {
    return(
      <div>
        <img src={loading} width="100%" height="100%"/>
      </div>
    );
  }

  // Al cargar cursos
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar tituloNavBar="Cursos" open={open} setOpen={setOpen} />

        <Menu user={user} open={open} setOpen={setOpen} />


        <Container maxWidth="lg" sx={{ mt: 10, mb: 3 }}>

          {botonCrearCurso}

          <Grid container rowSpacing={1} columnSpacing={3}>
            {/* Card */}
            
              {cursos.map((current) => {
                var curso = current;
                return(
                  <Grid item xs={4}>
                    <TarjetaCurso curso={curso}></TarjetaCurso>
                  </Grid>
                );
              })}
          </Grid>

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Cursos;