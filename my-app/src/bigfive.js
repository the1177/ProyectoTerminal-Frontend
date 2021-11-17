import React from 'react';
import './components/bigfive.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Bigfive from "./components/bigfive.component"

function Big_five() {
  return (<Router>
    <div className="bigfive">

      <div className="Main-quiz">
          <Switch>
            <Route path="/bigfive" component={Bigfive} />
          </Switch>
        </div>
    </div></Router>
  );
}

export default Big_five;