import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Cash from "./Cash";

describe("Cash component", () => {
  it("WHEN Cash is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<Cash cash={"5"} price={2.5} ratio={1} title={"Test Cash"} />);
    // THEN
    expect(screen.getByTestId("currencyFormCash")).toBeInTheDocument();
  });
});
