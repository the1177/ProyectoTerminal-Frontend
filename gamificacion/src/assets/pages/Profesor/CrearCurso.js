import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClassIcon from '@mui/icons-material/Class';

import { 
  Container, 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  TextField,
  TextFieldProps, 
  Button } from '@mui/material';
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
                component="form"
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
                      component="form"
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
                          idCurso: '',
                          seccionCurso: '',
                          areaCurso: '',
                          descripcionCurso: '',
                        }}
                        validationSchema={Yup.object({
                          nombreCurso: Yup.string()
                            .max(50, 'Must be 50 characters or less')
                            .required('Required'),
                          idCurso: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                          seccionCurso: Yup.number()
                            .required('Required'),
                          areaCurso: Yup.string()
                            .max(50, 'Must be 50 characters or less')
                            .required('Required'),
                          descripcionCurso: Yup.string()
                            .max(300, 'Must be 300 characters or less')
                            .required('Required'),
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
                            <Divider light variant="h7" textAlign="left">Información del Curso</Divider>
                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="nombreCurso" 
                                label="Nombre del Curso"
                                variant="outlined"
                                name="nombreCurso"
                                placeholder="Nombre del Curso"
                                type="text"
                              />
                            </Box>

                            <Divider light variant="h7" textAlign="left">Detalles del Curso</Divider>
                            <Box sx={{ m: 2, /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="idCurso" 
                                label="ID del Curso"
                                variant="outlined"
                                name="idCurso"
                                placeholder="ID del Curso"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="seccionCurso" 
                                label="Sección del Curso"
                                variant="outlined"
                                name="seccionCurso"
                                placeholder="Sección del Curso"
                                type="number"
                              />
                            </Box>

                            <Box sx={{ m: 2, /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="areaCurso" 
                                label="Areá del Curso"
                                variant="outlined"
                                name="areaCurso"
                                placeholder="Areá del Curso"
                                type="text"
                              />
                            </Box>

                            <Box sx={{ m: 2,  /*bgcolor:'red'*/}}>
                              <FormikTextField formikKey="descripcionCurso" 
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


