import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      border: '2px #F3F3F3',
      background: 'linear-gradient(45deg, #f3f3f3 30%, #1976D2 90%)',
      marginTop: 25,
      textAlign: 'center',
      alignItems: 'center',
    },

    formss: {
        margin: theme.spacing(4),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },

    },

    primary: {
        border: '2px #f3f3f3',
    },

    button: {
        margin: theme.spacing(1),
    }
    
}))

function Rubrica() {
    const classes = useStyles();
    const [allPlayers, setAllPlayers] = React.useState([
        { name: "", description: "", price: null, rating: null },
    ]);

    const handleAddPlayers = () => {
        const values = [...allPlayers];
        values.push({
        name: "",
        description: "",
        price: null,
        rating: null,
        });
        setAllPlayers(values);
    };

    const handleRemovePlayers = (index) => {
        const values = [...allPlayers];
        values.splice(index, 1);
        setAllPlayers(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...allPlayers];
        const updatedValue = event.target.name;
        values[index][updatedValue] = event.target.value;

        setAllPlayers(values);
    };

    console.log(allPlayers);

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
            <Row className="justify-content-center">
                <Col xs="6" className="dynamic-form-headings">
                <h3>Editar Rúbrica</h3>
                <Button className={classes.primary} variant="primary" onClick={() => handleAddPlayers()}>
                    Añadir un criterio
                </Button>
                </Col>
                <Col xs="12">
                <Form className={classes.formss}>
                    <Row className="justify-content-center">
                    {allPlayers.length > 0 && (
                        <>
                        {allPlayers.map((field, index) => (
                            <Col xs="4">
                                <Card className={classes.root}>
                                    <div className="add-player-div">
                                    <h4>Criterio {index + 1}</h4>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <TextField
                                            requiered
                                            type="text"
                                            label="Título del criterio"
                                            id="filled-size-normal"
                                            defaultValue="Normal"
                                            variant="filled"
                                            placeholder="Nombre del criterio"
                                            value={field.name}
                                            onChange={(event) =>
                                                handleInputChange(index, event)
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <TextField
                                            type="text"
                                            label="Descripción del criterio"
                                            id="filled-size-normal"
                                            multiline
                                            rows={4}
                                            defaultValue="Normal"
                                            variant="filled"
                                            placeholder="Escribe sobre el criterio"
                                            value={field.name}
                                            onChange={(event) =>
                                                handleInputChange(index, event)
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <TextField
                                            requiered
                                            type="text"
                                            label="Puntos (obligatorio)"
                                            id="filled-size-normal"
                                            defaultValue="Normal"
                                            variant="filled"
                                            placeholder="Escribe el valor del criterio"
                                            value={field.name}
                                            onChange={(event) =>
                                                handleInputChange(index, event)
                                            }
                                        />
                                    </Form.Group>
                                    <Button
                                        className={classes.button}
                                        variant="contained" disableElevation
                                        onClick={() => handleRemovePlayers(index)}
                                        >
                                        Cancel
                                    </Button>
                                </div>
                                </Card>
                            </Col>
                        ))}
                        </>
                    )}
                    </Row>
                </Form>
                </Col>
            </Row>
            </Container>
        </Box>
  );
}

export default Rubrica;