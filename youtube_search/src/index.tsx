import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
