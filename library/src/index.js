import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
