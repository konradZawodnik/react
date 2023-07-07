import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select component", () => {
  it("WHEN Select is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<Select handleSelect={jest.fn()} product={"testProduct"} />);
    // THEN
    expect(screen.getByTestId("currencyFormSelect")).toBeInTheDocument();
  });
});
