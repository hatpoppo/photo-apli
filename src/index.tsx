import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PhotoApp from "./component/PhotoApp";
import { initializeIcons } from "@uifabric/icons";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { FilterTypes, Store } from "./store";
import * as serviceWorker from "./serviceWorker";
import { reducer } from "./reducer";

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));
initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <PhotoApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
