import React, { Component, Fragment } from "react";
import { injectState } from "freactal";

let AddButton = props => {
  return <button onClick={props.effects.addOne}>Add</button>;
};
AddButton = injectState(AddButton);

let Counter = props => {
  return <div>{props.state.counter}</div>;
};
Counter = injectState(Counter);

class Home extends Component {
  render() {
    console.log("HOME", this.props);

    return (
      <Fragment>
        <h3>Home</h3>
        <hr />
        <AddButton />
        <Counter />
        {this.props.state.hello}
      </Fragment>
    );
  }
}

export default injectState(Home);
