import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClassIcon from '@mui/icons-material/Class';
import axios from 'axios';

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

// DateTime Picker
import { DateTimePicker } from 'formik-mui-lab';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// Campos de MUI
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
import * as Yup from 'yup';

import Menu from './components/Menu/Menu.js'
import NavBar from './components/NavBar/NavBar';

// Formik
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

// TextField de MUI
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
{/* UseField TextField*/ }
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

// Inicia Contenido de Componente
const CrearCursoContent = () => {
  const saved = localStorage.getItem("user");
  const user = JSON.parse(saved);
  const dbUser = user.dbdata;
  console.log(user);

  // Para Menu responsivo
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Redirigir a cirsps
  const navigate = useNavigate();
  const redirigirCrearCurso = () => {
    navigate('/cursos');
  }

  // Obtener fecha actual
  const [fechaActual, setFechaActual] = React.useState(new Date());

  // Peticion a Backend
  async function enviarPeticion(values) {
    const datos = new FormData();

    // Modificar nombres de campos para igualar nombres de Backend
    datos.append("nombre", values.nombreCurso ? values.nombreCurso : 'nombre');
    datos.append("descripcion", values.descripcionCurso ? values.descripcionCurso : 'descripcion');
    datos.append("urlCurso", "url");
    datos.append("fechaInicio", values.fechaInicio ? values.fechaInicio : fechaActual);
    datos.append("fechaFin", values.fechaFin ? values.fechaFin : fechaActual);
    datos.append("idProfesor", dbUser.usuarioId ? dbUser.usuarioId : 0);
    //data.append("aaa", aaa);

    // Agregar campos a JSON
    var objetoData = {};
    datos.forEach(function (value, key) {
      objetoData[key] = value;
    });
    var dataJson = JSON.stringify(objetoData);

    // Inicia peticion Axios a Backend
    try {
      await axios.post(BackendURL + "/api/cursos", dataJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        // Curso Guardado OK
        if (response.data === "Curso agregado exitosamente.") {
          console.log(response);
          alert("Curso guardado exitosamente");
          redirigirCrearCurso();
        }
        // Curso no guardado
        else {
          console.log(response);
          alert(response.data);
        }
      })
      // Error al procesar Axios
    } catch (error) {
      alert("Ha ocurrido un error al procesar su solicitud.");
      console.log(error);
    }
  }

  // Payload de Vista
  return (
    <React.Fragment>
      <ThemeProvider theme={mdTheme} >
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <NavBar tituloNavBar="Crear Curso" open={open} setOpen={setOpen} />

          <Menu user={user} open={open} setOpen={setOpen} />

          {/* Paper es la sección completa del Form cuadro blanco*/}
          <Paper
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
              sx={{
                marginTop: 8,
                '& .MuiTextField-root': { m: 1, width: '100%' },
                my: 3,
                mx: 1,
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
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                    margin: 'auto',
                    padding: 1,
                    minWidth: '100%',
                  }}
                >

                  {/** El componente de Forms */}
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
                          ['desarrollohumano', 'cienciasbasicas', 'matematicas', 'hysbase', 'tratamientoinformacion', 'ingenieriasoft', 'ingles', 'practicasprof', 'redesytel'],
                          'Academía del curso invalida'
                        )
                        .required('Por favor, seleccione el área del curso'),
                      descripcionCurso: Yup.string()
                        .max(300, 'Deben ser 300 caracteres or menos')
                        .required('Obligatorio'),
                    })}
                    // Submit de Form
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      await enviarPeticion(values).then(response => {
                        console.log(response);
                        resetForm();
                      });
                      setSubmitting(false);
                    }}
                  >
                    {({ values, isSubmitting }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Form>
                          <Divider light variant="h7" textAlign="left">Información del Curso</Divider>
                          <Box sx={{ m: 2,  /*bgcolor:'red'*/ }}>
                            <FormikTextField formikKey="nombreCurso"
                              required
                              label="Nombre del Curso"
                              variant="outlined"
                              name="nombreCurso"
                              placeholder="Nombre del Curso"
                              type="text"
                            />
                          </Box>

                          <Box sx={{ m: 2, marginTop: 3 }}>
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

                          <Box sx={{ m: 2, marginTop: 3 }}>
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
                          <Box sx={{ m: 2, marginTop: 3 }}>
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

                          <Box sx={{ m: 2,  /*bgcolor:'red'*/ }}>
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

                          <Box item sx={{ m: 2, textAlign: 'center' }}>
                            <Button type="submit" disabled={isSubmitting} variant="contained" endIcon={<ClassIcon />}>Crear Curso</Button>
                          </Box>


                          {/* <FormikConsumer>
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
                  </FormikConsumer> */}

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
  return <CrearCursoContent />;
}