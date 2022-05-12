import React, {useEffect, useState} from "react";
import {Switch} from 'antd';
import 'antd/dist/antd.css';
import MostrarRubrica from "./Puntuar/MostrarRubrica";
import MostrarListaCotejo from "./Puntuar/MostrarListaCotejo";



function ActividadAlumno() {

  const [localStorageActividadAlumno, setLocalStorageActividadAlumno] = useState(JSON.parse(window.localStorage.getItem('localStorageActividadAlumno')));
  const [localStorageAlumno, setLocalStoragelocalStorageAlumno] = useState(JSON.parse(window.localStorage.getItem('localStorageAlumno')));

  const [rubrica, setRubrica] = useState(false)
  const [cotejo, setCotejo] = useState(false)

  const toggle = () =>{
    rubrica ? setRubrica(false) : setRubrica(true);
    cotejo ? setCotejo(true) : setCotejo (false)
  }

  const CotejoLista = () =>{
    cotejo ?  setCotejo(false) : setCotejo(true)
    rubrica ? setRubrica(true) : setRubrica(false);
  }



  return (
    <div>
        <div>
          <h2>Actividad: {localStorageActividadAlumno.name}</h2>
          <h2>Estudiante:{localStorageAlumno.name} </h2>

            <h6>Puntuar con Rubrica</h6><Switch  onClick={toggle} />
            <h6>Puntuar con Lista de Cotejo</h6><Switch onClick={CotejoLista}/>
        </div>
        <div>
        {rubrica  ? <MostrarRubrica data = {localStorageActividadAlumno.rubrica.criterios}/> : null}
        {cotejo  ? <MostrarListaCotejo data = {localStorageActividadAlumno.listaDeCotejo.cotejo} /> : null}

        </div>
    </div>    

  );
}

export default ActividadAlumno;