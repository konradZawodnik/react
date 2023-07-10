import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem component", () => {
  it("WHEN ListItem is rendered THEN it should be rendered with selected testId", () => {
    // WHEN
    const items = [
      {
        id: 1,
        name: "Jan K",
      },
      {
        id: 2,
        name: "Tomasz S",
      },
      {
        id: 3,
        name: "Mateusz B",
      },
      {
        id: 4,
        name: "Przemysław R",
      },
    ];
    render(
      <ul>
        <ListItem handleDelete={jest.fn()} items={items} />
      </ul>,
    );
    // THEN
    expect(screen.getAllByTestId("deleteListElementsListItem")).toBeTruthy();
  });

  it("WHEN ListItem has been deleted THEN handleDelete function should be called, and deleted item should not be visibile", () => {
    // WHEN
    const handleDelete = jest.fn();
    const items = [
      {
        id: 1,
        name: "Jan K",
      },
      {
        id: 2,
        name: "Tomasz S",
      },
      {
        id: 3,
        name: "Mateusz B",
      },
      {
        id: 4,
        name: "Przemysław R",
      },
    ];
    const listItemContainer = render(
      <ul>
        <ListItem handleDelete={handleDelete} items={items} />
      </ul>,
    );
    const firstItem = listItemContainer.getByText("Jan K");
    const deleteButton = listItemContainer.getAllByLabelText("Usuń członka")[0];
    waitFor(() => fireEvent.click(deleteButton));
    // THEN
    expect(handleDelete).toHaveBeenCalled();
    waitFor(() => expect(firstItem).not.toBeInTheDocument());
  });
});
