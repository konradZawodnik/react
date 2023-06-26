import { Fragment } from "react";

import SquareBlock from "./SquareBlock/SquareBlock";

import "./Square.scss";

const Square: React.FC = () => (
  <Fragment>
    <header className="container"></header>
    <SquareBlock />
    <footer className="container"></footer>
  </Fragment>
);

export default Square;
