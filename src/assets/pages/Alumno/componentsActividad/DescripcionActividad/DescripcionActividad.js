import React from "react";
import './DescripcionActividad.css'


function DescripcionActividad(props) {
  return (
    <div>
        <h5>Instrucciones:</h5>
        <p className="DescripcionActividad">{props.descripcion}</p>
    </div>    

  );
}

export default DescripcionActividad;