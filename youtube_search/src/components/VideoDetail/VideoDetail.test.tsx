import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import VideoDetail from "./VideoDetail";

describe("Youtube Search VideoDetail", () => {
  it("WHEN videoDetail of YoutubeSearch is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    render(
      <VideoDetail
        video={{
          snippet: {
            description: "Test description",
            title: "Test title",
          },
          id: {
            channelId: "123",
            videoId: "123456789",
          },
        }}
      />,
    );
    // THEN
    expect(screen.getByTestId("youtubeSearchVideoDetail")).toBeInTheDocument();
  });

  it("wHEN videoDetail is rendered without channelId THEN it should have videoSrc without channelId, but with videoId", () => {
    const videoId = "123456789";
    const channelId = "";
    render(
      <VideoDetail
        video={{
          snippet: {
            description: "Test description",
            title: "Test title",
          },
          id: {
            channelId: channelId,
            videoId: videoId,
          },
        }}
      />,
    );
    expect(screen.getByTitle("Video player")).not.toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${channelId}`,
    );
    expect(screen.getByTitle("Video player")).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}`,
    );
  });
});
