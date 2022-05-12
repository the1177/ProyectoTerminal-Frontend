import React, {useEffect, useState} from "react";



function ListaCotejo(props) {
  const [data, setData] = useState(props.data)
  return (
    <div>
       <h4>Lista de Cotejo</h4>

       <table id="Actividades" className="table table-hover table-bordered p-5">
                <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripción</th>                
                    <th scope="col">Puntos</th>
                    <th scope="col">Ingresa los puntos</th>
                </tr>
                </thead>
                <tbody>
                  
                {data.map((e,index)=>(
                  <tr key={index}>
                    <td>{e.titulo}</td>
                    <td>{e.descripcion}</td>
                    <td>{e.puntos}</td>
                    <input />
                  </tr>
                ))}
                    
                    </tbody>
            </table>
    </div>    

  );
}

export default ListaCotejo;