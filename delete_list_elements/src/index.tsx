import { createRoot } from "react-dom/client";
import List from "./List";

import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<List />);
