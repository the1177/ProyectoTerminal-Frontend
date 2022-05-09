import React, {useEffect, useState} from "react";
import './ListaActividadesProfesor.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ListaActividadesProfesor(props) {
    
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData ] = useState([])


    function IrDetalles (id, e) {
        
        setFilterData(data.filter(item => item.id === id))
        // navigate('/detalle', { data:  'filterData'  });
     }

     //usar data y no props
 
    return (
    <div className="Actividad_Scroll">
        {console.log("xd",{filterData})}
           {data.map(function({id,name,fechaEntrega,status,description, profesorName}){
               return(
                   
                   <div key={id} className="actividades_sc">
                       
                        <div className="titulo-act"><h1>{name}</h1></div>
                        <div className="Desc-date">
                            <p className="descp">{description}</p> 
                            <div className="Fecha-Profesor">                            
                                <div className="fechaEntrega">Fecha de entrega {fechaEntrega}</div>
                                <div className="Prof">Profesor: {profesorName}</div>
                                <div> <Button variant="primary" onClick={({e})=>IrDetalles(id,e)}>Calificar Actividades</Button></div>
                            </div>

                        </div>
                   </div>
                   
               )
           })}
   
    </div>    

  );
}

export default ListaActividadesProfesor;