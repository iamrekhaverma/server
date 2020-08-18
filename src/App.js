import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Spacex from "./Spacex";
import "./sass/main.scss";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Spacex} />
    </Switch>
  </Router>
);

if (!document.getElementById("app").childNodes.length) {
  ReactDOM.render(
    <App />,
    document.getElementById("app")
  );
} else {
  ReactDOM.hydrate(
    <App />,
    document.getElementById("app")
  );
}
