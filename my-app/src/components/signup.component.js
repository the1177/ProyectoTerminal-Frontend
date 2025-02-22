import React, { Component } from "react";
import Menu from "../menu";

export default class SignUp extends Component {
    render() {
        return (
            <div>
            <Menu></Menu>
                <div class="split right">
                    <div class="centered">
                        <form>
                            <h3>Registro</h3>

                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control userInput" placeholder="Nombre" />
                            </div>

                            <div className="form-group">
                                <label>Apellidos</label>
                                <input type="text" className="form-control userInput" placeholder="Apellidos" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control userInput" placeholder="Ingresa tu correo" />
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" className="form-control userInput" placeholder="Ingresa tu contraseña" />
                            </div>

                            <br></br>

                            <button type="submit" className="signInButton btn btn-primary btn-block">Registrarse</button>
                            <p className="forgot-password text-right">
                                ¿Ya estás registrado?<a href="./sign-in"> Inicia sesión</a>
                            </p>
                        </form>
                    </div>
                </div>

                <div class="split left">
                    <div class="centered">
                        <img src="registerImage.jpg" alt="imagen"></img>
                    </div>
                </div>

            </div>
        );
    }
}