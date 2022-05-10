import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import ClassIcon from '@mui/icons-material/Class';
import CssBaseline from '@mui/material/CssBaseline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import "./Profesor.css";

import axios from 'axios';

// Ruta Backend
//const BackendURL = "http://localhost:8080";  // Localhost
const BackendURL = "https://whispering-retreat-36377.herokuapp.com";  // Server

// DateTime Picker
import { DateTimePicker } from 'formik-mui-lab';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

{/* SELECTS */ }
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
    TextFieldProps,
    MenuItem,
    Button,
    MenuList
} from '@mui/material';
import Divider from '@mui/material/Divider';
import * as Yup from 'yup';

import Menu from './components/Menu/Menu.js';
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

// TextFields de MUI
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

const InputField = styled('input')({
    display: 'none',
});

// Color button for Upload
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    width: '200px',
    marginTop: '20px',
}));

// Upload buttons
export const UploadButtons = () => {
    return (
        <Stack direction="row" alignItems="center">

            <label htmlFor="contained-button-file">
                <InputField id="contained-button-file" multiple type="file" accept={".png", ".jpg", ".jpeg"} />
                <ColorButton variant="contained" disableElevation component="span" size="medium" startIcon={<AttachFileIcon />}>
                    Subir Imagen
                </ColorButton>
            </label>
        </Stack>
    );
}

const mdTheme = createTheme();

// Inicia contenido de ComponenteF
const BadgetsContent = () => {
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    console.log(user);

    // Para Menu responsivo
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Peticion a Backend
    async function enviarPeticion(values) {
        const datos = new FormData();

        // Modificar nombres de campos para igualar nombres de Backend

        //data.append("aaa", aaa);

        // Agregar campos a JSON
        var objetoData = {};
        datos.forEach(function (value, key) {
            objetoData[key] = value;
        });
        var dataJson = JSON.stringify(objetoData);

        // Inicia peticion Axios a Backend
        try {
            await axios.post(BackendURL + "/api/badgets", dataJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                // Badget Guardado OK
                if (response.data === "Badget agregado exitosamente.") {
                    console.log(response);
                    alert("Badget guardado exitosamente");
                }
                // Badget no guardado
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


    //Payload de Vista
    return (
        <React.Fragment>
            <ThemeProvider theme={mdTheme} >
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />

                    <NavBar tituloNavBar="Crear Badet" open={open} setOpen={setOpen} />

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
                                '& .MuiTextField-root': { width: '100%' },
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
                                        '& .MuiTextField-root': { width: '100%' },
                                        margin: 'auto',
                                        padding: 1,
                                        minWidth: '100%',
                                    }}>

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
                                            datexpd: new Date(),
                                            datexp: new Date(),
                                        }}
                                        validationSchema={Yup.object({
                                            nombreBadget: Yup.string()
                                                .max(25, 'Debe tener 25 caracteres o menos')
                                                .required('Obligatorio'),
                                            typeBadget: Yup.string()
                                                .oneOf(
                                                    ['giveaway', 'reachamount', 'high', 'king', 'level'],
                                                    'Tipo de badget invalido'
                                                )
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
                                                    <Divider light variant="h7" textAlign="left">Información del Badget</Divider>

                                                    <Box sx={{ m: 2 }}>
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                                            <Grid item xs={6}>
                                                                <FormikTextField formikKey="nombreBadget"
                                                                    required
                                                                    label="Nombre del Badget"
                                                                    variant="outlined"
                                                                    id="nombreBadget"
                                                                    name="nombreBadget"
                                                                    placeholder="Nombre del Badget"
                                                                    type="text"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Field
                                                                    required
                                                                    component={TextField}
                                                                    type="text"
                                                                    name="typeBadget"
                                                                    label="Tipo"
                                                                    select
                                                                    helperText="Por favor, seleccione el tipo de badget"
                                                                >
                                                                    <MenuItem value="giveaway">The Give away</MenuItem>
                                                                    <MenuItem value="reachamount">Reach an amount</MenuItem>
                                                                    <MenuItem value="high">High score</MenuItem>
                                                                    <MenuItem value="king">King of the hill</MenuItem>
                                                                    <MenuItem value="level">Level badge</MenuItem>
                                                                </Field>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>

                                                    <Box sx={{ m: 2 }}>
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

                                                    <Box sx={{ m: 2 }}>
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

                                                    <Box sx={{ m: 2,  /*bgcolor:'red'*/ }}>
                                                        <FormikTextField formikKey="descripcionBadget"
                                                            required
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

                                                    <Box sx={{ m: 2,  /*bgcolor:'red'*/ }}>
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                                            <Grid item xs={6}>
                                                                <Field
                                                                    required
                                                                    component={DateTimePicker}
                                                                    name="datexpd"
                                                                    label="Fecha de expedición"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Field
                                                                    component={DateTimePicker}
                                                                    name="datexp"
                                                                    label="Fecha de expiración"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Box>

                                                    <Box sx={{ m: 2 }}>
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                                                            <Grid item xs={12}>
                                                                <UploadButtons />
                                                            </Grid>
                                                        </Grid>
                                                    </Box>

                                                    <Box item sx={{ m: 2, textAlign: 'center' }}>
                                                        <Button type="submit" disabled={isSubmitting} variant="contained" endIcon={<ClassIcon />}>Crear Badget</Button>
                                                    </Box>


                                                    {/** <FormikConsumer>
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
                                </FormikConsumer>*/}


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

export default function Badgets() {
    return <BadgetsContent />;
}