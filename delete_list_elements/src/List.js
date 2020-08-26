import React, { useState, useCallback } from 'react';

let counter = 0
const List = () => {

  const [items, handleItems] = useState([{
    id: counter++,
    name: "Jan K"
  }, {
    id: counter++,
    name: "Tomasz S"
  },
  {
    id: counter++,
    name: "Mateusz B"
  }, {
    id: counter++,
    name: "Przemysław R"
  }]);

  const handleDelete = (e, item) => {
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
  }, [items]);

  const listItem = items.map((item) => {
    return <li>
      <div key={item.id}>
        <span>{item.name}</span> <button onClick={(e) => handleDelete(e, item)}>Usuń członka</button>
      </div>
    </li>
  })
  return (
    <div>
      <ul>
        {listItem}
      </ul>
      <form onSubmit={addItem}>
        <input placeholder="Dodaj członka">
        </input>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default List;

