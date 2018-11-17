import React, { Component } from "react";
import { injectState } from "freactal";

class Home extends Component {
  render() {
    const { generateTeamsStatus, teams } = this.props.state;

    return (
      <>
        <h3>Home</h3>
        <hr />
        <p>{generateTeamsStatus}</p>
        <ul>
          {teams.map(t => {
            return <li key={t.teamName}>{t.teamName}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default injectState(Home);
