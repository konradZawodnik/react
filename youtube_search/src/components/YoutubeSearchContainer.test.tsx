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

  it("WHEN YoutubeSearchContainer is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(
      <BrowserRouter>
        <YoutubeSearchContainer />
      </BrowserRouter>,
    );
    // THEN
    expect(screen.getByTestId("youtubeSearchContainer")).toBeInTheDocument();
  });
});
