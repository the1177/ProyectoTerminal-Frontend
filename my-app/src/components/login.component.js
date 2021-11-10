import React, { Component } from "react";


export default class Login extends Component {
    render() {
        return (
        <div>
            <div class="split left">
                <div class="centered">
                    <form>
                        <h2 className="loginBox">BIENVENIDOS A</h2>
                        
                        <h2 className="titulo2">Gamificacion</h2> <br></br>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control userInput" placeholder="Ingresa tu email" />
                        </div>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control userInput" placeholder="Intresa tu contraseña" />
                        </div>
                        <p className="forgot-password text-right">
                            ¿Has olvidado tu<a href="https://www.youtube.com/watch?v=MlW7T0SUH0E"> contraseña?</a>
                        </p>

                        <br></br>

                        <button type="submit" className="signInButton btn btn-primary btn-block">Iniciar sesión</button>

                        <br></br>

                        <p className="text-middle"><span>O</span></p>
                        
                        <p className="sign-up text-center">
                        ¿No tienes una cuenta? <a href="https://www.youtube.com/watch?v=MlW7T0SUH0E"> Regístrate</a>
                        </p>
                    </form>
                </div>
            </div>

                <div class="split right">
                    <div class="centered">
                        <img src="loginImage.jpg" alt="imagen"></img>
                    </div>
                </div>
        </div>
        );
    }
}