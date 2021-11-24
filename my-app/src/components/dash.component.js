import React, { Component } from "react";
import './dash.css';


export default class Dash extends Component {
    render() {
        return (
        <div class>

            <div class="wrapper">
                {/*<!-- Sidebar  -->*/}
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Gamificacion</h3>
                        <strong>GF</strong>
                    </div>

                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <i class="fas fa-home"></i>
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
                                <i class="fas fa-briefcase"></i>
                                Calendario
                            </a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <i class="fas fa-copy"></i>
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
                                <i class="fas fa-image"></i>
                                Goals
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-question"></i>
                                Componentes
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
                                Mensajes
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
                                Foro
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
                                Archivos
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
                                Buscar
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
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
                                <i class="fas fa-paper-plane"></i>
                                Salir
                            </a>
                        </li>
                    </ul>
                </nav>

                {/*<!-- Page Content  -->*/}
            </div>

            {/*<!-- jQuery CDN - Slim version (=without AJAX) -->*/}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            {/*<!-- Popper.JS -->*/}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
           



        </div>
        );
    }
}