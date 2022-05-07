import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClassIcon from '@mui/icons-material/Class';

{/* DATE TIME PICKER*/}
import {DateTimePicker} from 'formik-mui-lab';
import {LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

{/* SELECTS */}
import { Select, TextField } from 'formik-mui';
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
  InputLabel,
  FormControl, 
  TextFieldProps,
  MenuItem, 
  Button 
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
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
  return <CssTextField
      id={field.name}
      name={field.name}
      helperText={meta.touched ? meta.error : ""}
      error={meta.touched && Boolean(meta.error)}
      value={field.value}
      onChange={field.onChange}
      {...props}
  />
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


const mdTheme = createTheme();

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

const CursoContent = () => {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    console.log(user);

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    const [value, setValue] = React.useState(new Date());
  
    return (
      <React.Fragment>
        <ThemeProvider theme={mdTheme} >
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <NavBar tituloNavBar="Crear Curso" open={ open } setOpen={ setOpen }/>

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
                    Crear Curso
                  </Typography>
                </Grid>

                <Grid item xs>
                    <Box
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                        margin: 'auto',
                        padding: 1,
                        minWidth: '100%',
                      }}

                    >

                      <Formik
                        initialValues={{
                          nombreCurso: '',
                          periodoEscolar: '',
                          añoEscolar: '',
                          claveCurso: '',
                          seccionCurso: '',
                          areaCurso: '',
                          tipoCurso: '',
                          academiaCurso: '',
                          descripcionCurso: '',
                        }}
                        validationSchema={Yup.object({
                          nombreCurso: Yup.string()
                            .max(50, 'Deben ser 50 caracteres or menos')
                            .required('Obligatorio'),
                          periodoEscolar: Yup.string()
                            .oneOf(
                              ['primavera', 'verano', 'otoño', 'invierno'],             
                              'Periodo escolar invalido'
                            )
                            .required('Por favor, seleccione un tipo de curso'),
                          añoEscolar: Yup.number()
                            .required('Obligatorio'),
                          tipoCurso: Yup.string()
                            .oneOf(
                              ['basica', 'libre', 'preespecialidad'],             
                              'Tipo de curso invalido'
                            )
                            .required('Por favor, seleccione un tipo de curso'),
                          claveCurso: Yup.string()
                            .max(10, 'Deben ser 50 caracteres or menos')
                            .required('Obligatorio'),
                          seccionCurso: Yup.number()
                            .required('Obligatorio'),
                          areaCurso: Yup.string()
                            .oneOf(
                              ['materia', 'seminario', 'taller', 'laboratorio'],             
                              'Área del curso invalida'
                            )
                            .required('Por favor, seleccione el área del curso'),
                          academiaCurso: Yup.string()
                            .oneOf(
                              ['desarrollohumano', 'cienciasbasicas', 'matematicas', 'hysbase', 'tratamientoinformacion','ingenieriasoft', 'ingles', 'practicasprof', 'redesytel'],             
                              'Academía del curso invalida'
                            )
                            .required('Por favor, seleccione el área del curso'),
                          descripcionCurso: Yup.string()
                            .max(300, 'Deben ser 300 caracteres or menos')
                            .required('Obligatorio'),
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
                              <Divider light variant="h7" textAlign="left">Información del Curso</Divider>
                              <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                                <FormikTextField formikKey="nombreCurso"
                                  required 
                                  label="Nombre del Curso"
                                  variant="outlined"
                                  name="nombreCurso"
                                  placeholder="Nombre del Curso"
                                  type="text"
                                />
                              </Box>

                              <Box sx={{ m:2 , marginTop: 3}}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                      <FormikTextField formikKey="claveCurso"
                                        required 
                                        label="Clave"
                                        variant="outlined"
                                        name="claveCurso"
                                        placeholder="Clave"
                                        type="text"
                                      />
                                    </Grid>
                                    <Grid item xs={6}>  
                                      <FormikTextField formikKey="seccionCurso"
                                        required 
                                        label="Sección del Curso"
                                        variant="outlined"
                                        name="seccionCurso"
                                        placeholder="Sección del Curso"
                                        type="number"
                                      />
                                    </Grid>
                                </Grid>
                              </Box>

                              <Box sx={{ m:2 , marginTop: 3}}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                      <Field
                                        component={TextField}
                                        type="text"
                                        name="periodoEscolar"
                                        label="Periodo Escolar" 
                                        select
                                        helperText="Por favor, seleccione el periodo escolar"
                                        margin="normal"
                                      >
                                        <MenuItem value="primavera">Primavera</MenuItem>
                                        <MenuItem value="verano">Verano</MenuItem>
                                        <MenuItem value="otoño">Otoño</MenuItem>
                                        <MenuItem value="invierno">Invierno</MenuItem>
                                      </Field>
                                    </Grid>
                                    <Grid item xs={6}>  
                                      <FormikTextField formikKey="añoEscolar"
                                        required 
                                        label="Año"
                                        variant="outlined"
                                        name="añoEscolar"
                                        placeholder="añoEscolar"
                                        type="number"
                                      />
                                    </Grid>
                                </Grid>
                              </Box>

                              <Divider light variant="h7" textAlign="left">Detalles del Curso</Divider>
                              <Box sx={{ m:2 , marginTop: 3}}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                      <Field
                                        component={TextField}
                                        type="text"
                                        name="areaCurso"
                                        label="Área" 
                                        select
                                        helperText="Por favor, seleccione el área del curso"
                                        margin="normal"
                                      >
                                        <MenuItem value="materia">Materia</MenuItem>
                                        <MenuItem value="seminario">Seminario</MenuItem>
                                        <MenuItem value="taller">Taller</MenuItem>
                                        <MenuItem value="laboratorio">Laboratorio</MenuItem>
                                      </Field>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Field
                                        component={TextField}
                                        type="text"
                                        name="tipoCurso"
                                        label="Tipo" 
                                        select
                                        helperText="Por favor, seleccione el tipo del curso"
                                        margin="normal"
                                      >
                                        <MenuItem value="basica">Básica</MenuItem>
                                        <MenuItem value="libre">Elección Libre</MenuItem>
                                        <MenuItem value="preespecialidad">Preespecialidad</MenuItem>
                                      </Field>  
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Field
                                        component={TextField}
                                        type="text"
                                        name="academiaCurso"
                                        label="Academía" 
                                        select
                                        helperText="Por favor, seleccione la academía del curso"
                                        margin="normal"
                                      >
                                        <MenuItem value="desarrollohumano">Desarrollo Humano</MenuItem>
                                        <MenuItem value="cienciasbasicas">Ciencias Básicas</MenuItem>
                                        <MenuItem value="matematicas">Matemáticas</MenuItem>
                                        <MenuItem value="hysbase">Hardware y software base</MenuItem>
                                        <MenuItem value="tratamientoinformacion">Tratamiento de información</MenuItem>
                                        <MenuItem value="ingenieriasoft">Ingeniería de Software</MenuItem>
                                        <MenuItem value="ingles">Inglés</MenuItem>
                                        <MenuItem value="practicasprof">Prácticas profesionales</MenuItem>
                                        <MenuItem value="redesytel">Redes y telecomunicaciones</MenuItem>
                                      </Field>  
                                    </Grid>
                                </Grid>
                              </Box>
                              
                              <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                                <FormikTextField formikKey="descripcionCurso"
                                  required 
                                  label="Descripción del Curso"
                                  variant="outlined"
                                  multiline
                                  rows={4}
                                  name="descripcionCurso"
                                  placeholder="Descripción del Curso"
                                  type="text"
                                />
                              </Box>

                              <Box item sx={{m: 2, textAlign:'center'}}>
                                <Button type="submit" variant="contained" endIcon={<ClassIcon />}>Crear Curso</Button>
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

export default function CrearCurso() {
    return <CursoContent />;
}


