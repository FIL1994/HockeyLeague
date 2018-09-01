import _ from "lodash";
import moment from "moment";
import faker from "faker";
import { Chance } from "chance";

import Team from "../models/Team";
import { getTeamName } from "./teamNames";
import { getUniq } from "../helpers";

const CHANCE = new Chance(moment().unix());

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

  const abbreviations = generateAbbreviations(teams.map(t => t.teamName));
  teams.forEach((t, index) => {
    t.abbreviation = abbreviations[index];
  });

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

function generateAbbreviations(teamNames) {
  let abbreviations = [];
  teamNames.forEach(teamName => {
    abbreviations.push(getAbbreviation(abbreviations, teamName));
  });
  return abbreviations;
}

function getAbbreviation(abbreviations, teamName) {
  let tryNum = 0;
  let teamNameWords = teamName.split(" ");

  let abbreviation;
  do {
    if (tryNum === 0) {
      if (teamNameWords.length > 2) {
        abbreviation =
          teamNameWords[0].charAt(0) +
          teamNameWords[1].charAt(0) +
          teamNameWords[2].charAt(0);
      } else {
        const wordNum = _.random(0, 1);
        abbreviation =
          teamNameWords[0].charAt(0) +
          teamNameWords[1].charAt(0) +
          teamNameWords[wordNum].charAt(
            _.random(1, teamNameWords[wordNum].length - 1)
          );
      }
    } else if (tryNum === 1) {
      if (teamNameWords.length > 2) {
        const wordNum = _.random(0, teamNameWords.length - 1);
        abbreviation =
          teamNameWords[0].charAt(0) +
          teamNameWords[1].charAt(0) +
          teamNameWords[wordNum].charAt(
            _.random(1, teamNameWords[wordNum].length - 1)
          );
      } else {
        abbreviation = "";
        for (let j = 0; j < teamNameWords.length; j++) {
          if (abbreviation.length > 2) {
            break;
          }
          abbreviation += teamNameWords[j].charAt(
            _.random(0, teamNameWords[j].length - 1)
          );
        }
      }
    } else {
      abbreviation =
        teamNameWords[0].charAt(0) +
        teamNameWords[1].charAt(0) +
        tryNum.toString().charAt(0);
    }
    abbreviation = _.toUpper(abbreviation);
    tryNum++;
  } while (abbreviations.indexOf(abbreviation) !== -1);

  return abbreviation;
}

export { generateTeams };
