import * as React from "react";
import { Grid, TextField, Card, CardContent, Button } from "@material-ui/core";


class Rubrica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      criterios: [{ tituloCriterio: "", descripcionCriterio: "" }],
      niveles: [{ puntos: "", tituloNivel: "", descripcionNivel: "" }]
    };
  }

  handleChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...this.state.criterios];
    values[index][name] = value;
    this.setState({ values });
  };

  addCriterio = () => {
    this.setState((prevState) => ({
      criterios: [
        ...prevState.criterios,
        { tituloCriterio: "", descripcionCriterio: "" }
      ]
    }));
  };

  removeCriterio = (index, event) => {
    let criterios = [...this.state.criterios];
    criterios.splice(index, 1);
    this.setState({ criterios });
  };

  
  handleNivelChange = (idx) => (event) => {
    const newNiveles = this.state.niveles.map((nivel, sidx) => {
      if (idx !== sidx) return nivel;
      return { ...nivel, puntos: event.target.value, tituloNivel: event.target.value, descripcionNivel: event.target.value };
    });

    this.setState({ niveles: newNiveles });
  };

  handleAddNivel = () => {
    this.setState({
      niveles: this.state.niveles.concat([{ puntos: "", tituloNivel: "", descripcionNivel: "" }])
    });
  };

  handleRemoveNivel = (idx) => () => {
    this.setState({
      niveles: this.state.niveles.filter((s, sidx) => idx !== sidx)
    });
  };

  isValidated() {
    return true;
  }
  render() {
    let { criterios, niveles } = this.state;

    return (
      <Grid container={true} justify="center">

        <Grid item={true} xs={12} sm={12}>
          <h4>Crear Rúbrica</h4>
        </Grid>


        <Grid item={true} xs={12} sm={12}>
          {criterios.map((val, idx) => {
            return (
              <Card key={idx}>
                <CardContent>

                  <Grid item={true} xs={12} sm={12}>
                    <h4>Criterio {idx + 1}</h4>
                  </Grid>

                  <Grid item={true} xs={12} sm={4}>
                    <TextField
                      fullWidth={true}
                      requiered
                      name="tituloCriterio"
                      label="Título del Criterio"
                      variant="filled"
                      value={val.tituloCriterio}
                      onChange={(event) => this.handleChange(idx, event)}
                    />
                  </Grid>

                  <Grid item={true} xs={12} sm={4}>
                    <TextField
                      fullWidth={true}
                      requiered
                      multiline
                      name="descripcionCriterio"
                      label="Descripción del Criterio"
                      variant="filled"
                      value={val.descripcionCriterio}
                      onChange={(event) => this.handleChange(idx, event)}
                    />
                  </Grid>

                  <Card>
                    <CardContent>
                      {niveles.map((nivel, index) => {
                        return (
                          <Grid key={index} item={true} xs={12} sm={4}>

                            <TextField
                              fullWidth={true}
                              requiered
                              name="puntos"
                              label="Puntos (obligatorio)"
                              placeholder={`Puntos del nivel #${index + 1} (obligatorio)`}
                              variant="filled"
                              value={nivel.puntos}
                              onChange={this.handleNivelChange(index)}
                            />

                            <TextField
                              fullWidth={true}
                              requiered
                              name="tituloNivel"
                              label="Título del Nivel"
                              variant="filled"
                              value={nivel.tituloNivel}
                              onChange={this.handleNivelChange(index)}
                            />

                            <TextField
                              fullWidth={true}
                              requiered
                              multiline
                              name="descripcionNivel"
                              label="Descripción del Nivel"
                              variant="filled"
                              value={nivel.descripcionNivel}
                              onChange={this.handleNivelChange(index)}
                            />
                            <button
                              type="button"
                              onClick={this.handleRemoveNivel(index)}
                              className="small"
                            >
                              Eliminar Nivel
                            </button>
                          </Grid>
                        );
                      })}
                      <Grid>
                        <button
                          type="button"
                          onClick={this.handleAddNivel}
                          className="small"
                        >
                          Agregar Nivel
                        </button>
                      </Grid>
                    </CardContent>
                  </Card>
                  <Grid item={true} xs={12} sm={4}>
                    <Button
                      color="rose"
                      className={"Submit"}
                      onClick={(event) => this.removeCriterio(idx, event)}
                    >
                      Eliminar Criterio
                    </Button>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </Grid>


        <Grid item={true} xs={12} sm={4}>
          <Button color="rose" className={"Submit"} onClick={this.addCriterio}>
            Agregar Criterio
          </Button>
        </Grid>

        <Grid item={true} xs={12}>
          <pre>{JSON.stringify(criterios, null, 2)}</pre>
          <br />
          <pre>{JSON.stringify(niveles, null, 2)}</pre>
        </Grid>

      </Grid>
    );
  }
}

export default Rubrica;
