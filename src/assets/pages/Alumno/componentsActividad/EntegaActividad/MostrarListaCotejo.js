import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListaCotejo from "./ListaCotejo";
import '../../Alumno.css'

function MostrarListaCotejo(props) {
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
            <ListaCotejo data= {data}/>                           
            </Paper>
        </Grid>
        </div>
    </div>     

  );
}

export default MostrarListaCotejo;