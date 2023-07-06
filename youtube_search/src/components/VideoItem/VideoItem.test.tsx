import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import VideoItem from "./VideoItem";

describe("Youtube Search VideoItem", () => {
  it("should render videoItem of YoutubeSearch with selected testId", () => {
    render(
      <VideoItem
        handleVideoSelect={jest.fn()}
        video={{
          snippet: {
            description: "Test description",
            title: "Test title",
            thumbnails: {
              medium: {
                url: "https://youtube.com",
              },
            },
          },
        }}
      />
    );
    expect(screen.getByTestId("youtubeSearchVideoItem")).toBeInTheDocument();
  });

  it("WHEN YoutubeSearch videoItem is rendered and item is clicked THEN handleVideoSelect function should be called", () => {
    const handleVideoSelect = jest.fn();
    render(
      <VideoItem
        handleVideoSelect={handleVideoSelect}
        video={{
          snippet: {
            description: "Test description",
            title: "Test title",
            thumbnails: {
              medium: {
                url: "https://youtube.com",
              },
            },
          },
        }}
      />
    );
    const videoItemContainer = screen.getByTestId("youtubeSearchVideoItem");
    fireEvent.click(videoItemContainer);
    expect(handleVideoSelect).toHaveBeenCalled();
  });
});
