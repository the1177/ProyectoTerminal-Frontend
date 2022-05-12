import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';


function Rubrica(props) {
  const [data, setData] = useState(props.data)
  return (
    <div>
       <h4>Rubrica</h4>
       <table id="Actividades" className="table table-hover table-bordered p-5">
                <thead>
  
                    <tr>
                    <th scope="col">Criterio</th>
                    {data[0].niveles.map((e,index)=>(
                        <th key={index} scope="col">{e.Nombre}</th>
                    ))}
                    <th scope="col">puntos</th>
                    </tr>
                    

                </thead>
                <tbody>
                  
                {data.map((e,index)=>(
                  <tr key={index}>
                    <td>{e.nombre}</td>
                    {e.niveles.map((f,index)=>(
                        <td key={index}>{`${f.descripcion}\n\n`+'puntos: '+`${f.puntos}`}</td>
                        
                    ))}
                    <td><input key={index} /></td>

                  </tr>
                ))}
                    
                    </tbody>
            </table>
            <Button variant="primary" >Enviar puntaje</Button> 
    </div>    

  );
}

export default Rubrica;