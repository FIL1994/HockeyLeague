import React, { Component, Fragment } from "react";
import { injectState } from "freactal";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h3>Home</h3>
        <hr />
      </Fragment>
    );
  }
}

export default injectState(Home);
