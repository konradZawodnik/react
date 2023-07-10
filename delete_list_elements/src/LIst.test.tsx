import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import List from "./List";

describe("List component", () => {
  it("WHEN List is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<List />);
    // THEN
    expect(
      screen.getByTestId("deleteListElementsListContainer"),
    ).toBeInTheDocument();
  });
});
