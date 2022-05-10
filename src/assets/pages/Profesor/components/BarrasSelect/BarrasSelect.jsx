    import React, {useEffect, useState} from "react";
    import "./BarrasSelect.css"
    import 'bootstrap/dist/css/bootstrap.min.css';
    import BarrasS from "./components/BarrasS";
    import dataa from "./json.json"
    
    export default function BarrasSelect(){
    
        var dataa = [
            { id: 1, actividad: 'Realizar un server en minecraft',  status: 'Completadas' }, 
             { id: 2, actividad: 'Formar equipos de 4 integrantes',  status: 'xd' }
         ]
    
        //usestate hook
        const [data, setData] = useState(dataa);
        const [select, setSelect] = useState('');
        const [options, setOptions] = useState(dataa);
    
        //Select onchage function, getting option selected value and save inside state variable
        function handleChange (e){
            
            //set state variable with option value
            setSelect(e.target.value);
        
        }
        //hooks calls after rendering select state
        useEffect(() => { 
            if(select.length > 0){
                setData(dataa.filter(item => item.actividad === select))
            }// //Doing filteration on according to select state option
            // data = dataa.filter(dataa => dataa.actividad == select);
            // //set state variable data after filteration
            // setData(data);
            }, [select])
        //output  
    
        return (
            <div>
                <h4>Alumnos </h4>
                <div className="BS-container">
                    <div className="mb_1">
                        <select id="state"  onChange={handleChange} className="form-select mb-2">

                            <option value={data[0].actividad}>  Eligir actividad  </option>
                                {options.map(option =>
                                    <option key={option.id} value={option.actividad}>{option.actividad}</option>
                                )};
                        </select>
    
                    </div>
                    <div>
                        <BarrasS label={data[0].alumnos[0].label} dat ={data[0].alumnos[0].dat}/>
                    </div>
                </div>
            </div>
        );
    }