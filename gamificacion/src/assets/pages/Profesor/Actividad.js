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
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                        margin: 'auto',
                        padding: 1,
                        minWidth: '100%',
                      }}

                    >

                      <Formik
                        initialValues={{
                          tituloActividad: '',
                          descripcionActividad: '',
                          selectEvaluacion: '',
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
                              ['designer', 'development', 'product', 'other'],             
                              'Invalid Job Type'
                            )
                            .required('Por favor, seleccione un tipo de evaluación'),
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
                              <MySelect label="Tipo de Evaluación" name="selectEvaluacion">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                              </MySelect>
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
                                  {/** {JSON.stringify(rest, null, 2)}*/} 
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



export default function Actividad() {
    return <ActividadContent />;
}
