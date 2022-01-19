import { Fragment } from "react";

import SquareBlock from "./SquareBlock/SquareBlock";

import './Square.css';

const App: React.FC = () => (
  <Fragment>
    <header className="header"></header>
    <SquareBlock />
    <footer className="footer"></footer>
  </Fragment>
);

export default App;
