import React, { Component } from "react";
import { Menu, Segment, Container } from "semantic-ui-react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent, location }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: props.className + (isCurrent ? " is-active" : "")
      };
    }}
  />
);

class HeaderNav extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary size="large">
          <Container>
            <Menu.Item>
              <h3>
                <i>Hockey League</i>
              </h3>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    );
  }
}

export default HeaderNav;
