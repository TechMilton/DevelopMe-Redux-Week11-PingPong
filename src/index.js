import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./data/store";

import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App
      handleP1Increment={() => store.dispatch({ type: "PLAYER1" })}
      handleP2Increment={() => store.dispatch({ type: "PLAYER2" })}
      handleReset={() => store.dispatch({ type: "RESET" })} />
  </Provider>,
  document.getElementById('root')
);
