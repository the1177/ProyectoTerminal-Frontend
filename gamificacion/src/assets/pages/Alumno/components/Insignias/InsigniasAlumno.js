import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title/TitleAlumno';
import "./Insignias.css";
import imagenes from './imagenes'
import Bloqueada from '../Images/Bloqueada.jpg'
import B1IMAGE from '../../components/Images/Badgets/P1/E1_8.png'
import B2IMAGE from '../../components/Images/Badgets/P1/E1_9.png'
import B3IMAGE from '../../components/Images/Badgets/P1/E1_10.png'
import B4IMAGE from '../../components/Images/Badgets/P1/T1_8.png'
import B5IMAGE from '../../components/Images/Badgets/P1/T1_9.png'
import B6IMAGE from '../../components/Images/Badgets/P1/T1_10.png'
import B7IMAGE from '../../components/Images/Badgets/P1/T2_8.png'
import B8IMAGE from '../../components/Images/Badgets/P1/T2_9.png'
import B9IMAGE from '../../components/Images/Badgets/P1/T2_10.png'
import B10IMAGE from '../../components/Images/Badgets/P1/T3_8.png'
import B11IMAGE from '../../components/Images/Badgets/P1/T3_9.png'
import B12IMAGE from '../../components/Images/Badgets/P1/T3_10.png'
import B13IMAGE from '../../components/Images/Badgets/P1/T4_8.png'
import B14IMAGE from '../../components/Images/Badgets/P1/T4_9.png'
import B15IMAGE from '../../components/Images/Badgets/P1/T4_10.png'
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

// function custom_sort(a, b) {
//   return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
// }

// imagenes.sort(custom_sort);
// console.log(imagenes);
const Urls_images = [
                  // '../../components/Images/Badgets/P1/E1_8.png',
                  '../../components/Images/Badgets/P1/E1_9.png',
                  '../../components/Images/Badgets/P1/E1_10.png',
                  '../../components/Images/Badgets/P1/T1_8.png',
                  '../../components/Images/Badgets/P1/T1_9.png'
              ];
const listItems = imagenes.map((a) =>{
    //Insignias bloqueadas
  if (a.status == 1) {
    return (
    // <img className='image-badget' title="Bloqueado" src={Bloqueada} style={{filter: 'opacity(10%)',filter: 'grayscale(100%)'}}/>
    <img className='image-badget' title="Vencida" src={Bloqueada} style={{filter: 'grayscale(100%)'}}/>
    );
  }
    //Insignias desbloqueadas
    if (a.status == 0) {
      return (
      <img className='image-badget' title={a.fecha} src={a.img} style={{filter: 'brightness(100%)'}}/>
      );
    }


  //Insignias pendientes
  if (a.status == 2) {
    return (
    <img className='image-badget' title="Por desbloquear" src={Bloqueada} style={{filter: 'brightness(100%)'}}/>
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