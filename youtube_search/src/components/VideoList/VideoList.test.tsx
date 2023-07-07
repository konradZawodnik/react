import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import VideoList from "./VideoList";

describe("Youtube Search VideoList", () => {
  it("WHEN videoList of YoutubeSearch is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(
      <VideoList
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
    // THEN
    expect(screen.getByTestId("youtubeSearchVideoList")).toBeInTheDocument();
  });
});
