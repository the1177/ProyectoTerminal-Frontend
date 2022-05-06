import React from "react";
import './TituloActividad.css'


function TituloActividad(props) {
  return (
  
     <h1 className="TituloActividad">{props.name}</h1>

  );
}

export default TituloActividad;