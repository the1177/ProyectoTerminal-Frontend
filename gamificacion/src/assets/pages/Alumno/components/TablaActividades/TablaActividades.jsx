import React, {useEffect, useState} from "react";
import "./TablaActividades.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TablaActividades(){
    //usestate hook
    let [data, setData] = useState([]);
    const [select, setselect] = useState('');
    //custom data
    var dataa = [
    { id: 1, actividad: 'Realizar un server en minecraft',  status: 'Realizado' }, 
    { id: 2, actividad: 'Formar equipos de 4 integrantes',  status: 'Realizado' }, 
    { id: 3, actividad: 'Descargar roblox',  status: 'Realizado' }, 
    { id: 4, actividad: 'Utilizar un microfono en clase' , status: 'Realizado' }, 
    { id: 5, actividad: 'Tener una exposicion de no mas de 5 minutos',  status: 'Realizado' }, 
    { id: 6, actividad: 'Crear una dinamica', status: 'Realizado' },
    { id: 7, actividad: 'Hacer equipos', status: 'No realizada' },
    { id: 8, actividad: 'Traer una comida', status: 'Realizado' },
    { id: 9, actividad: 'Traer una presentación', status: 'Por hacer' },
    { id: 10, actividad: 'Ganar una partida de fortnite', status: 'Por hacer' },
    { id: 11, actividad: 'Tener una comida en el salon', status: 'Por hacer' }];
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
        <div className="app_container">
            <div className="mb_1">
                <select id="state"
                    onChange={handleChange} class="form-select mb-2">
                        <option value="select Grade">  Elija estado  </option>
                        <option value="Realizado">Realizado</option>
                        <option value="No realizada">No realizada</option>
                        <option value="Por Hacer">Por Hacer</option>
                    </select>
            </div>
            <div className="table_container">
            <table id="Actividades" class="table table-hover table-bordered p-5">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Actividad</th>                
                    <th scope="col">Estado</th>
                </tr>
                </thead>
                <tbody>
                { // calling state variable data to filter data inside table
                data.map(function({id, actividad, status}){
                
                    return (
                        <tr>
                        <td>{id}</td>
                        <td>{actividad}</td>                    
                        <td>{status}</td>
                    </tr>
                        );
                    })}
                    
                    </tbody>
            </table>
            </div> 
        </div>
    );
}