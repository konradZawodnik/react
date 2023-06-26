import React from "react";
import { render } from "@testing-library/react";
import ButtonsContainer from "./ButtonsContainer";

test("renders learn react link", () => {
  const { getByText } = render(<ButtonsContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
