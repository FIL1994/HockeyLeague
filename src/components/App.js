import React, { Component, Fragment } from "react";
import { Router } from "@reach/router";

import HeaderNav from "./HeaderNav";
import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNav />
        <main>
          <Router>
            <Home path="/" />
            <Standings path="/standings" />
            <Stats path="/stats" />
          </Router>
        </main>
      </Fragment>
    );
  }
}

export default App;
