import React from "react";
import { Menu, Segment, Container } from "semantic-ui-react";
import { Link } from "@reach/router";

const HeaderNav = () => (
  <Segment inverted>
    <Menu inverted pointing secondary size="large">
      <Container>
        <Menu.Item>
          <h3>
            <i>Hockey League</i>
          </h3>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/standings">Standings</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/stats">Stats</Link>
        </Menu.Item>
      </Container>
    </Menu>
  </Segment>
);

export default HeaderNav;
