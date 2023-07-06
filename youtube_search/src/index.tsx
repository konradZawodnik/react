import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import YoutubeSearchContainer from "./components/YoutubeSearchContainer";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <YoutubeSearchContainer />
  </BrowserRouter>,
);
