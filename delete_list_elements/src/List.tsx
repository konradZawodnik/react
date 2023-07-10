import { useState, useCallback } from "react";
import Form from "./Form/Form";
import ListItem from "./ListItem/ListItem";

import "./List.css";

export type ItemInterface = {
  id: number;
  name: string;
};

let counter = 0;
const List = (): JSX.Element => {
  const [items, handleItems] = useState([
    {
      id: counter++,
      name: "Jan K",
    },
    {
      id: counter++,
      name: "Tomasz S",
    },
    {
      id: counter++,
      name: "Mateusz B",
    },
    {
      id: counter++,
      name: "Przemysław R",
    },
  ]);

  const [value, setValue] = useState("");

  const handleDelete = (e: any, item: ItemInterface) => {
    const newState = items.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      handleItems(newState);
    }
  };

  const addItem = useCallback(
    (e: any) => {
      e.preventDefault();
      const newItem = {
        id: counter++,
        name: e.target[0].value,
      };
      handleItems([...items, newItem]);
      setValue("");
    },
    [items],
  );

  return (
    <div className="Container" data-testid="deleteListElementsListContainer">
      <ul>
        <ListItem handleDelete={handleDelete} items={items} />
      </ul>
      <Form addItem={addItem} setValue={setValue} value={value} />
    </div>
  );
};

export default List;
