import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Contact from "./Contact";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Music from "./Music";

class Album extends Component {
  render() {
    const panes = [
      {
        menuItem: {
          as: NavLink,
          id: "tab1",
          content: "Home",
          to: "/",
          exact: true,
          key: "home"
        },
        pane: (
          <Route
            path="/"
            exact
            render={() => (
              <Tab.Pane>
               <Homepage></Homepage>
              </Tab.Pane>
            )}
          />
        )
      },
      {
        menuItem: {
          as: NavLink,
          id: "contact",
          content: "Contact Form",
          to: "/contact",
          exact: true,
          key: "contact"
        },
        pane: (
          <Route
            path="/contact"
            exact
            render={() => (
              <Tab.Pane>
              <Contact></Contact>
              </Tab.Pane>
            )}
          />
        )
      },
      {
        menuItem: {
          as: NavLink,
          id: "music",
          content: "MUSIC",
          to: "/music",
          exact: true,
          key: "music"
        },
        pane: (
          <Route
            path="/music"
            exact
            render={() => (
              <Tab.Pane>
              <Music></Music>
              </Tab.Pane>
            )}
          />
        )
      },
    ];

    return (
      <Router>
        <div className="App" style={{ margin: "50px" }}>
          <Switch>
            <Tab renderActiveOnly={false} activeIndex={-1}  menu={{ fluid: true, vertical: true }} style={{
      backgroundColor: "Aqua",}}
    menuPosition="left" panes={panes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Album;
