import React from "react";
import { injectState } from "freactal";

const Home = props => {
  const { generateTeamsStatus, teams } = props.state;
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
};

export default injectState(Home);
