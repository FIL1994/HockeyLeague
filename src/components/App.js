import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";

import wrapComponentWithState from "../state";
import HeaderNav from "./HeaderNav";
import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";

const App = () => (
  <>
    <HeaderNav />
    <main>
      <Router>
        <Home path="/" />
        <Standings path="/standings" />
        <Stats path="/stats" />
        <Redirect noThrow from="*" to="/" />
      </Router>
    </main>
  </>
);

export default wrapComponentWithState(App);
