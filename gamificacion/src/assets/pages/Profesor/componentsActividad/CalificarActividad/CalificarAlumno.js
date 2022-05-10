import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

{/* MUI MATERIAL */}
import MuiTextField from '@mui/material/TextField';
import { 
    Container, 
    Box, 
    Grid, 
    Paper,
    Card,
    CardActions,
    CardContent, 
    Typography, 
    TextFieldProps,
    Select,
    MenuItem, 
    Button, 
    MenuList,
    Divider
} from '@mui/material';

{/* FORMIK */}
import * as Yup from 'yup';

import { 
  Formik,
  FormikConsumer,
  Form,
  useField,
  Field,
  FormikProps,
  ErrorMessage,
  FieldArray,
  FastField, 
} from 'formik';



const CalificarAlumno = (props) => {
    
    const [id, setId] = useState('')

    const [data, setData] = useState(props.data);
    const [filterData, setFilterData ] = useState([]);


    //usar data y no props
    console.log("Calificar alumnos pestaña:",data);
    return (
    <Grid conatiner="true" className="Alumno-Tarjeta-Container">

        <Box sx={{ m:1 , marginTop: 3}}>

            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
            </Grid>

            <Divider light variant="h7" textAlign="left">Descripción de la actividad</Divider>
            <Grid item xs={12} sx={{ marginTop: 3 }}>
                <Typography gutterBottom variant="body" component="div">
                    {data.description}
                </Typography>
            </Grid>

            {data.alumnos.map(function({id,name,actividad,fechaEntregada,statusEntrega}){
                return(
                   <React.Fragment key={id}>
                       {/* Paper es la sección completa del Form cuadro blanco*/}
                        <Paper
                            
                            sx={{
                                p: 1,
                                margin: 'auto',
                                flexDirection: 'column',
                                borderRadius: 3,
                                height: 'auto',
                                width: '100%',
                                alignItems: 'center',
                                alignContent: 'center',
                                //textAlign:'center',
                                marginTop: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%'},
                                    margin: 'auto',
                                    padding: 1,
                                    minWidth: '100%',
                                    marginTop: 2,
                                }}

                            >
                                <Grid  container key={id} className="Cal-alumno">
                                    <Grid item xs={6} className="section1-alumno">
                                        <Typography gutterBottom variant="h6" component="div">
                                            {name}
                                        </Typography>                      
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Box item sx={{textAlign:'center'}}>
                                            <Button  variant="contained" >Puntuar</Button>                                            
                                        </Box>    
                                    </Grid>

                                    <Grid item xs={12} className="calificacion-box">
                                        
                                    </Grid>

                                    <Grid className="Calificar_Actividad">
                                        <Box item sx={{m: 2, textAlign:'center'}}>
                                            <Button  variant="contained" >Mostrar Actividad</Button>
                                        </Box>                        
                                    </Grid>                 
                                </Grid>
                            </Box>
                        </Paper>
                   </React.Fragment>                     
                )
            })}
        </Box>
    </Grid>    

  );
}

export default CalificarAlumno;
