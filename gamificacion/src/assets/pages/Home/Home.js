import React from "react";
import "./Home.css"
import Title from './components/Title/Title';
import Menu from '../../commons/Menu/Menu';

const Home = () =>{
    return(
    <div>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
    )
};

export default Home;