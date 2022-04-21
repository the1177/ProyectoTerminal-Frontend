import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import GamesRoundedIcon from '@mui/icons-material/GamesRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import User1 from '../../../../../assets/commons/Menu/components/images/aimee.png';
import User2 from '../../../../../assets/commons/Menu/components/images/granados.jpg';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CalendarTodayRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Calendario" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DashboardRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <EmojiFlagsRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Cursos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <GamesRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Componentes" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <MapsUgcRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Mensajes" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ForumRoundedIcon  />
      </ListItemIcon>
      <ListItemText primary="Foro" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SearchRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItem>
  </div>
);
