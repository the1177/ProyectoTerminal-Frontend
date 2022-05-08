import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar'

import LogoutIcon from '@mui/icons-material/Logout';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import GamesRoundedIcon from '@mui/icons-material/GamesRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { 
    Container, 
    Box, 
    Grid, 
    Paper,
    Card,
    CardActions,
    CardContent, 
    Typography, 
    TextField,
    TextFieldProps,
    Select,
    MenuItem, 
    Button, 
    MenuList
} from '@mui/material';

{/*Iconos Menú editar perfil*/}
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 260;

const MenuProfesor = () => {
    
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    console.log(user);

    const navigate = useNavigate();

    return (
    
        //Paper del menú izquierdo de editar perfil
        <Paper
            fixed
            sx={{
                p: 1,
                margin: 'auto',
                flexDirection: 'column',
                borderRadius: 3,
                height: 'auto',
                width: '30%',
                height: '50%',
                alignItems: 'center',
                alignContent: 'center',
                //textAlign:'center',
                boxShadow: '5px 5px 5px 5px #F3F3F3',
                bgcolor: 'red',
                backgroundImage: 'linear-gradient(45deg, #2A93D5, #37CAEC, #D1EBFF)',
                marginTop: 15,
            }}
        >   
            <Box sx={{ m:1 , marginTop: 3}}>
                <Grid container>
                    <Grid item xs={6}>
                        <Avatar sx={{ width: 100, height: 100 }} src={ user.imageUrl }></Avatar>
                    </Grid>

                    <Grid item xs={6} sx={{ marginTop: 3 }}>
                    <Typography gutterBottom variant="h8" component="div">
                        { user.name }
                    </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ m:1 , marginTop: 2}}>
                <ListItem button onClick={ () => navigate('/profesor-general')}>
                    <ListItemIcon>
                        <PermIdentityIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>General</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                    <DiamondOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Experiencia</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                    <AutoFixHighOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Skills</ListItemText>
                </ListItem>
                
                <Divider />
                <ListItem button onClick={ () => navigate('/profesor-configuracion')}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Configuración</ListItemText>
                </ListItem>
            </Box>    
        </Paper>
    );
}

export default function MenuProf() {
    return <MenuProfesor />;
}

  
