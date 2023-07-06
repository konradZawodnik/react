import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VideoList from "./VideoList";

describe("Youtube Search VideoList", () => {
  it("should render videoList of YoutubeSearch with selected testId", () => {
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
      />
    );
    expect(screen.getByTestId("youtubeSearchVideoList")).toBeInTheDocument();
  });
});
