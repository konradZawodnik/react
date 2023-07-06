import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./Searchbar";

describe("Youtube Search SearchBar", () => {
  it("should render searchBar of YoutubeSearch with selected testId", () => {
    render(<SearchBar handleFormSubmit={jest.fn()} />);
    expect(screen.getByTestId('youtubeSearchBar')).toBeInTheDocument();
  });

  it("WHEN submit button has been clicked THEN handleFormSubmit function should be called", () => {
    // WHEN
    const handleFormSubmit = jest.fn();
    render(<SearchBar handleFormSubmit={handleFormSubmit} />);
    screen.getByRole('button').click();
    // THEN
    expect(handleFormSubmit).toHaveBeenCalled();
  });

  it("WHEN input has been changed THEN it should have setted value", () => {
    // WHEN
    const handleFormSubmit = jest.fn();
    render(<SearchBar handleFormSubmit={handleFormSubmit} />);
    const input = screen.getByTestId('video-search-input');
    fireEvent.change(input, { target: { value: 'test' } });
    // THEN
    expect(input).toHaveValue('test');
  });
});
