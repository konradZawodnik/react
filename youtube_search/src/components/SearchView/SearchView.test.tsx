import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SearchView from "./SearchView";

describe("Youtube Search SearchView", () => {
  it("WHEN searchView of YoutubeSearch is rendered THEN it should be rendered with selected testId", () => {
    render(
      <SearchView
        handleVideoSelect={jest.fn()}
        videos={[
          {
            snippet: {
              description: "Test description",
              title: "Test title",
              thumbnails: {
                medium: {
                  url: "https://youtube.com",
                },
              },
            },
            id: {
              channelId: "123",
              videoId: "123456789",
            },
          },
        ]}
      />,
    );
    expect(screen.getByTestId("youtubeSearchView")).toBeInTheDocument();
  });
});
