import React, {useEffect, useState} from "react";
import "./TablaActividades.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TablaActividades(){
    //usestate hook
    let [data, setData] = useState([]);
    const [select, setselect] = useState('');
    //custom data
    var dataa = [
     { id: 1, actividad: 'Realizar un server en minecraft',  state: 'Por Hacer' }, 
    { id: 2, actividad: 'Formar equipos de 4 integrantes',  state: 'Realizado' }, 
    { id: 3, actividad: 'Descargar roblox',  state: 'Por Hacer' }, 
    { id: 4, actividad: 'Utilizar un microfono en clase' , state: 'Realizado' }, 
    { id: 5, actividad: 'Tener una exposicion de no mas de 5 minutos',  state: 'No realizada' }, 
    { id: 6, actividad: 'Crear una dinamica', state: 'No realizada' }];
    //Select onchage function, getting option selected value and save inside state variable
    function handleChange (e){
        //set state variable with option value
        setselect(e.target.value);
    
    };
    //hooks calls after rendering select state
    useEffect(() => {
        setData(select);
        if(select == 'select Grade'){
            data = dataa.filter(dataa => dataa.state !== select); 
            setData(data);
        }else{
                    //Doing filteration on according to select state option
        data = dataa.filter(dataa => dataa.state === select);   
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
                data.map(function({id, actividad, state}){
                
                    return (
                        <tr>
                        <td>{id}</td>
                        <td>{actividad}</td>                    
                        <td>{state}</td>
                    </tr>
                        );
                    })}
                    
                    </tbody>
            </table>
            </div> 
        </div>
    );
}