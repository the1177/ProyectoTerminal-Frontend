import react from "react";
import Image from "react-bootstrap/Image";
import './EditarUser.css';

export default function  imagePerfil ({ list }) {
    console.log(list)
    return(
        <div className="x">
            <img className="image-cp" src={list}  width="400" height="400"/>
            {/* <Image className="image-change-perfil" src={list} roundedCircle='true' fluid="true"/>          */}
        </div>
    );
}