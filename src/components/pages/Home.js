import React, { Component } from "react";
import { injectState } from "freactal";

class Home extends Component {
  render() {
    console.log("HOME", this.props);

    return <h3>Home</h3>;
  }
}

export default injectState(Home);
