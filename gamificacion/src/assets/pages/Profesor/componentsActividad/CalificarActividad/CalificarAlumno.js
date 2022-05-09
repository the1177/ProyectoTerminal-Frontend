import React, {useEffect, useState} from "react";
import './CalificarAlumno.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CalificarAlumno(props) {
    
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData ] = useState([])


     //usar data y no props
     console.log("Calificar alumnos pestaña:",data)
    return (
    <div className="Alumno-Tarjeta-Container">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {data.alumnos.map(function({id,name,actividad,fechaEntregada,statusEntrega}){
            return(
                
                <div key={id} className="Cal-alumno">
                    <div className="section1-alumno">
                        <div className="name-alumno">
                            <h5>{name}</h5>
                        </div>
                        <div>
                            <Button variant="primary" onClick={console.log("actividad mostrada")}>Mostrar Actividad</Button>
                        </div>                        
                    </div>
                    <div className="calificacion-box">
                        <div>Puntiación: </div>
                        <div>__</div>
                    </div>
                    <div className="Calificar_Actividad">
                        <div>
                            <Button  variant="primary" >Puntuar</Button>
                        </div>                        
                    </div>                 
                </div>
                
            )
        })}

    </div>    

  );
}

export default CalificarAlumno;