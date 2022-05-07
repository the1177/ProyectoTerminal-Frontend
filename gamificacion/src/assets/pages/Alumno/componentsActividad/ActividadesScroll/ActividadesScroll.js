import React, {useEffect, useState} from "react";
import './ActividadesScroll.css'
import ActividadDetalles from "../../EntregaActividad";
import { useNavigate } from 'react-router-dom';

function ActividadesScroll({ navigation: {...props  } }) {
    
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData ] = useState('')
    const navigate = useNavigate();

    function IrDetalles (id, e) {
        console.log(filterData)
        setFilterData(data.filter(item => item.id === id))
        navigate('/detalle', { data:  'filterData'  });
     }

     //usar data y no props
 
    return (
    <div className="Actividad_Scroll">
        {console.log("xd",{filterData})}
           {data.map(function({id,name,fechaEntrega,status,description, profesorName}){
               return(
                   
                   <div key={id} className="actividades_sc" onClick={({e})=>IrDetalles(id,e)}>
                       
                        <div className="titulo-act"><h1>{name}</h1></div>
                        <div className="Desc-date">
                            <p className="descp">{description}</p> 
                            <div className="Fecha-Profesor">                            
                                <div className="fechaEntrega">Fecha de entrega {fechaEntrega}</div>
                                <div className="Prof">Profesor: {profesorName}</div>
                            </div>

                        </div>
                   </div>
                   
               )
           })}
   
    </div>    

  );
}

export default ActividadesScroll;