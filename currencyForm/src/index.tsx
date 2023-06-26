import { createRoot } from "react-dom/client";
import ExchangeCounter from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<ExchangeCounter />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();