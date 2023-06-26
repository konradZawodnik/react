import { createRoot } from "react-dom/client";
import Square from "./Square/Square";

import "./index.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Square />);
