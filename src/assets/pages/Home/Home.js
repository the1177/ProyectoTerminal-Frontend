import React from "react";
import "./Home.css"
import Menu from '../../commons/Menu/Menu';

const Home = () =>{
    return(
    <div className="div-container">
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        <div className="page-wrap">
            <div className="caja c1">

            </div>
            <div className="caja c2">

            </div>
        </div>
    </div>
    )
};

export default Home;