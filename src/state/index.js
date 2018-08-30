import { provideState, update, mergeIntoState } from "freactal";

const wrapComponentWithState = provideState({
  initialState: () => ({ counter: 0, firstName: "Bob", lastName: "Smith" }),
  effects: {
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
