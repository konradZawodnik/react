import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../Counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("should match snapshot", () => {
    const counter = render(<Counter />);
    expect(counter).toMatchSnapshot();
  });

  it("renders initial count", () => {
    expect(screen.getByTestId("count-text")).toHaveTextContent("Count: 0");
  });

  it("increments the count when the Increment button is clicked", () => {
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);

    expect(screen.getByTestId("count-text")).toHaveTextContent("Count: 1");
  });

  it("decrements the count when the Decrement button is clicked", () => {
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);

    expect(screen.getByTestId("count-text")).toHaveTextContent("Count: 0");
  });

  it("handles multiple increments and decrements correctly", () => {
    const incrementButton = screen.getByText(/increment/i);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByTestId("count-text")).toHaveTextContent("Count: 1");
  });
});
