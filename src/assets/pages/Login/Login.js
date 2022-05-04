import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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

    const onGoogleSuccess = (res) => {
        console.log(res.profileObj);
        setUser(res.profileObj);
        localStorage.setItem("user", JSON.stringify(res.profileObj));
        navigate('/cursos', { state: { user:res.profileObj }});
    }

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
                            clientId="1015050705702-mn957t21cmktg6keccg4a82v9mjdps22.apps.googleusercontent.com"
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