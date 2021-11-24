import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Quiz from "./components/encuesta.component"

function Quiz() {
  return (<Router>
    <div className="Quiz">

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Quiz;