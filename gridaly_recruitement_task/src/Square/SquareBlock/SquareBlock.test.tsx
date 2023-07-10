import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SquareBlock from "./SquareBlock";

describe("Square", () => {
  it("WHEN SquareBlock is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<SquareBlock />);
    // THEN
    expect(screen.getByTestId("squareBlockContainer")).toBeInTheDocument();
  });

  it("WHEN SquareBlock has been clicked THEN it should have squareBlockAfterFirstClick className", () => {
    // WHEN
    render(<SquareBlock />);
    fireEvent.click(screen.getByTestId("squareBlockContainer"));
    // THEN
    expect(screen.getByTestId("squareBlockContainer")).toHaveClass(
      "squareBlockAfterFirstClick",
    );
  });

  it("WHEN SquareBlock has been clicked three times THEN it should have backgroundColor: #ff0000", () => {
    // WHEN
    render(<SquareBlock />);
    fireEvent.click(screen.getByTestId("squareBlockContainer"));
    fireEvent.click(screen.getByTestId("squareBlockContainer"));
    fireEvent.click(screen.getByTestId("squareBlockContainer"));
    // THEN
    expect(screen.getByTestId("squareBlockContainer")).toHaveStyle(
      "backgroundColor: #ff0000",
    );
  });

  it("WHEN SquareBlock is rendered, and we are waiting three seconds THEN it should have squareBlock className", async () => {
    // WHEN
    render(<SquareBlock />);
    await new Promise((r) => setTimeout(r, 3000));
    // THEN
    expect(screen.getByTestId("squareBlockContainer")).toHaveClass(
      "squareBlock",
    );
  });
});
