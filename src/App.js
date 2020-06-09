import React from "react";

import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";

const App = ({ handleP1Increment, handleP2Increment, handleReset, winner }) => (
  <React.Fragment>
    <header className="jumbotron mt-4 mb-0">
      <h1>Ping Pong</h1>
    </header>

    <div className="row mb-4">
      <Player1 handleClick={handleP1Increment} />
      <Player2 handleClick={handleP2Increment} />
    </div>

    <Winner winner={winner} />

    <hr />

    <button className="btn btn-danger" onClick={handleReset}>Reset</button>
  </React.Fragment >
);

export default App;