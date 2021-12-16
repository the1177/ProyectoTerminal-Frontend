import React from "react";
import './Label.css'

const Label = ({text}) =>{
    return(
        <div className='Label-container'>
            {text}
        </div>
    );
}

export default Label;