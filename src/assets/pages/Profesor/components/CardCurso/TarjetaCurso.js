import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

import Violeta from '../CardCurso/images/violeta.png';
import Rose from '../CardCurso/images/rose.png';
import Green from '../CardCurso/images/green.png';
import Matcha from '../CardCurso/images/matcha.png';


export default function TarjetaCurso(curso){
  const cursoActual = curso.curso;
  console.log(cursoActual);

  const navigate = useNavigate();
  const redirigirCurso = (e) =>{
    //navigate('/cursos', { infoCurso: {cursoActual}});
  }

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            DF
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cursoActual.nombre}
        subheader="Primavera 2022"
        backgroundcolor="pink"
      />
      <CardMedia
        component="img"
        height="194"
        src={Violeta}
        alt="Fondo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Instrucciones: {cursoActual.descripcion}
        </Typography>
      </CardContent>
      <CardContent>
        <Button variant="contained" onClick={redirigirCurso}>Ir a Curso</Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
