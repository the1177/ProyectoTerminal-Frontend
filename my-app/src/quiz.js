import React from 'react';
import './components/quiz.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Quiz from "./components/encuesta.component"

function Quizz() {
  return (<Router>
    <div className="Quiz">      
        <div className="Main-quiz">
          <Switch>
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </div>
     
    </div></Router>
  );
}

export default Quizz;