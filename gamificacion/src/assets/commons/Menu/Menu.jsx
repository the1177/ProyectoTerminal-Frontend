import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
//import Hamburger from 'hamburger-react';
import './Menu.css';
import Logo from './components/images/logos.png';

//Usage
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiFlag2Line  } from 'react-icons/ri';
import { CgSmartphoneChip } from 'react-icons/cg';
import { IoCalendarClearOutline, IoChatbubbleEllipsesOutline , IoChatbubblesOutline , IoSettingsOutline, IoSearchOutline , IoExitOutline, IoLogoSass } from 'react-icons/io5' 


const Menuside = () => {

    return (
        
    
        <Menu>

            <div className="sidebar-header">
                <a className="header">
                    <img className="img-logo" src={Logo} alt="" />
                </a>
            </div>

            <div className="menu-containermenu">
                <a id="home" className="menu-item" href="/">
                    <i class="fas fa-home"><GrHomeRounded /></i>
                    Home
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><IoCalendarClearOutline /></i>
                    Calendario
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><MdOutlineDashboard /></i>
                    Dashboard
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><RiFlag2Line /></i>
                    Goals
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><CgSmartphoneChip /></i>
                    Componentes
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><IoChatbubbleEllipsesOutline /></i>
                    Mensajes
                </a>

                <a id="calendario" className="menu-item" href="/">
                    <i class="fas fa-home"><IoChatbubblesOutline /></i>
                    Foro
                </a>

            </div>


            <div className="menu-containeruser">
                <a id="calendario" className="menu-item-u" href="/">
                    <i className="fa fa-home"><IoSearchOutline /></i>
                    Buscar
                </a>

                <a id="calendario" className="menu-item-u" href="/">
                    <i className="fa fa-home"><IoSettingsOutline /></i>
                    Configuración
                </a>

                <a id="calendario" className="menu-item-u" href="/">
                    <i className="fa fa-home"><GrHomeRounded /></i>
                    Usuario
                </a>

                <a id="calendario" className="menu-item-u" href="/">
                    <i className="fa fa-home"><IoExitOutline /></i>
                    Salir
                </a>
            </div>






        </Menu>
    );
};

export default Menuside;
