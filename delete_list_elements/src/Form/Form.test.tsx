import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Form from "./Form";

describe("Form component", () => {
  it("WHEN Form is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(
      <Form addItem={jest.fn()} setValue={jest.fn()} value={"testValue"} />,
    );
    // THEN
    expect(screen.getByTestId("deleteListElementsForm")).toBeInTheDocument();
  });

  it("WHEN input value in form has been changed THEN it should have called setValue, addItem function and set selected value", () => {
    // WHEN
    const addItem = jest.fn();
    const setValue = jest.fn();
    const formContainer = render(
      <Form addItem={addItem} setValue={setValue} />,
    );
    const addButton = formContainer.getByLabelText("Dodaj");
    const newInputValue = "newTestValue";
    const formInput = formContainer.getByPlaceholderText("Dodaj członka");
    waitFor(() =>
      fireEvent.change(formInput, { target: { value: newInputValue } }),
    );
    waitFor(() => fireEvent.click(addButton));
    // THEN
    expect(setValue).toHaveBeenCalled();
    expect(addItem).toHaveBeenCalled();
    expect(screen.getByPlaceholderText("Dodaj członka")).toHaveValue(
      newInputValue,
    );
  });
});
