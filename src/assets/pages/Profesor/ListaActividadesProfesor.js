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

    function IrDetalles(idActividad) {
        // console.log(data[id-1])
        setFilterData(actividades.filter(item => item.misionId === idActividad))
        window.localStorage.setItem("localStorageActividad", JSON.stringify(filterData));
        navigate('/calificar-actividad', { misionActual: { filterData } });
    }

    const [actividades, setActividades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const savedCurso = localStorage.getItem("cursoActual");
    const cursoActual = JSON.parse(savedCurso);
    const objCurso = cursoActual;

    //usar data y no props
    useEffect(async () => {
        const res = await axios.get(BackendURL + "/api/misiones");
        console.log(res.data);
        /* let convertirRespuesta = [];
        convertirRespuesta.id = res.data.misionId;
        convertirRespuesta.name = res.data.nombre;
        convertirRespuesta.status = res.data.nombre;
        convertirRespuesta.description = res.data.descripcion;
        convertirRespuesta.profesorName = "JACOB NOLEM ELIAS TORRES"; */
        setActividades(res.data);

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
            {actividades.map(function ({ misionId, nombre, fechaFin, descripcion, profesorName, cursoId }) {
                if(cursoId !== objCurso.cursoId) {
                    return(
                        <h1></h1>
                    );
                }

                return (

                    <div key={misionId} className="actividades_sc">

                        <div className="titulo-act"><h1>{nombre}</h1></div>
                        <div className="Desc-date">
                            <p className="descp">{descripcion}</p>
                            <div className="Fecha-Profesor">
                                <div className="fechaEntrega">Fecha de entrega</div>
                                {fechaFin}
                                <div> <Button variant="primary" onClick={({ e }) => IrDetalles(misionId)}>Calificar Actividades</Button></div>
                            </div>

                        </div>
                    </div>

                )
            })}

        </div>
    );
}

export default ListaActividadesProfesor;