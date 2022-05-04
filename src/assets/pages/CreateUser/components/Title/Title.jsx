import React from "react";
import '../../components/Title//Title.css'
const Title = ({text}) => {
    return (
        <div className='title-container-register'>
           <label className="title-label">{text}</label>
        </div>
    )
};

export default Title;