import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';


function Rubrica(props) {
  const [data, setData] = useState(props.data)
  console.log(props)
  return (
    <div>
       <h4>Rubrica</h4>

       <table id="Actividades" className="table table-hover table-bordered p-5">
                <thead>
  
                    <tr>
                    <th scope="col">Criterio</th>
                    <th scope="col">{data[0].niveles[0].Nombre}</th>
                    <th scope="col">{data[0].niveles[1].Nombre}</th>
                    <th scope="col">{data[0].niveles[2].Nombre}</th>
                    <th scope="col">{data[0].niveles[3].Nombre}</th>
                    <th scope="col">puntos</th>
                    </tr>
                    

                </thead>
                <tbody>
                  
                {data.map((e,index)=>(
                  <tr key={index}>
                    <td>{e.nombre}</td>
                    {e.niveles.map((f)=>(
                        <td>{`${f.descripcion}\n\n`+'puntos: '+`${f.puntos}`}</td>
                        
                    ))}
                    <td><input /></td>

                  </tr>
                ))}
                    
                    </tbody>
            </table>
            <Button variant="primary" >Enviar puntaje</Button> 
    </div>    

  );
}

export default Rubrica;