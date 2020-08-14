import React from "react";
import ReactDOM from "react-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import Spacex from "./Spacex";
import "./sass/main.scss";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Spacex} />
        </Switch>
      </Router>
    );
  }
}

if (!document.getElementById("app").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("app"));
} else {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}