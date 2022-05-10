import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 800, height: 250}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Lista de Insignias</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            width={'50%'}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Insignia por Entrega',
    author: 'Descripción',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: img2,
    title: 'Insignia por Excelencia',
    author: 'Descripción',
  },
  {
    img: img3,
    title: 'Insignia de Valor',
    author: 'Descripción',
  },
  {
    img: img4,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img5,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img6,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img7,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img8,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img9,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img10,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img11,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  {
    img: img12,
    title: 'Insignia de Participación',
    author: 'Descripción',
    cols: 2,
  },
  
];
