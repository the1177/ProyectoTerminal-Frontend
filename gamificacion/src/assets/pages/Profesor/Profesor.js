import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';


import DateFnsUtils from "@date-io/date-fns";

import { 
  Container, 
  Box, 
  Grid, 
  Paper,
  Card,
  CardActions,
  CardContent, 
  Typography, 
  TextField,
  TextFieldProps,
  Select,
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

const CssTextField = styled(TextField)({
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


const mdTheme = createTheme();


const ProfesorContent = () => {

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
            
            <NavBar tituloNavBar="Editar Perfil" open={ open } setOpen={ setOpen }/>

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
                  '& .MuiTextField-root': {width: '100%'},
                  my: 1,
                  mx: 1,
                  //bgcolor: 'pink',
                  height: 'auto',
                  minWidth: '100%',
                }}

              >
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Información del perfil
                  </Typography>
                </Grid>

                <Grid item xs>
                    <Box
                      sx={{
                        '& .MuiTextField-root': {width: '100%'},
                        margin: 'auto',
                        padding: 1,
                        minWidth: '100%',
                      }}

                    >

                      <Formik
                        initialValues={{
                            nombreProf: '',
                            apellidosProf: '',
                            tituloprofesional: '',
                            correoInst: '',
                            localizacionProf: '',
                            biografiaProf: '',
                            experiencia: '',
                            materiasImpartidas: '',
                            instagram: '',
                            twitter: '',
                            facebook: '',
                            github: '',
                        }}
                        validationSchema={Yup.object({
                            nombreProf: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            apellidosProf: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            tituloprofesional: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            correoInst: Yup.string()
                                .email('Email invalido')
                                .required('Obligatorio'),
                            localizacionProf: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            biografiaProf: Yup.string()
                                .max(300, 'Debe tener 300 caracteres o menos')
                                .required('Obligatorio'),
                            localizacionProf: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            materiasImpartidas: Yup.string()
                                .oneOf(
                                ['algoritmos', 'patrones', 'minera', 'calculoI'],             
                                'Materia invalidad'
                                )
                                .required('Por favor, seleccione un tipo de evaluación'),
                            instagram: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                            twitter: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                            facebook: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                            github: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                      >
                        {({ values }) => (
                          
                          <Form>
                            <Divider light variant="h7" textAlign="left">Información Personal</Divider>
                            <Box sx={{ m:2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                    <Grid item xs={6}>
                                        <FormikTextField formikKey="nombreProf" 
                                            label="Nombres"
                                            variant="outlined"
                                            id="nombreProf"
                                            name="nombreProf"
                                            multiline
                                            placeholder="Nombres"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="apellidosProf" 
                                            label="Apellidos"
                                            variant="outlined"
                                            id="apellidosProf"
                                            name="apellidosProf"
                                            multiline
                                            placeholder="Apellidos"
                                            type="text"
                                        />
                                    </Grid>
                              </Grid>
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="tituloprofesional" 
                                label="Título Profesional"
                                variant="outlined"
                                id="tituloprofesional"
                                name="tituloprofesional"
                                multiline
                                placeholder="Título Profesional"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="correoInst" 
                                label="Correo Institucional"
                                variant="outlined"
                                id="correoInst"
                                name="correoInst"
                                multiline
                                placeholder="Correo Institucional"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="localizacionProf" 
                                label="Localización"
                                variant="outlined"
                                id="localizacionProf"
                                name="localizacionProf"
                                multiline
                                placeholder="Localización"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="biografiaProf" 
                                label="Biografía"
                                variant="outlined"
                                multiline
                                rows={4}
                                id="biografiaProf"
                                name="biografiaProf"
                                placeholder="Biografía"
                                type="text"
                              />
                            </Box>

                            <Divider light variant="h7" textAlign="left">Información Extra</Divider>
                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="experiencia" 
                                label="Experiencia"
                                variant="outlined"
                                multiline
                                rows={4}
                                id="experiencia"
                                name="experiencia"
                                placeholder="Experiencia"
                                type="text"
                              />
                            </Box>

                            <Box sx={{m:2 }}>
                              <MySelect label="Materias Impartidas" name="materiasImpartidas">
                                <option value="">Selecciona las materias</option>
                                <option value="algoritmos">Algoritmos</option>
                                <option value="patrones">Diseño de Patrones</option>
                                <option value="mineria">Minería de Datos</option>
                                <option value="calculoI">Cálculo Integral</option>
                              </MySelect>
                            </Box>

                            <Box  sx={{ m:2, /*bgcolor:'red'*/}}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                    <Grid item xs={6}>
                                        <FormikTextField formikKey="instagram" 
                                        label="Instagram"
                                        variant="outlined"
                                        id="instagram"
                                        name="instagram"
                                        placeholder="Instagram"
                                        type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="twitter" 
                                        label="Twitter"
                                        variant="outlined"
                                        id="twitter"
                                        name="twitter"
                                        placeholder="Twitter"
                                        type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>    
                                        <FormikTextField formikKey="facebook" 
                                        label="Facebook"
                                        variant="outlined"
                                        id="facebook"
                                        name="facebook"
                                        placeholder="Facebook"
                                        type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="github" 
                                        label="Github"
                                        variant="outlined"
                                        id="github"
                                        name="github"
                                        placeholder="Github"
                                        type="text"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box item sx={{m: 2, textAlign:'center'}}>
                              <Button type="submit" variant="contained">Actualizar perfil</Button>
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


export default function Profesor() {
    return <ProfesorContent />;
}
