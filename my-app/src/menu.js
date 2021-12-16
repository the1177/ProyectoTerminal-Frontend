import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

// Componente para el menu topbar del inicio
export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Sistema de Gamificación</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Registrarse</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dash"}>Dash</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}