import React from "react";
import "./CreateUsr.css"
import Title from "./components/Title/Title";
import Media from 'react-media'

const CreateUser = () =>{
    return(
        <div className="Container-father-register">
            <Media query="(max-width:600px)">
                {matches=>{
                    return matches ? "s": "world";
                }}    
            </Media>            
            <div className='Container-Image'>
                
            </div>
            <div className='register-container'>    
                <div className="sign-up-register">
                    <Title text='Registro'/>
                </div>
                
            </div>
        </div>

    )
};

export default CreateUser;