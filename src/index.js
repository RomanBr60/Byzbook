import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";
import { AppError } from "./components/AppError";
import * as serviceWorker from "./serviceWorker";
import "./styles/style.css";
import "bootstrap/scss/bootstrap.scss";
import "./sass_styles/setup.scss";
import { BrowserRouter } from "react-router-dom";
import * as Icons from "react-icons";
//console.clear();
serviceWorker.unregister();

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppError>
      <Provider store={store}>
        <App />
      </Provider>
    </AppError>
  </BrowserRouter>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
