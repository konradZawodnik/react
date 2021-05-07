import React, { useState, useCallback } from 'react';

import Form from './Form/Form';

import './List.css';

type ItemInterface = {
  id: number,
  name: string
}

let counter = 0
const List = () => {
  const [items, handleItems] = useState([{
    id: counter++,
    name: "Jan K"
  }, {
    id: counter++,
    name: "Tomasz S"
  }, {
    id: counter++,
    name: "Mateusz B"
  }, {
    id: counter++,
    name: "Przemysław R"
  }]);

  const [value, setValue] = useState("");

  const handleDelete = (e: any, item: ItemInterface) => {
    const newState = items.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      handleItems(newState);
    }
  };

  const addItem = useCallback((e) => {
    e.preventDefault();
    const newItem = {
      id: counter++,
      name: e.target[0].value
    };
    handleItems([...items, newItem]);
    setValue("");
  }, [items]);

  const listItem = items.map((item) => (
    <li>
      <div key={item.id}>
        <span>{item.name}</span> <button className="Button" onClick={(e) => handleDelete(e, item)}>Usuń członka</button>
      </div>
    </li>
  ))
  return (
    <div className="Container">
      <ul>
        {listItem}
      </ul>
      <Form addItem={addItem} setValue={setValue} value={value}/>
    </div>
  );
}

export default List;

