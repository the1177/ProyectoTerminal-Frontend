import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

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

const MyMobileDateTimePicker = ({ label, ...props }) => {

  const [field, meta, helpers] = useField({ ...props, type: 'datetime' });

  return (
    <div>
      <label className="datetime-input">
        {label}
        <MobileDateTimePicker 
          id={field.name}
          name={field.name}
          helperText={meta.touched ? meta.error : ""}
          error={meta.touched && Boolean(meta.error)}
          value={field.value}
          onChange={field.onChange}
          {...props}
        />
      </label>
    </div>
  );

};


const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>

      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

    </div>
  );

};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

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
  criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
  niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }],
};


const mdTheme = createTheme();

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

const ActividadContent = () => {
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
            
            <NavBar tituloNavBar="Crear Actividad" open={ open } setOpen={ setOpen }/>

            <Menu user={ user }  open ={ open } setOpen={ setOpen }/>
            
            {/* Paper es la sección completa del Form cuadro blanco*/}
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                margin: 'auto',
                flexDirection: 'column',
                borderRadius: 3,
                height: 'auto',
                width: '50%',
                alignItems: 'center',
                marginTop: 15,
              }}
            >
              {/* Box es todo el contenido del form */}
              <Box
                component="form"
                sx={{
                  marginTop: 8,

                  '& .MuiTextField-root': { m: 1, width: '100%'},
                  my: 3,
                  mx: 7,
                  bgcolor: 'pink',
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
                  <Divider light variant="h7" textAlign="left">Información de la Actvidad</Divider>
                    <Box 
                      component="form"
                      sx={{
                        display: 'auto',
                        '& .MuiTextField-root': { m: 1, width: '100%'},
                        margin: 'auto',
                        padding: 1,
                        minWidth: '100%',
                      }}

                    >

                      <Formik
                        initialValues={{
                          tituloActividad: '',
                          datetimeActividad: '',
                          email: '',
                          acceptedTerms: false, // added for our checkbox
                          jobType: '', // added for our select
                          criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
                          niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }],
                        }}
                        validationSchema={Yup.object({
                          tituloActividad: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                          datetimeActividad: Yup.date().nullable()
                            .required('Required'),
                          criterios: Yup.array().of(
                            Yup.object({
                              tituloCriterio: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required(),
                              descripcionCriterio: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required(),
                            })
                          ),
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
                          email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                          acceptedTerms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                          jobType: Yup.string()
                            .oneOf(
                              ['designer', 'development', 'product', 'other'],
                              'Invalid Job Type'
                            )
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
                            <Box sx={{ m: 2, bgcolor:'red'}}>
                              <FormikTextField formikKey="tituloActividad" 
                                label="Título de la Actividad"
                                variant="outlined"
                                name="tituloActividad"
                                placeholder="Título de la Actividad"
                                type="text"
                              />
                            </Box>  

                            <Box  sx={{ m: 2, bgcolor:'yellow' }}>
                              <FieldArray name="criterios">
                                {({push, remove, }) =>(
                                  <React.Fragment>
                                    <Grid item>
                                        <Typography variant="body">
                                          Criterios
                                        </Typography>
                                    </Grid>
                                    {values.criterios.map(( _,index ) => (
                                      <Grid container item>
                                        <Grid item>
                                          <FormikTextField 
                                            formikKey="tituloCriterio"
                                            name={`criterios.${index}.tituloCriterio`}
                                            type="text" 
                                            label="Titulo del Criterio"
                                            placeholder="Titulo del Criterio"
                                          /> 
                                        </Grid>

                                        <Grid item>
                                          <FormikTextField 
                                            formikKey="descripcionCriterio"
                                            name={`criterios.${index}.descripcionCriterio`}
                                            type="text" 
                                            label="Descripción del Criterio"
                                            placeholder="Descripción del Criterio"
                                          /> 
                                        </Grid>

                                        <Grid item>
                                          <Button onClick={() => remove(index) }>Eliminar criterio</Button>
                                        </Grid>

                                        <Grid item>
                                            <Grid item xs>
                                              <Typography variant="body">
                                                Crear Niveles
                                              </Typography>

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

                                                          {values.niveles.length > 0 &&
                                                            values.niveles.map((_, idx) =>  (
                                                              <Grid container item key={idx}>
                                                                <Grid item>
                                                                  <FormikTextField 
                                                                    formikKey="puntos"
                                                                    name={`niveles.${idx}.puntos`}
                                                                    type="number" 
                                                                    label="Puntos (obligatorio)"
                                                                    placeholder="Puntos (obligatorio)"
                                                                  /> 
                                                                </Grid>

                                                                <Grid item>
                                                                  <FormikTextField 
                                                                    formikKey="tituloNivel"
                                                                    name={`niveles.${idx}.tituloNivel`}
                                                                    type="text" 
                                                                    label="Titulo del Nivel"
                                                                    placeholder="Titulo del Nivel"
                                                                  /> 
                                                                </Grid>

                                                                <Grid item>
                                                                  <FormikTextField 
                                                                    formikKey="descripcionNivel"
                                                                    name={`niveles.${idx}.descripcionNivel`}
                                                                    type="text" 
                                                                    label="Descripción del Nivel"
                                                                    placeholder="Descripción del Nivel"
                                                                  /> 
                                                                </Grid>

                                                                <Grid item>
                                                                  <Button onClick={() => remove(index) }>Eliminar nivel</Button>
                                                                </Grid>
                                                              </Grid>

                                                          ))}

                                                          <Grid item>
                                                              <Button onClick={() => push({ puntos: "", tituloNivel: "", descripcionNivel: "" })}>Añadir nivel</Button>
                                                          </Grid>
                                                        </React.Fragment>

                                                      )}

                                                    </FieldArray>

                                                  </Form>

                                                )}
                                                
                                              </Formik>
                                          </Grid>

                                        </Grid>

                                      </Grid>
                                    ))}

                                    <Grid item>
                                        <Button onClick={() => push({ tituloCriterio: "", descripcionCriterio: "" })}>Añadir Criterio</Button>
                                    </Grid>
                                  </React.Fragment>
                                )}
                              </FieldArray>
                            </Box>

                            <FormikTextField formikKey="email" 
                              label="Email Address"
                              name="email"
                              type="email"
                              placeholder="jane@formik.com"
                            />

                            <MySelect label="Job Type" name="jobType">
                              <option value="">Select a job type</option>
                              <option value="designer">Designer</option>
                              <option value="development">Developer</option>
                              <option value="product">Product Manager</option>
                              <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox name="acceptedTerms">
                              I accept the terms and conditions
                            </MyCheckbox>

                            <button type="submit">Submit</button>

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



export default function Actividad() {
    return <ActividadContent />;
}