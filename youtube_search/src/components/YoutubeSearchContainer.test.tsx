import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import YoutubeSearchContainer from "./YoutubeSearchContainer";

describe("Youtube Search Container", () => {
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

  it("should render YoutubeSearchContainer with selected testId", () => {
    render(
      <BrowserRouter>
        <YoutubeSearchContainer />
      </BrowserRouter>
    );
    expect(screen.getByTestId("youtubeSearchContainer")).toBeInTheDocument();
  });
});
