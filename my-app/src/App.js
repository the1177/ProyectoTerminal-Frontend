import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Imports para rutas de componentes
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dash from "./components/dash.component";
import Profesor from "./components/profesor.component";

// Agregar en el Switch nuevas rutas de componentes
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/dash" component={Dash} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;