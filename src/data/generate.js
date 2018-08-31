import _ from "lodash";
import moment from "moment";
import faker from "faker";
import { Chance } from "chance";

import Team from "../models/Team";
import { getTeamName } from "./teamNames";
import { getUniq } from "../helpers";

const CHANCE = new Chance(moment().unix());

window.faker = faker;

const generateTeams = count => {
  let teams = [],
    playerID = 0;

  const cities = generateCities(count);
  const names = generateTeamNames(count);

  for (let i = 0; i < count; i++) {
    teams.push(
      new Team({
        city: cities[i],
        name: names[i]
      })
    );
  }

  return teams;
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
  }
  return teamNames;
}

export { generateTeams };
