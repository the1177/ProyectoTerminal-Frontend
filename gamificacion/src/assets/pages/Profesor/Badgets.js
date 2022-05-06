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


const BadgetsContent = () => {

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
                    Crear Badget
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
                            nombreBadget: '',
                            typeBadget: '',
                            clasificacion: '',
                            categoria: '',
                            nivel: '',
                            puntosExp: '',
                            descripcionBadget: '',
                            expires: '',
                        }}
                        validationSchema={Yup.object({
                            nombreBadget: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            typeBadget: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos')
                                .required('Obligatorio'),
                            clasificacion: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                            categoria: Yup.string()
                                .max(25, 'Debe tener 25 caracteres o menos'),
                            nivel: Yup.number()
                                .required('Obligatorio'),
                            puntosExp: Yup.number()
                                .required('Obligatorio'),
                            descripcionBadget: Yup.string()
                                .max(300, 'Debe tener 300 caracteres o menos')
                                .required('Obligatorio'),
                            expires: Yup.string()
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
                            <Divider light variant="h7" textAlign="left">Información del Badget</Divider>
                            <Box sx={{ m:2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormikTextField formikKey="nombreBadget" 
                                            label="Nombre del Badget"
                                            variant="outlined"
                                            id="nombreBadget"
                                            name="nombreBadget"
                                            placeholder="Nombre del Badget"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="typeBadget" 
                                            label="Tipo"
                                            variant="outlined"
                                            id="typeBadget"
                                            name="typeBadget"
                                            multiline
                                            placeholder="Tipo"
                                            type="text"
                                        />
                                    </Grid>
                              </Grid>
                            </Box>

                            <Box sx={{ m:2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormikTextField formikKey="clasificacion" 
                                            label="Clasificacion"
                                            variant="outlined"
                                            id="clasificacion"
                                            name="clasificacion"
                                            multiline
                                            placeholder="Clasificacion"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="categoria" 
                                            label="Categoria"
                                            variant="outlined"
                                            id="categoria"
                                            name="categoria"
                                            multiline
                                            placeholder="Categoria"
                                            type="text"
                                        />
                                    </Grid>
                              </Grid>
                            </Box>

                            <Box sx={{ m:2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormikTextField formikKey="nivel" 
                                            label="Nivel"
                                            variant="outlined"
                                            id="nivel"
                                            name="nivel"
                                            multiline
                                            placeholder="Nivel"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>  
                                        <FormikTextField formikKey="puntosExp" 
                                            label="EXP"
                                            variant="outlined"
                                            id="puntosExp"
                                            name="puntosExp"
                                            multiline
                                            placeholder="EXP"
                                            type="text"
                                        />
                                    </Grid>
                              </Grid>
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="descripcionBadget" 
                                label="Descripción"
                                variant="outlined"
                                multiline
                                rows={4}
                                id="descripcionBadget"
                                name="descripcionBadget"
                                placeholder="Descripción"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="expires" 
                                label="Fecha de Expiración"
                                variant="outlined"
                                id="expires"
                                name="expires"
                                placeholder="Fecha de Expiración"
                                type="text"
                              />
                            </Box>

                            <Box item sx={{m: 2, textAlign:'center'}}>
                              <Button type="submit" variant="contained">Crear Badget</Button>
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


export default function Badgets() {
    return <BadgetsContent />;
}
