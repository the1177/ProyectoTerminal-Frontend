import React, {useEffect, useState} from "react";
import "./DispersionSelect.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dispersion from "./Components/Dispersion/Dispersion";

export default function TablaActividades(){
    //usestate hook
    let [data, setData] = useState([]);
    const [select, setselect] = useState('');
    //custom data
    var dataa = [
    { id: 1, actividad: 'Realizar un server en minecraft',  status: 'Completadas' }, 
    { id: 2, actividad: 'Formar equipos de 4 integrantes',  status: 'Completadas' }, 
    { id: 3, actividad: 'Descargar roblox',  status: 'Completadas' }, 
    { id: 4, actividad: 'Utilizar un microfono en clase' , status: 'Completadas' }, 
    { id: 5, actividad: 'Tener una exposicion de no mas de 5 minutos',  status: 'Completadas' }, 
    { id: 6, actividad: 'Crear una dinamica', status: 'Completadas' },
    { id: 7, actividad: 'Hacer equipos', status: 'Vencidas' },
    { id: 8, actividad: 'Traer una comida', status: 'Completadas' },
    { id: 9, actividad: 'Traer una presentación', status: 'Pendientes' },
    { id: 10, actividad: 'Ganar una partida de fortnite', status: 'Pendientes' },
    { id: 11, actividad: 'Tener una comida en el salon', status: 'Pendientes' }];
    //Select onchage function, getting option selected value and save inside state variable
    function handleChange (e){
        //set state variable with option value
        setselect(e.target.value);
    
    };
    //hooks calls after rendering select state
    useEffect(() => {
        setData(select);
        if(select == 'select Grade'){
            data = dataa.filter(dataa => dataa.status !== select); 
            setData(data);
        }else{
                    //Doing filteration on according to select state option
        data = dataa.filter(dataa => dataa.status === select);   
        }
        //set state variable data after filteration
        setData(data);
        }, [select]);
    //output  

    return (
        <div>
            <h4>Alumnos </h4>
            <div className="Dis-container">
                <div className="mb_1">
                    <select id="state"
                        onChange={handleChange} className="form-select mb-2">
                            <option value="select Grade">  Eligir actividad  </option>
                            <option value="Completadas">Actividad 1</option>
                            <option value="Vencidas">Actividad 2</option>
                            <option value="Pendientes">Actividad 3</option>
                        </select>
                </div>
                <div>
                    <Dispersion />
                </div>
            </div>
        </div>
    );
}