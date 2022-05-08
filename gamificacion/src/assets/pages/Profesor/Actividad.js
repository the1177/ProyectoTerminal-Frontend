import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


{/* DATE TIME PICKER*/}
import {DateTimePicker} from 'formik-mui-lab';
import {LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

{/* SELECTS */}
import { Select, TextField } from 'formik-mui';
import MuiTextField from '@mui/material/TextField';

{/* RUBRICA */}


import { 
  Container, 
  Box, 
  Grid, 
  Paper,
  Card,
  CardActions,
  CardContent, 
  Typography,
  InputLabel,
  FormControl, 
  TextFieldProps,
  MenuItem, 
  Button 
} from '@mui/material';

import moment from 'moment';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Divider from '@mui/material/Divider';
import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';
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
import { width } from '@mui/system';

const drawerWidth = 240;

const CssTextField = styled(MuiTextField)({
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'light-green',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      }
    },
});

{/* UseField TextField*/}
type FormikTextFieldProps = {
  formikKey: string,
} & TextFieldProps

export const FormikTextField = ({ formikKey, ...props }: FormikTextFieldProps) => {
  const [field, meta, helpers] = useField(formikKey);
  return (
    <>
      <CssTextField
          id={field.name}
          name={field.name}
          helperText={meta.touched ? meta.error : ""}
          error={meta.touched && Boolean(meta.error)}
          value={field.value}
          onChange={field.onChange}
          {...field}
          {...props}
      />
    </>
  )
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>

      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>

  );

};


const initialValues = {
  criterios: [{ tituloCriterio: "", descripcionCriterio: "" }]
};

const options = [
  { value: 'cotejo', label: 'Lista de Cotejo' },
  { value: 'rubrica', label: 'Rúbrica' },
]

const mdTheme = createTheme();


const ActividadContent = () => {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    console.log(user);

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <React.Fragment>
        <ThemeProvider theme={mdTheme} >
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <NavBar tituloNavBar="Crear Actividad" open={ open } setOpen={ setOpen }/>

            <Menu user={ user }  open ={ open } setOpen={ setOpen }/>
            
            {/* Paper es la sección completa del Form cuadro blanco*/}
            <Paper
              fixed
              sx={{
                p: 2,
                margin: 'auto',
                flexDirection: 'column',
                borderRadius: 3,
                height: 'auto',
                width: '50%',
                alignItems: 'center',
                alignContent: 'center',
                //textAlign:'center',
                marginTop: 15,
              }}
            >
              {/* Box es todo el contenido del form */}
              <Box
                fixed
                sx={{
                  marginTop: 8,
                  '& .MuiTextField-root': { m: 1, width: '100%'},
                  my: 3,
                  mx: 1,
                  //bgcolor: 'pink',
                  height: 'auto',
                  minWidth: '100%',
                }}

              >
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Crear Actividad
                  </Typography>
                </Grid>

                <Grid item xs>
                    <Box
                      fixed
                      sx={{
                        marginTop: 8,
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                        my: 3,
                        mx: 1,
                        //bgcolor: 'pink',
                        height: 'auto',
                        minWidth: '100%',
                      }}
                    >

                      <Formik
                        initialValues={{
                          tituloActividad: '',
                          descripcionActividad: '',
                          selectEvaluacion: '',
                          dateTime: new Date(),
                        }}
                        validationSchema={Yup.object({
                          tituloActividad: Yup.string()
                            .max(5, 'Debe tener 5 caracteres o menos')
                            .required('Obligatorio'),
                          descripcionActividad: Yup.string()
                            .max(300, 'Debe tener 300 caracteres o menos')
                            .required('Obligatorio'),
                          selectEvaluacion: Yup.string()
                            .oneOf(
                              ['rubrica', 'cotejo', 'ninguna'],             
                              'Tipo de evaluación invalida'
                            )
                            .required('Por favor, selecciona'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 400);
                        }}
                      >
                        {({ values }) => (
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Form>
                              <Divider light variant="h7" textAlign="left">Información de la Actividad</Divider>
                              <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                                <FormikTextField formikKey="tituloActividad" 
                                  label="Título de la Actividad"
                                  variant="outlined"
                                  id="tituloActividad"
                                  name="tituloActividad"
                                  multiline
                                  placeholder="Título de la Actividad"
                                  type="text"
                                />
                              </Box>

                              <Divider light variant="h7" textAlign="left">Detalles de la Actividad</Divider>
                              <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                                <FormikTextField formikKey="descripcionActividad" 
                                  label="Descripción"
                                  variant="outlined"
                                  multiline
                                  rows={4}
                                  id="tituloActividad"
                                  name="descripcionActividad"
                                  placeholder="Escribe una descripción de la Actividad"
                                  type="text"
                                />
                              </Box>

                              <Box sx={{m:2 }}>
                                <Field
                                  component={DateTimePicker}
                                  name="dateTime"
                                  label="Date Time"
                                />
                              </Box>

                              <Box sx={{m:2}}>
                                <Field
                                   component={TextField}
                                   type="text"
                                   name="selectEvaluacion"
                                   label="Tipo de Evaluación"
                                   select
                                   helperText="Por favor, seleccione un tipo de evaluación"
                                   margin="normal"
                                >
                                  <MenuItem value="rubrica">Rúbrica</MenuItem>
                                  <MenuItem value="cotejo">Lista de Cotejo</MenuItem>
                                  <MenuItem value="ninguna">Ninguna</MenuItem>
                                </Field>
                              </Box>

                              {/*RUBRICA*/}
                              <Box sx={{ m: 2, /*bgcolor:'red'*/}}>
                                <Field as={RubricaComponent}/>
                              </Box>   

                              <Box item sx={{m: 2, textAlign:'center'}}>
                                <Button type="submit" variant="contained">Crear Actividad</Button>
                              </Box>

                              <FormikConsumer>
                                {({ validationSchema, validate, onSubmit, ...rest }) => (
                                  <pre
                                    style={{
                                      fontSize: '.85rem',
                                      padding: '.25rem .5rem',
                                      overflowX: 'scroll',
                                    }}
                                  >
                                    <Box onChange={rest.handleChange} item sx={{m: 2, textAlign:'center'}}> 
                                      <div> Titulo de la actividad: {rest.values.tituloActividad} </div>
                                      <div> Descripción de la actividad: {rest.values.descripcionActividad} </div>
                                      <div> Tipo de evaluacion: {rest.values.selectEvaluacion} </div>
                                    </Box>
                                    {JSON.stringify(rest, null, 2)}
                                  </pre>
                                )}
                              </FormikConsumer>

                            </Form>
                          </LocalizationProvider>
                        )}
                      </Formik>

                    </Box>
                </Grid>

              </Box>

            </Paper>

          </Box>
        </ThemeProvider>

      </React.Fragment>
    );
}

export default function Actividad() {
    return <ActividadContent />;
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


{/* RÚBRICA */}
const RubricaComponent = ({...props}) => (

  <Formik
    initialValues={{
      criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
    }}
    validationSchema={Yup.object({
      niveles: Yup.array().of(
        Yup.object({
          puntos: Yup.number()
            .required(),
          tituloNivel: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
          descripcionNivel: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
        })
      ),
    })}
    onSubmit={async(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log(value);
        setSubmitting(false);
      }, 400);
    }}
  
  >
    {({ values }) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form>

          <FieldArray name="criterios">
            {({push, remove, }) =>(
                <React.Fragment>
                  <Grid item xs>
                      <Typography variant="body">
                        Criterios
                      </Typography>
                  </Grid>

                  {values.criterios.map(( _,idx ) => (
                    <Grid container item >
                      <label>Criterios {idx + 1}</label>
                      <Box  sx={{ m: 2,  /*bgcolor:'red'*/}}>
                        <FormikTextField
                          required 
                          formikKey="tituloCriterio"
                          name={`criterios.${idx}.tituloCriterio`}
                          type="text" 
                          label="Titulo del Criterio"
                          placeholder="Titulo del Criterio"
                        /> 
                      </Box>

                      <Box  sx={{ m: 2, /*bgcolor:'red'*/}}>
                        <FormikTextField 
                          required
                          formikKey="descripcionCriterio"
                          name={`criterios.${idx}.descripcionCriterio`}
                          type="text"
                          multiline
                          rows={4}
                          label="Descripción del Criterio"
                          placeholder="Descripción del Criterio"
                        /> 
                      </Box>

                      <Box item sx={{m: 1, textAlign:'center'}}>
                        <Button onClick={() => remove(idx) }>Eliminar Criterio</Button>
                      </Box>

                      {/*SECCIÓN DE LOS NIVELES */}
                      <Grid item>
                        <Grid item xs>
                          <Typography variant="body">
                            Crear Niveles
                          </Typography>

                          {/*NIVELES*/}
                          <Box sx={{ m: 2, /*bgcolor:'red'*/}}>
                            <Field as={NivelesComponent}/>
                          </Box> 
                          
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                  <Box item sx={{m: 1, textAlign:'center'}}>
                    <Button onClick={() => push({ tituloCriterio: "", descripcionCriterio: "" })}>Añadir Criterio</Button>
                  </Box>
                </React.Fragment>    
            )}  
          </FieldArray>
          
          
          <FormikConsumer>
            {({ validationSchema, validate, onSubmit, ...rest }) => (
              <pre
                style={{
                  fontSize: '.85rem',
                  padding: '.25rem .5rem',
                  overflowX: 'scroll',
                }}
              >
                {/*{JSON.stringify(rest, null, 2)}*/}
              </pre>
            )}
          </FormikConsumer>
          
        </Form>
      </LocalizationProvider>
    )}

  </Formik>

);

const NivelesComponent = ({...props}) => (

  <Formik
    initialValues={{
      niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }],
    }}
    validationSchema={Yup.object({
      niveles: Yup.array().of(
        Yup.object({
          puntos: Yup.number()
            .required(),
          tituloNivel: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
          descripcionNivel: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
        })
      ),
    })}
    onSubmit={async(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log(value);
        setSubmitting(false);
      }, 400);
    }}
  
  >
    {({ values }) => (
      <Form>

        <FieldArray name="niveles">
          {({push, remove, }) =>(
              <React.Fragment>
                <Grid item>
                    <Typography variant="body">
                      Niveles
                    </Typography>
                </Grid>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                  }}
                >
                  {values.niveles.map(( _,idx ) => (
                    <Card 
                      textAlign="center"
                      sx={{ maxWidth: 800, borderRadius: 3, padding: 3 }} 
                    >
                      <CardContent>
                        <Grid container item >
                          <label>Nivel {idx + 1}</label>
                          <Box  sx={{ m: 1, /*bgcolor:'yellow'*/ }}>
                            <FormikTextField
                              requiered 
                              formikKey="puntos"
                              name={`niveles.${idx}.puntos`}
                              type="number" 
                              label="Puntos (obligatorio)"
                              placeholder="Puntos (obligatorio)"
                            /> 
                          </Box>

                          <Box  sx={{ m: 1, /*bgcolor:'yellow'*/ }}>
                            <FormikTextField
                              required 
                              formikKey="tituloNivel"
                              name={`niveles.${idx}.tituloNivel`}
                              type="text" 
                              label="Titulo del Nivel"
                              placeholder="Titulo del Nivel"
                            /> 
                          </Box>

                          <Box  sx={{ m: 1, /*bgcolor:'yellow'*/ }}>
                            <FormikTextField
                              required 
                              formikKey="descripcionNivel"
                              name={`niveles.${idx}.descripcionNivel`}
                              type="text" 
                              label="Descripción del Nivel"
                              placeholder="Descripción del Nivel"
                            /> 
                          </Box>

                          <Box item sx={{m: 1, textAlign:'center'}}>
                            <Button onClick={() => remove(idx) }>Eliminar Nivel</Button>
                          </Box>
                        </Grid>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
                <Box item sx={{m: 1, textAlign:'center'}}>
                  <Button onClick={() => push({ puntos: "", tituloNivel: "", descripcionNivel: "" })}>Añadir Nivel</Button>
                </Box>
              </React.Fragment>    
          )}  
        </FieldArray>
        
        
        <FormikConsumer>
          {({ validationSchema, validate, onSubmit, ...rest }) => (
            <pre
              style={{
                fontSize: '.85rem',
                padding: '.25rem .5rem',
                overflowX: 'scroll',
              }}
            >
              {/*{JSON.stringify(rest, null, 2)}*/}
            </pre>
          )}
        </FormikConsumer>
        
      </Form>

    )}

  </Formik>
);