import React from "react";

import { fetchSpacex } from "./Api";
import { FiltersComponent } from "./components/filter";
import { Card } from "./components/cards";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

class Spacex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacex: props.spacex || [],
    };
  }
  componentDidMount() {
    const spacex = window.__SPACEX__ ? JSON.parse(window.__SPACEX__) : [];
    delete window.__SPACEX__;
    this.setState({ spacex });
    if (spacex.length == 0) {
      fetchSpacex().then((json) => {
        this.setState({ spacex: json });
      });
    }
  }
  render() {
    return (
      <div className="row">
        <Header />
        <FiltersComponent />
        <div className="col-10 cards">
          <Card spacex={this.state.spacex} />
        </div>
        <Footer devName="Rekha" />
      </div>
    );
  }
}

export default Spacex;
