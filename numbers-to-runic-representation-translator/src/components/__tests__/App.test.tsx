import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  let originalCreateObjectURL: (obj: Blob | MediaSource) => string;

  beforeAll(() => {
    originalCreateObjectURL = URL.createObjectURL;
    URL.createObjectURL = jest.fn(() => "mocked-url");
  });

  afterAll(() => {
    URL.createObjectURL = originalCreateObjectURL;
  });

  it("should match snapshot", () => {
    const counter = render(<App />);
    expect(counter).toMatchSnapshot();
  });

  it("renders correctly", () => {
    render(<App />);
    expect(
      screen.getByText(/Decimal to Runic Translator/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter a number/i)).toBeInTheDocument();
  });

  it("should allow input between 1 and 9999", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter a number/i);

    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveValue(0);
    expect(input).toBeInvalid();

    fireEvent.change(input, { target: { value: "1" } });
    expect(input).toHaveValue(1);
    expect(input).toBeValid();

    fireEvent.change(input, { target: { value: "10000" } });
    expect(input).toHaveValue(10000);
    expect(input).toBeInvalid();

    fireEvent.change(input, { target: { value: "9999" } });
    expect(input).toHaveValue(9999);
    expect(input).toBeValid();
  });

  it("should trigger the translation on valid input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(
      "Enter a number"
    ) as HTMLInputElement;
    const button = screen.getByText("Translate");

    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(button);

    const runicOutput = screen.getByText(/Runic Representation:/);
    expect(runicOutput).toBeInTheDocument();

    const downloadButton = screen.getByText("Download SVG");
    expect(downloadButton).toBeInTheDocument();
  });

  it("should generate an SVG based on runic characters", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter a number");
    const submitButton = screen.getByText("Translate");

    fireEvent.change(input, { target: { value: "456" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const svg = document.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveTextContent("ᚣᚤᚥ");
    });
  });

  it("should trigger download when the download button is clicked", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter a number");
    const submitButton = screen.getByText("Translate");

    fireEvent.change(input, { target: { value: "789" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const downloadButton = screen.getByText("Download SVG");
      fireEvent.click(downloadButton);
      expect(global.URL.createObjectURL).toHaveBeenCalled();
    });
  });
});
