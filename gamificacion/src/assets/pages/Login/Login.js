import React, {useState} from "react";
import './Login.css'
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import loginImage from './components/images/loginImage.jpg'
import GoogleLogin from "react-google-login";
const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    const respuestaGoogle=(respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileObj)
    }
    //Saber en cual input se esta ingresando la información
    function handleChange(name, value){
        if(name === 'email'){
            setUser(value)
            setHasError(false);
        }else {
            if(value.length<6){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };
    function ifMatch(param){
        //Se valido que usuario y contraseña sean mayor a 0
        if(param.user.length > 0 && param.password.length > 0){
            //Si coincide el usuario y el password
            if(param.user ==="edrey" && param.password ==="Hernandez1"){
                //Se desestructura los parametros
                const {user, password} = param;
                //Se crea una nueva variable donde se contiene usr y pwd
                let ac = {user, password}
                //Se pasan como JSON y el json se manda al localStorage para pruebas
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else{
                setIsLogin(false);
                setHasError(true);
            }
        }else {
            setIsLogin(false);
            setHasError(true);
        }
    }
    function handleSubmit(){
        let account = {user, password}
        if (account){
            ifMatch(account);
        }
    };
    
    return (
        
        <div className='container-father'>
            <GoogleLogin
            clientId="1055338382541-nhujigic1cfmeq8lth1f7fnjhtu1tisq.apps.googleusercontent.com"
            buttonText="Iniciar Sesion"
            /*render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            )}*/
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={'single_host_origin'}
        />,
                {isLogin ? 'estas logueado' :            
                <div className='login-container'>
                    <div className='ti-container'>                
                        <Title text='Bienvenidos a Gamificación'/>
                    </div>
                        <div className="container-form-login">
                            { hasError &&
                                <label className="label-alert">Su contraseña o usuario son incorrectos
                                </label>
                            }
                            <div className='input-container-login'>
                                <Label text='Email'/>
                                <Input 
                                attribute={{
                                    id: 'email',
                                    name: 'email',
                                    type: 'email',
                                    placeholder: 'Ingresa tu email'
                                }}
                                    handleChange={handleChange}
                                />
                            </div>
                        <div className='input-container-login'>
                            <Label text='Contraseña'/>
                            <Input 
                                attribute={{
                                    id: 'contraseña',
                                    name: 'contraseña',
                                    type: 'password',
                                    placeholder: 'Ingresa tu contraseña'
                                }}
                                handleChange={handleChange}
                                param={passwordError}
                            />1
                        </div>                
                        {passwordError &&
                                <laber className='label-error'>
                                Contraseña mayor a 6 digitos
                                </laber>
                        }
                        <div className='forgot-container'>
                            <p className="forgot-password text-right">
                                ¿Has olvidado tu <a href="https://www.youtube.com/watch?v=MlW7T0SUH0E">contraseña?</a>
                            </p>
                        </div>
                        <div className='sesion-container'>                  
                            <button onClick={handleSubmit} className="signInButton btn btn-primary btn-block">
                                Iniciar Sesion
                            </button>
                        </div>
                            <div className='register-account-container'>
                            <p className="register-account">
                                ¿No tienes una cuenta?<a href="https://www.youtube.com/watch?v=MlW7T0SUH0E"> Registrate</a>
                            </p>
                            </div>
                        </div>                                     
                </div>
                }
                <div className='Container-Image'>
                    <img className='image-login' src={loginImage}/>
                </div>
            
            
        </div>
    )
};

export default Login;