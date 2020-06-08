import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./components/store";


const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <App
      player1={state.player1}
      handleP1Increment={() => store.dispatch({ type: "PLAYER1" })}
      player2={state.player2}
      handleP2Increment={() => store.dispatch({ type: "PLAYER2" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
      p1Serving={state.p1Serving}
      winner={state.winner} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();