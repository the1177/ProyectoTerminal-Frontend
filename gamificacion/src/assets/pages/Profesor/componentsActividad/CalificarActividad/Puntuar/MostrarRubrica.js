import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rubrica from "../Puntuar/Rubrica";
// import '../../Alumno.css'

function MostrarRubrica(props) {
console.log("Mostrar",props)
  const [data, setData] = useState(props.data)
  return (
    <div className='section-cotejo'>
        <div className='ListaCotejoContainer'>
        <Grid item xs={12} md={8} lg={9}>
            <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,                          
                // backgroundColor:'red'
            }}
            >   
            <Rubrica data={data} />                           
            </Paper>
        </Grid>
        </div>
    </div>     

  );
}

export default MostrarRubrica;