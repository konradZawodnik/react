import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Youtube Search Header", () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  it("WHEN header of YoutubeSearch is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(<Header handleFormSubmit={jest.fn()} />);
    // THEN
    expect(screen.getByTestId("youtubeSearchHeader")).toBeInTheDocument();
  });
});
