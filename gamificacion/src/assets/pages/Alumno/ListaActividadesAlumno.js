import React, {useEffect, useState} from "react";
import './ListaActividadesAlumno.css';
import { useNavigate } from 'react-router-dom';
import { set } from "date-fns";
import { RiContactsBookLine, RiContactsBookUploadLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

function ListaActividadesAlumno(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData ] = useState([])
    const [localStorageInfo, setLocalStorageInfo] = useState(window.localStorage.getItem('localStorageInfo'));

    const setLocalStorage = (value,e) =>{
        try{
            console.log(e);
            setLocalStorageInfo(e)
            // window.localStorage.setItem("localStorageInfo",value)
        }catch (error){
            console.log(error)
        }
    }
    function IrDetalles (id, e) {
        console.log(data[id-1])
        // setFilterData(data.filter(item => item.id === id))
        window.localStorage.setItem("localStorageInfo",JSON.stringify(data[id-1]))
        navigate('/detalle');
     }

     //usar data y no props
 
    return (
    <div className="Actividad_Scroll">
           {data.map(function({id,name,fechaEntrega,status,description, profesorName}){
               return(
                   
                   <div key={id} className="actividades_sc">
                       
                        <div className="titulo-act"><h1>{name}</h1></div>
                        <div className="Desc-date">
                            <p className="descp">{description}</p> 
                            <div className="Fecha-Profesor">                            
                                <div className="fechaEntrega">Fecha de entrega {fechaEntrega}</div>
                                <div className="Prof">Profesor: {profesorName}</div>
                                <Button variant="primary" onClick={e =>IrDetalles(id,e)} >Entregar Actividad</Button>    
                            </div>

                        </div>
                   </div>
                   
               )
           })}
   
    </div>    

  );
}

export default ListaActividadesAlumno;