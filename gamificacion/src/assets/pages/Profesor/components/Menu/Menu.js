import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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

import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar'

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import GamesRoundedIcon from '@mui/icons-material/GamesRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);

const Menu = (props) => {
    const navigate = useNavigate();
    var menuVisibilityToggle = 'visible';
    const { user, open, setOpen } = props;
    const toggleMenuDrawer = () => {
      setOpen(!open);
      if(menuVisibilityToggle == 'visible'){ menuVisibilityToggle = 'hidden' }
      else{ menuVisibilityToggle = 'visible'; }
    };

    return(
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}>
                <IconButton onClick={toggleMenuDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button onClick={ () => navigate('/dashboard') }>
                    <ListItemIcon>
                        <DashboardRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem button onClick={ () => navigate('/calendario') }>
                    <ListItemIcon>
                        <CalendarTodayRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendario" />
                </ListItem>

                <ListItem button onClick={ () => navigate('/cursos') }>
                    <ListItemIcon>
                        <EmojiFlagsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cursos" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <MilitaryTechIcon />
                    </ListItemIcon>
                    <ListItemText primary="Badgets" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <MapsUgcRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mensajes" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ForumRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Foro" />
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                        <SearchRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buscar" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configuración" />
                </ListItem>

                <ListSubheader sx={{ fontWeight: 'bold',  textAlign:'center' }}>
                    {open ?user.name  : null} <br></br>
                </ListSubheader>

                <ListItem button style={{ paddingLeft: 85 }}>
                    <Avatar
                        src={user.imageUrl}
                        sx={{ width: 68, height: 68 }} />
                </ListItem>

                <ListSubheader sx={{ fontWeight: 'bold', textAlign:'center' }}>
                    {open ? user.email : null} <br></br>
                </ListSubheader>

            </List>
        </Drawer>
    );
}

export default Menu;