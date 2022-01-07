import React from "react";
import './Dash.css';
import Menu from '../../commons/Menu';



const Dash = () =>{
    return(
    <div className="Dash" id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
    )
};

export default Dash;