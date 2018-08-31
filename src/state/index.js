import { provideState, update, mergeIntoState } from "freactal";

import { generateTeams } from "../data/generate";
import { sleep } from "../helpers";

const wrapComponentWithState = provideState({
  initialState: () => ({
    counter: 0,
    teams: [],
    generateTeamsStatus: ""
  }),
  effects: {
    getState: () => state => state,
    initialize: async effects => {
      const state = await effects.getState();
      effects.setGenerateTeamsStatus("Generating team names");
      const teams = generateTeams(10);
      console.log("TEAMS", teams);
      await sleep(500);
      effects.setGenerateTeamsStatus("Finished generating team names");
      setTimeout(() => effects.setGenerateTeamsStatus("Done!"), 300);

      return Promise.resolve(state => {
        return { ...state, teams };
      });
    },
    addOne: () => state =>
      mergeIntoState({ counter: state.counter + 1 })(state),
    setGenerateTeamsStatus: update((state, val) => ({
      generateTeamsStatus: val
    }))
  }
});

export default wrapComponentWithState;
