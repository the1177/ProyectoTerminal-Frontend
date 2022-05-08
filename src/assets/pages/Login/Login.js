import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Dependencias
import './Login.css'
import Title from "./components/Title/Title";
import loginImage from './components/images/loginImage.jpg'
import GoogleLogin from "react-google-login";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Autenticacion con Google exitosa
    const onGoogleSuccess = (res) => {
        console.log("Inicio de sesion exitoso.");
        console.log(res.profileObj);

        // TODO: Realizar peticion para obtener usuario de BD

        // Guardar datos de usuario en memoria local
        setUser(res.profileObj);
        localStorage.setItem("user", JSON.stringify(res.profileObj));

        // Redirigir a /cursos al loggearse exitosamente
        navigate('/cursos', { state: { user: res.profileObj } });
    }

    // Autenticacion con Google fallo
    const onGoogleFailure = (res) => {
        //alert("No se pudo iniciar sesión. Intente de nuevo.");
    }

    return (
        <div className='container-father'>
            <div className='login-container'>
                <div className='ti-container'>
                    <Title className='titulo' text='Bienvenidos a Gamificación' />
                </div>
                <div className="container-form-login">

                    <div className='sesion-container'>
                        <br></br>
                        <br></br>
                        <GoogleLogin
                            className="googleButton"
                            clientId="1055338382541-nhujigic1cfmeq8lth1f7fnjhtu1tisq.apps.googleusercontent.com"
                            buttonText="Iniciar sesión con Google"
                            onSuccess={onGoogleSuccess}
                            onFailure={onGoogleFailure}
                            isSignedIn={true}
                            cookiePolicy={'single_host_origin'}
                            redirectUri="https://gamificacion-frontend.herokuapp.com/cursos"
                        />
                    </div>
                </div>
            </div>
            <div className='Container-Image'>
                <img className='image-login' src={loginImage} />
            </div>
        </div>
    )
};

export default Login;