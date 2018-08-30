import _ from "lodash";
import moment from "moment";
import faker from "faker";
import { Chance } from "chance";
const CHANCE = new Chance(moment().unix());

window.faker = faker;

const generateTeams = count => {
  let teams = [],
    playerID = 0;

  const teamCities = generateCities(count);
};

function generateCities(count) {
  function getUniqCity(cities) {
    let city = faker.address.city();
    if (cities.includes(city)) {
      city = getUniqCity(cities);
    }
    return city;
  }

  let cities = [];
  for (let i = 0; i < count; i++) {
    cities.push(getUniqCity(cities));
  }
  return cities;
}

export { generateTeams };
