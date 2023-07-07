import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("WHEN Input is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(
      <Input
        amount={"5.00 EUR"}
        handleChange={jest.fn()}
        insertSuffix={jest.fn()}
        product={"electricity"}
      />,
    );
    // THEN
    expect(screen.getByTestId("currencyFormInput")).toBeInTheDocument();
  });
});
