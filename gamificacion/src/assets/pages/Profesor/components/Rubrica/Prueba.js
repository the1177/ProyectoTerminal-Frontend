import React, { useState } from 'react';
import { Grid, Container, TextField, Card, CardContent, Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { 
        id: uuidv4(), 
        criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
        niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }]
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { 

        id: uuidv4(), 
        criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
        niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }]

     }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <Container>
      <h1>Add New Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.criterios.map(inputField => (
          <div key={inputField.id}>
                <TextField
                    required
                    name="tituloCriterio"
                    label="Título del Criterio"
                    variant="filled"
                    value={inputField.criterios.tituloCriterio}
                    onChange={event => handleChangeInput(inputField.id, event)}
                />

                <TextField
                    required
                    multiline
                    name="descripcionCriterio"
                    label="Descripción del Criterio"
                    variant="filled"
                    value={inputField.criterios.descripcionCriterio}
                    onChange={event => handleChangeInput(inputField.id, event)}
                />

                <form className={classes.rootniveles} onSubmit={handleSubmit}>
                    {inputFields.niveles.map(inputField => (
                        <div key={inputField.id}>
                            <TextField
                                required
                                name="tituloNivel"
                                label="Título del Nivel"
                                variant="filled"
                                value={inputField.niveles.tituloNivel}
                                onChange={event => handleChangeInput(inputField.id, event)}
                            />


                        </div>

                    ))}
                </form>

                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                <RemoveIcon />
                </IconButton>
                <IconButton
                onClick={handleAddFields}
                >
                <AddIcon />
                </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>
    </Container>
  );
}

export default App;