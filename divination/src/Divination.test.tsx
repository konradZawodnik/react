import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Divination from "./Divination";

describe("Divination", () => {
  it("WHEN List is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<Divination />);
    // THEN
    expect(screen.getByTestId("divinationContainer")).toBeInTheDocument();
  });

  it("WHEN input value is changed, add button is clicked, and show button is clicked THEN new divination should be visible", () => {
    // WHEN
    const divinationContainer = render(<Divination />);
    const newDivination = "Now wróżba";
    const divinationInput =
      divinationContainer.getByPlaceholderText("Wpisz nową wróżbę");
    const addDivinationButton =
      divinationContainer.getByLabelText("Dodaj wróżbę");
    const showDivinationButton =
      divinationContainer.getByLabelText("Zobacz wróżbę");
    waitFor(() =>
      fireEvent.change(divinationInput, { target: { value: newDivination } }),
    );
    waitFor(() => fireEvent.click(addDivinationButton));
    waitFor(() => fireEvent.click(showDivinationButton));

    // THEN
    waitFor(() =>
      expect(screen.getByTestId("divinationContainer")).toHaveTextContent(
        newDivination,
      ),
    );
  });

  it("WHEN input value is empty, add button is clicked, and show button is clicked THEN alert should be visible", () => {
    // WHEN
    const divinationContainer = render(<Divination />);
    const newDivination = "";
    const divinationInput =
      divinationContainer.getByPlaceholderText("Wpisz nową wróżbę");
    const addDivinationButton =
      divinationContainer.getByLabelText("Dodaj wróżbę");
    const showDivinationButton =
      divinationContainer.getByLabelText("Zobacz wróżbę");
    waitFor(() =>
      fireEvent.change(divinationInput, { target: { value: newDivination } }),
    );
    waitFor(() => fireEvent.click(addDivinationButton));
    waitFor(() => fireEvent.click(showDivinationButton));

    // THEN
    waitFor(() => {
      const alertContainer = divinationContainer.getByRole("alert");
      expect(alertContainer).toBeInTheDocument();
      expect(alertContainer).toHaveTextContent("Napisz jakąś wróżbę");
    });
  });
});
