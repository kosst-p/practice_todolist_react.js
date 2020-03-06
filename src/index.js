import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App.js";
import * as serviceWorker from "./serviceWorker";

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);

serviceWorker.unregister();
