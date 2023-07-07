import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ExchangeCounter from "./ExchangeCounter";

describe("ExchangeCounter component", () => {
  it("WHEN ExchangeCounter is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    const currencies = [
      {
        id: 0,
        name: "złotych",
        ratio: 1,
        title: "Wartość w złotówkach:",
      },
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "Wartość w dolarach:",
      },
      {
        id: 2,
        name: "euro",
        ratio: 4.25,
        title: "Wartość w euro:",
      },
      {
        id: 3,
        name: "frank",
        ratio: 3.8,
        title: "Wartość w frankach:",
      },
    ];
    const prices = {
      electricity: 0.51,
      petrol: 4.76,
      oranges: 3.79,
    };
    render(<ExchangeCounter currencies={currencies} prices={prices} />);
    // THEN
    expect(
      screen.getByTestId("currencyFormExchangeCounter"),
    ).toBeInTheDocument();
  });
});
