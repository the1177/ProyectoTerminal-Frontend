import React from "react";
import '../../components/text/Text.css'
const Text = ({text}) => {
    return (
        <div className='title-container-register'>
           <label className="title-label">{text}</label>
        </div>
    )
};

export default Text;