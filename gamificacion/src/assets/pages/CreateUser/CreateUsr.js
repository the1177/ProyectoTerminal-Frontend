import React, {useState} from "react";
import "./CreateUsr.css"
import Title from "./components/Title/Title";
import imageRegister from './components/images/registerImage.jpg'
import Input from './components/Input/Input'

const CreateUser = () =>{
    return(
        <div className="Container-father-register">         
            <div className='Container-Image'>
                <img className='image-register' src={imageRegister}/>
            </div>
            <div className='register-container'>    
                <div className="sign-up-register">
                    <Title text='Registro'/>
                </div>
                <div className="container-form">
                    <div className="input-container">
                        <form>
                            <div>
                                <label htmlFor="nombre">Nombre:</label>
                            </div>
                            <div>
                                <Input 
                                attribute={{
                                    id:'nombre',
                                    name:'nombre',
                                    type: 'text',
                                    placeholder:'Nombre'
                                }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="input-container">
                        <form>
                            <div>
                                <label htmlFor="apellido">Apellido:</label>
                            </div>
                            <div>
                            <Input 
                                attribute={{
                                    id:'apellido',
                                    name:'apellido',
                                    type: 'text',
                                    placeholder:'Apellido'
                                }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="input-container">
                        <form>
                            <div>
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div>
                            <Input 
                                attribute={{
                                    id:'email',
                                    name:'email',
                                    type: 'email',
                                    placeholder:'Ingresa tu email'
                                }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="input-container">
                        <form>
                            <div>
                                <label htmlFor="password">Contraseña:</label>
                            </div>
                            <div>
                            <Input 
                                attribute={{
                                    id:'password',
                                    name:'password',
                                    type: 'password',
                                    placeholder:'Ingresa tu contraseña'
                                }}
                                />
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default CreateUser;