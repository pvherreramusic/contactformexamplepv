import React from "react";
import { Grid, Image, Feed } from "semantic-ui-react";
import Iframe from "react-iframe";
import "./Homepage.css";

const Homepage = () => (
  <div className="Home">
    <div className="lander">
      <h1>Welcome to PV HERRERA Music</h1>

      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              src="https://i.ibb.co/WHWdkHK/Screen-Shot-2020-02-24-at-9-32-32-AM.png"
              width="520px"
              height="320px"
            />
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>

          <Grid.Column width={6}>
          <Iframe
            url="https://open.spotify.com/embed/album/1vuK4iUXKdWnwqmpIf7XIs"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

export default Homepage;
