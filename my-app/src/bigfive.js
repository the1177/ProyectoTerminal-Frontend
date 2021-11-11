import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Bigfive from "./components/encuesta.component"

function App() {
  return (<Router>
    <div className="App">

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/bigfive" component={Bigfive} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;