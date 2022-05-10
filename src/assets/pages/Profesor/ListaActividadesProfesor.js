import React, { useEffect, useState } from "react";
import './ListaActividadesProfesor.css';
import { useNavigate } from 'react-router-dom';
import { set } from "date-fns";
import { RiContactsBookLine, RiContactsBookUploadLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import loading from './img/loading_icon.gif';

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

function ListaActividadesProfesor(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData] = useState([])
    const [localStorageInfo, setLocalStorageInfo] = useState(window.localStorage.getItem('localStorageInfo'));

    const setLocalStorage = (value, e) => {
        try {
            // console.log(e);
            setLocalStorageInfo(e)
            // window.localStorage.setItem("localStorageInfo",value)
        } catch (error) {
            console.log(error)
        }
    }

    function IrDetalles(id, e) {
        // console.log(data[id-1])
        // setFilterData(data.filter(item => item.id === id))
        window.localStorage.setItem("localStorageActividad", JSON.stringify(data[id - 1]))
        navigate('/calificar-actividad');
    }

    const [actividades, setActividades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //usar data y no props
    useEffect(async () => {
        const res = await axios.get(BackendURL + "/api/misiones");
        console.log(res.data);
        let convertirRespuesta = [];
        convertirRespuesta.id = res.data.misionId;
        convertirRespuesta.name = res.data.nombre;
        convertirRespuesta.status = res.data.nombre;
        convertirRespuesta.description = res.data.descripcion;
        convertirRespuesta.profesorName = "JACOB NOLEM ELIAS TORRES";
        setActividades(convertirRespuesta);
       
        setIsLoading(false);
    }, []);

    // En lo que cargan cursos
    if (isLoading) {
        return (
            <div>
                <img src={loading} width="100%" height="100%" />
            </div>
        );
    }

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