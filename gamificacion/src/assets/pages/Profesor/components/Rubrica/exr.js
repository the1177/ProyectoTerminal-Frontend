import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { Container, Box, Grid, Paper, Typography, TextField, Button } from '@mui/material'
import { red } from '@mui/material/colors';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const initialValues = {
  criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
  niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }],
};

const theme = createTheme({
  spacing: 3,
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Rubrica = () => (

  <Container fixed>

    <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={'fixed'}>
        <Paper
            sx={{
            p: 2,
            display: 'auto',
            flexDirection: 'column',
            bgcolor: '#f3f3f3',
            borderRadius: 3,
            height: 'auto',
            
            }}
        >
          <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
              Crear Rúbrica
              </Typography>
          </Grid>

          <Formik
            className="FormR"
            initialValues={initialValues}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form>
                <FieldArray name="criterios">
                  {({ insert, remove, push }) => (
                    
                    <Grid>
                      {values.criterios.length > 0 &&
                        values.criterios.map((friend, index) => (
                          <Grid className="row" key={index}>

                            <Grid item xs>
                              <Typography gutterBottom variant="h4" component="div">
                                Criterio {index + 1}
                              </Typography>
                            </Grid>

                            <Grid className="col">
                              <TextField
                                requiered
                                label="Título del Criterio"
                                variant="filled"
                                name={`criterios.${index}.tituloCriterio`}
                                placeholder="Título del Criterio"
                                type="text"
                              />
                              <ErrorMessage
                                name={`criterios.${index}.tituloCriterio`}
                                component="div"
                                className="field-error"
                              />
                            </Grid>

                            <Grid className="col">
                              <TextField
                                requiered
                                multiline
                                label="Descripción del Criterio"
                                variant="filled"
                                name={`criterios.${index}.descripcionCriterio`}
                                placeholder="Descripción del Criterio"
                                type="text"
                              />
                              <ErrorMessage
                                name={`criterios.${index}.descripcionCriterio`}
                                component="div"
                                className="field-error"
                              />
                            </Grid>

                            <Grid className="col">
                              <Button
                                type="button"
                                variant='outline'
                                startIcon={<DeleteIcon />}
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                Eliminar
                              </Button>
                            </Grid>

                            <Grid>
                              <Grid item xs>
                                  <Typography gutterBottom variant="h5" component="div">
                                  Crear Niveles
                                  </Typography>
                              </Grid>

                              <Grid
                                sx={{ m: 2 , width: '50vh' }}
                              
                              >

                                <Formik
                                  initialValues={initialValues}
                                  onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    alert(JSON.stringify(values, null, 2));
                                  }}
                                >
                                  {({ values }) => (
                                    <Form>
                                      <FieldArray name="niveles">
                                        {({ insert, remove, push }) => (

                                          <Box component="form"
                                            bgcolor="white"
                                            spacing="4"
                                            sx={{
                                              '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                          >

                                            {values.niveles.length > 0 &&
                                              values.niveles.map((nivel, idx) => (

                                                <div>
                                                  <h4>Nivel {idx + 1}</h4>

                                                  <Grid className="col">
                                                    <TextField
                                                      requiered
                                                      label="Puntos (obligatorio)"
                                                      placeholder={`Puntos del nivel #${idx + 1} (obligatorio)`}
                                                      variant="filled"
                                                      name={`niveles.${idx}.puntos`}
                                                      type="text"
                                                      width="25vh"
                                                    />
                                                    <ErrorMessage
                                                      name={`niveles.${idx}.puntos`}
                                                      component="div"
                                                      className="field-error"
                                                    />
                                                  </Grid>

                                                  <Grid className="col">
                                                    <TextField
                                                      name={`niveles.${idx}.tituloNivel`}
                                                      placeholder="Título del Nivel"
                                                      requiered
                                                      label="Título del Nivel"
                                                      variant="filled"
                                                      type="text"
                                                    />
                                                    <ErrorMessage
                                                      name={`niveles.${idx}.tituloNivel`}
                                                      component="div"
                                                      className="field-error"
                                                    />
                                                  </Grid>

                                                  <Grid className="col">
                                                    <TextField
                                                      requiered
                                                      multiline
                                                      label="Descripción"
                                                      variant="filled"
                                                      name={`niveles.${idx}.descripcionNivel`}
                                                      placeholder="Descripción"
                                                      type="text"
                                                    />
                                                    <ErrorMessage
                                                      name={`niveles.${idx}.descripcionNivel`}
                                                      component="div"
                                                      className="field-error"
                                                    />
                                                  </Grid>


                                                  <Grid className="col">
                                                    <Button
                                                      type="button"
                                                      variant='outline'
                                                      startIcon={<DeleteIcon />}
                                                      className="secondary"
                                                      onClick={() => remove(idx)}
                                                    >
                                                      Eliminar Nivel
                                                    </Button>
                                                  </Grid>

                                                </div>
                                              ))}

                                            <ColorButton
                                              type="button"
                                              variant="contained"
                                              className="secondary"
                                              startIcon={<AddIcon />}
                                              onClick={() => push({ puntos: "", tituloNivel: "", descripcionNivel: "" })}
                                            >
                                              Añadir Nivel
                                            </ColorButton>

                                          </Box>

                                        )}
                                      </FieldArray>
                                      <button type="submit">Invite</button>
                                    </Form>
                                  )}
                                </Formik>
                              </Grid>  
                            </Grid>
                          </Grid>
                        ))}

                      <ColorButton
                        type="button"
                        variant="contained"
                        className="secondary"
                        startIcon={<AddIcon />}
                        onClick={() => push({ tituloCriterio: "", descripcionCriterio: "" })}
                      >
                        Añadir Criterio
                      </ColorButton>

                    </Grid>

                  )}
                </FieldArray>
                <Button 
                  type="submit"
                  variant="contained"
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>  
      </Grid>  
    </Grid>
  </Container>

);


ReactDOM.render(<Rubrica />, document.getElementById('root'));

export default Rubrica;