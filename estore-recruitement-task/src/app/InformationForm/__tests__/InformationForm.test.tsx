import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InformationForm from "../InformationForm";
import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("react-quill", () => {
  const MockComponent = () => <div data-testid="react-quill" />;
  MockComponent.displayName = "ReactQuill";
  return MockComponent;
});

jest.mock("react-dnd", () => ({
  useDrag: jest
    .fn()
    .mockImplementation(() => [jest.fn(), jest.fn(), jest.fn()]),
  useDrop: jest
    .fn()
    .mockImplementation(() => [jest.fn(), jest.fn(), jest.fn()]),
}));

describe("InformationForm", () => {
  it("should match snapshot", () => {
    const { container } = render(<InformationForm />);
    expect(container).toMatchSnapshot();
  });
  
  it("should render the form correctly", () => {
    render(<InformationForm />);

    expect(
      screen.getByPlaceholderText(/Enter product title/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Product Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Bullets/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Keywords/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it("should add a bullet point", async () => {
    render(<InformationForm />);

    const addBulletButton = screen.getByText("Add Bullet");
    await userEvent.click(addBulletButton);

    expect(screen.getByPlaceholderText("Bullet point #1")).toBeInTheDocument();
  });

  it("should modify a bullet point", async () => {
    render(<InformationForm />);

    const addBulletButton = screen.getByText("Add Bullet");
    await userEvent.click(addBulletButton);

    const bulletInput = screen.getByPlaceholderText("Bullet point #1");
    await userEvent.type(bulletInput, "New Bullet Point");

    expect(bulletInput).toHaveValue("New Bullet Point");
  });

  it("should remove a bullet point", async () => {
    render(<InformationForm />);

    const addBulletButton = screen.getByText("Add Bullet");
    await userEvent.click(addBulletButton);

    const removeButton = screen.getByText("Remove");
    await userEvent.click(removeButton);

    await waitFor(() => {
      expect(
        screen.queryByPlaceholderText("Bullet point #1")
      ).not.toBeInTheDocument();
    });
  });

  it("should submit the form", async () => {
    render(<InformationForm />);
    const addBulletButton = screen.getByText("Add Bullet");
    const consoleLogSpy = jest.spyOn(console, "log");

    await userEvent.type(
      screen.getByPlaceholderText("Enter product title"),
      "Test Product"
    );
    await userEvent.click(addBulletButton);
    await userEvent.type(
      screen.getByPlaceholderText("Bullet point #1"),
      "Bullet 1"
    );
    await userEvent.click(addBulletButton);
    await userEvent.type(
      screen.getByPlaceholderText("Bullet point #2"),
      "Bullet 2"
    );

    const submitButton = screen.getByText("Submit");
    await waitFor(() => userEvent.click(submitButton));

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith({
        bullets: ["Bullet 1", "Bullet 2"],
        description: undefined,
        keywords: undefined,
        title: "Test Product",
      });
      consoleLogSpy.mockRestore();
    });
  });

  it("should allow creating, selecting and removing options in CreatableSelect", async () => {
    render(<InformationForm />);

    const creatableSelect = screen.getByText(/Select.../i);
    expect(creatableSelect).toBeInTheDocument();

    await userEvent.type(creatableSelect, "New Keyword{enter}");

    const keywordElement = await screen.findByText("New Keyword");
    expect(keywordElement).toBeInTheDocument();

    const removeKeywordButton = screen
      .getByText("New Keyword").nextElementSibling;

    if (removeKeywordButton) {
      await userEvent.click(removeKeywordButton);
      expect(screen.queryByText("New Keyword")).not.toBeInTheDocument();
    } else {
      throw new Error("Remove button not found");
    }
  });
});
