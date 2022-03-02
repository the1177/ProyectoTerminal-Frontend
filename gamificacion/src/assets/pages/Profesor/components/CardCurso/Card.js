import * as React from 'react';
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

import Violeta from '../CardCurso/images/violeta.png';
import Rose from '../CardCurso/images/rose.png';
import Green from '../CardCurso/images/green.png';
import Matcha from '../CardCurso/images/matcha.png';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    

    <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 8, lg:9 }}>

        {/* Chart */}
        <Grid item xs={6}>
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
                title="Diseño de Patrones para datos estructurados"
                subheader="Primavera 2022"
                backgroundColor="pink"
            />
            <CardMedia
                component="img"
                height="194"
                src={Violeta}
                alt="Fondo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                28 Alumnos
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Misiones actuales:</Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>

        {/* Chart */}
        <Grid item xs={6}>
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
                title="Algoritmos y estructura de datos "
                subheader="Primavera 2022"
                backgroundColor="pink"
            />
            <CardMedia
                component="img"
                height="194"
                src={Green}
                alt="Fondo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                32 Alumnos
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Misiones actuales:</Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>

        {/* Chart */}
        <Grid item xs={6}>
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
                title="Técnicas algorítmicas"
                subheader="Primavera 2022"
                backgroundColor="pink"
            />
            <CardMedia
                component="img"
                height="194"
                src={Rose}
                alt="Fondo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                34 Alumnos
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Misiones actuales:</Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>

        {/* Chart */}
        <Grid item xs={6}>
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
                title="Diseño de Juegos"
                subheader="Primavera 2022"
                backgroundColor="pink"
            />
            <CardMedia
                component="img"
                height="194"
                src={Matcha}
                alt="Fondo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                26 Alumnos
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Misiones actuales:</Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>

        </Grid>


    </Container>
  );
}
