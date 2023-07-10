import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Square from "./Square";

describe("Square", () => {
  it("WHEN Square is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<Square />);
    // THEN
    expect(screen.getByTestId("squareContainer")).toBeInTheDocument();
  });
});
