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
  console.log("CITIES", teamCities);
};

function generateCities(count) {
  let cities = [];
  for (let i = 0; i < count; i++) {
    cities.push(getUniq(cities, faker.address.city));
  }
  return cities;
}

export { generateTeams };
