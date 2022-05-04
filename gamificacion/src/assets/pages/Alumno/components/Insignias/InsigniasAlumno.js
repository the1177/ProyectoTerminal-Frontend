import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import "./Insignias.css";
import imagenes from './imagenes';
import Bloqueada from '../Images/Bloqueada.jpg';
import NoDisponible from '../Images/NoDisponible.jpg';

const fs = require('fs');
//RECORRER LA CARPETA PARA OBTENER LAS IMAGENES
//GUARDAR LOS LINKS EN UN OBJETO
//RECORRER EL OBJETO
//REALIZAR DIVS DE ACUERDO A LA CANTIDAD DEL OBJETO (DINAMICAMENTE)
function createData(time, amount) {
  return { time, amount };
}
imagenes.sort(function(a, b){
  return  a.status-b.status;
});
const listItems = imagenes.map((a) =>{
    //Insignias bloqueadas
  if (a.status == 1) {
    return (
    // <img className='image-badget' title="Bloqueado" src={Bloqueada} style={{filter: 'opacity(10%)',filter: 'grayscale(100%)'}}/>
    <img className='image-badget' key={a.id} title="Vencida" src={NoDisponible}/>
    );
  }
    //Insignias desbloqueadas
    if (a.status == 0) {
      return (
      <img className='image-badget' key={a.id} title={a.fecha} src={a.img} style={{filter: 'brightness(100%)'}}/>
      );
    }
  //Insignias pendientes
  if (a.status == 2) {
    return (
    <img className='image-badget' key={a.id} title="Por desbloquear" src={Bloqueada} style={{filter: 'brightness(100%)'}}/>
    );
  }
}
);

export default function Insignias() {
  const theme = useTheme();

  return (

    <div className="insignia-container">
      <h3 className="title-insignias">Insignias</h3>
      <div>
        <ul>{listItems}</ul>        
      </div>
    </div>
  );
}