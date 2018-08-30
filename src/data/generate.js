import _ from "lodash";
import moment from "moment";
import faker from "faker";
import { Chance } from "chance";

import { getTeamName } from "./teamNames";
import { getUniq } from "../helpers";

const CHANCE = new Chance(moment().unix());

window.faker = faker;

const generateTeams = count => {
  let teams = [],
    playerID = 0;

  const teamCities = generateCities(count);
  const teamNames = generateTeamNames(count);

  console.log("CITIES", teamCities, teamNames);
};

function generateCities(count) {
  let cities = [];
  for (let i = 0; i < count; i++) {
    cities.push(getUniq(cities, faker.address.city));
  }
  return cities;
}

function generateTeamNames(count) {
  let teamNames = [];
  for (let i = 0; i < count; i++) {
    teamNames.push(getUniq(teamNames, getTeamName));
    console.log(getTeamName());
  }
  return teamNames;
}

export { generateTeams };
