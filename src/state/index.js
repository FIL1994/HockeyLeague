import { provideState, update, mergeIntoState } from "freactal";

import { generateTeams } from "../data/generate";
import { sleep } from "../helpers";

const wrapComponentWithState = provideState({
  initialState: () => ({
    counter: 0,
    firstName: "Bob",
    lastName: "Smith",
    hello: "hey"
  }),
  effects: {
    getState: () => state => state,
    initialize: async effects => {
      const state = await effects.getState();
      await sleep(100);

      console.log("teams from init", generateTeams(10));

      return Promise.resolve(state => {
        // console.log("INIT", effects, state);
        return { ...state, hello: "hi" };
      });
    },
    addOne: () => state =>
      mergeIntoState({ counter: state.counter + 1 })(state),
    setFirstName: update((state, val) => ({ firstName: val })),
    setLastName: update((state, val) => ({ lastName: val }))
  },
  computed: {
    fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
    greeting: ({ fullName }) => `Hi, ${fullName}, and welcome!`
  }
});

export default wrapComponentWithState;