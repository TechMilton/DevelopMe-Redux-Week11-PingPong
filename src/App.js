import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";

import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Settings from "./components/Settings";

import history from "./history";

const App = ({ handleP1Increment, handleP2Increment, winner }) => (
  <Router history={history}>
    <>
      <header className="jumbotron mt-4 mb-0">
        <h1><Link to="/">Pong Ping Pong Ping </Link></h1>
      </header>

      <Switch>
        <Route exact path="/">
          <p><Link to="/settings">Settings</Link></p>
          <div className="row mb-4">
            <Player1 handleClick={handleP1Increment} />
            <Player2 handleClick={handleP2Increment} />
          </div>
          <Winner winner={winner} />
          <hr />
          <Reset />
          {/* Insert restart game button here */}
        </Route>

        <Route exact path="/settings" component={Settings} />
        <p>Nothing Found.</p>

      </Switch>
    </>
  </Router >
);

export default App;