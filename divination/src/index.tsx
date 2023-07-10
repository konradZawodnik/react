import { createRoot } from "react-dom/client";
import Divination from "./Divination";

import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<Divination />);
