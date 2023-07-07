import { createRoot } from "react-dom/client";
import ExchangeCounter from "./ExchangeCounter";

import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<ExchangeCounter />);
