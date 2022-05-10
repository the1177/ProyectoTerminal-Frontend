import React, { useState } from "react";
import './InputActividad.css'
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function InputActividad(props) {

    const [archivos, setArchivos]= useState(null);

    const subirArchivos = e =>{
      console.log("archivos",e)
        setArchivos(e.target.files[0]);
    }

    //Peticion Api
    const insertarArchivos = async () =>{
        const f= new FormData();

        f.append("file", archivos);
      
       await axios.post(`https://whispering-retreat-36377.herokuapp.com/upload-file`, f, { headers: {'Content-Type': 'multipart/form-data; boundary=${form._boundary}'}})
       .then(response=> {console.log(response)}).catch(error=>{console.log(error)})
      


     }

  return (
    <div className="Archivos">
          <label className="form-label">Sube tu actividad</label>
            <input className="form-control" name="file" type="file" onChange={(e)=>subirArchivos(e)}></input>
        <br/>
        <Button variant="primary" onClick={()=>insertarArchivos()}>Subir Actividad</Button>
    </div>    

  );
}

export default InputActividad;