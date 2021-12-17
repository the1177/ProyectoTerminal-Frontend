import React, { Component } from "react";
import './profesor.css';

//Usage
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiFlag2Line  } from 'react-icons/ri';
import { CgSmartphoneChip } from 'react-icons/cg';
import { IoCalendarClearOutline, IoChatbubbleEllipsesOutline , IoChatbubblesOutline , IoSettingsOutline, IoSearchOutline , IoExitOutline } from 'react-icons/io5' 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    containerBox: {
        padding: "8px",
        backgroundColor: "pink",
        borderRadius: "5px",
        bgColor: "pink",
        color: "black",

        display: "flex",
        justifyContent: "space-around",

        marginBottom: "30px"
    },
    childBox0: {
        backgroundColor: "purple",
        color: "black"
    }
}));

export default class Profesor extends Component {
    render() {
        const classes = this.props;
        return (
            <div class>

                <div class="wrapper">
                        {/*<!-- Sidebar  -->*/}
                        <nav id="sidebar">
                            <div class="sidebar-header">
                                <h3>Gamificacion</h3>
                                <strong>GF</strong>
                            </div>

                            <div>
                                <img class="logo" src=".\assets\logo\logos.png" alt="Gamificación"></img>
                            </div>

                            <ul class="list-unstyled components">
                                <li class="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                        <i class="fas fa-home"><GrHomeRounded /></i>
                                        Home 
                                    </a>
                                    <ul class="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <a href="#">Home 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-briefcase"><IoCalendarClearOutline /></i>
                                        Calendario
                                    </a>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                        <i class="fas fa-copy"><MdOutlineDashboard /></i>
                                        Dashboard
                                    </a>
                                    <ul class="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-image"><RiFlag2Line /></i>
                                        Goals
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-question"><CgSmartphoneChip /></i>
                                        Componentes
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"><IoChatbubbleEllipsesOutline /></i>
                                        Mensajes
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"><IoChatbubblesOutline /></i>
                                        Foro
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"><IoSearchOutline /></i>
                                        Buscar
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"> <IoSettingsOutline /></i>
                                        Configuración
                                    </a>
                                </li>
                            </ul>

                            <ul class="list-unstyled CTAs">
                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"></i>
                                        Usuario
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="fas fa-paper-plane"><IoExitOutline /></i>
                                        Salir
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/*<!-- Page Content  -->*/}
                </div>


                <Box className={ classes.containerBox }> first
                    <Box className={ classes.childBox0}>text123</Box>
                    <Box className={ classes.childBox0}>text123</Box>
                </Box>


                {/*<!-- jQuery CDN - Slim version (=without AJAX) -->*/}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                {/*<!-- Popper.JS -->*/}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
            



            </div>




        
        );
    }
}
