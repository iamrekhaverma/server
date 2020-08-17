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
      initialRender: true,
    };
    this.handleApiCall = this.handleApiCall.bind(this);
  }
  handleApiCall(params) {
    fetchSpacex(params).then((json) => {
      this.setState({ spacex: json });
    });
  }
  componentDidMount() {
    const spacex = window.__SPACEX__ ? JSON.parse(window.__SPACEX__) : [];
    delete window.__SPACEX__;

    if (spacex.length == 0 || this.state.initialRender) {
      this.handleApiCall(this.props.location.search);
    }
    this.setState({ spacex, initialRender: false });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.handleApiCall(this.props.location.search);
    }
  }
  render() {
    const { history } = this.props;
    const { spacex } = this.state;
    return (
      <div className="row">
        <Header />
        <FiltersComponent history={history} />
        <div className="col-10 cards">
          {spacex && spacex.length > 0 ? (
            <Card spacex={spacex} />
          ) : (
            <div>Nothing found</div>
          )}
        </div>
        <Footer devName="Rekha" />
      </div>
    );
  }
}

export default Spacex;
