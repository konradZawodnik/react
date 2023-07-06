import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayingView from "./PlayingView";

describe("Youtube Search PlayingView", () => {
  it("should render playingView of YoutubeSearch with selected testId", () => {
    render(
      <PlayingView
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
        video={null}
      />
    );
    expect(screen.getByTestId("youtubeSearchPlayingView")).toBeInTheDocument();
  });
});
