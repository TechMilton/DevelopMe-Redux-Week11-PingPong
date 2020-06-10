import React from "react";

import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";

const App = ({ handleP1Increment, handleP2Increment, winner }) => (
  <React.Fragment>

    <header className="jumbotron mt-4 mb-0">
      <h1>Pong Ping Pong Ping</h1>
    </header>

    <div className="row mb-4">
      <Player1 handleClick={handleP1Increment} />
      <Player2 handleClick={handleP2Increment} />
    </div>

    <Winner winner={winner} />

    <hr />
    <Reset />

  </React.Fragment >
);

export default App;