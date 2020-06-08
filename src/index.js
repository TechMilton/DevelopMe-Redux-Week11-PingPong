import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  p1Serving: true,
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const serving = state => ({ ...state, p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving });


const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1": return serving(player1(state));
    case "PLAYER2": return serving(player2(state));
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: "PLAYER1" });
store.dispatch({ type: "PLAYER2" });
store.dispatch({ type: "RESET" })


const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <App
      player1={state.player1}
      handleP1Increment={() => store.dispatch({ type: "PLAYER1" })}
      player2={state.player2}
      handleP2Increment={() => store.dispatch({ type: "PLAYER2" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
      p1Serving={state.p1Serving} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();