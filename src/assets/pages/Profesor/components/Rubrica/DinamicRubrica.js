import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  },

  initcard: {
    minWidth: 275,
    border: '2px #F3F3F3',
    background: 'linear-gradient(45deg, #f3f3f3 30%, #1976D2 90%)',
    marginTop: 25,
    textAlign: 'center',
    alignItems: 'center',
  },
  rubricard:{
    minWidth: 275,
    border: '2px #F3F3F3',
    background: 'linear-gradient(45deg, #f3f3f3 30%, #f1faee 90%)',
    marginTop: 25,
    textAlign: 'center',
    alignItems: 'center',
  },
}))

function Dinamico() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), criterio: '', descripcion: '' },
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
      setInputFields([...inputFields, { id: uuidv4(),  criterio: '', descripcion: '' }])
    }

    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }

    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 280 }}>
          <Card className={classes.initcard}>
            <h1>Add New Member</h1>
            <TextField
              required
              name="titulocriterio"
              label="Título del Criterio"
              variant="filled"
            />

            <TextField
              id="filled-textarea"
              label="Descripción del Criterio"
              placeholder="Descripción"
              multiline
              variant="filled"
            />

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch', height: '10ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <form className={classes.root} onSubmit={handleSubmit}>
                { inputFields.map(inputField => (
                  <Card className={classes.rubricard}>
                    <div key={inputField.id}>
                      <TextField
                        required
                        name="puntos"
                        label="Puntos (obligatorio)"
                        variant="filled"
                        value={inputField.lastName}
                        onChange={event => handleChangeInput(inputField.id, event)}
                      />
                      <TextField
                        name="titulonivel"
                        label="Título del nivel"
                        variant="filled"
                        value={inputField.firstName}
                        onChange={event => handleChangeInput(inputField.id, event)}
                      />
                      <TextField
                        name="descripcion"
                        label="Descripción"
                        variant="filled"
                        value={inputField.lastName}
                        onChange={event => handleChangeInput(inputField.id, event)}
                      />
                      <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton
                        onClick={handleAddFields}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>                  
                  </Card>
                )) }

                <Button
                    className={classes.button}
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}
                  >Send
                </Button>
                </form>
              </div>

            </Box>

          </Card>

        </FormControl>
      </div>
    );
}

export default Dinamico;