import React, { Component } from 'react';
let counter = 0
class List extends Component {
  state = {
    items: [{
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
    }]
  }
  handleDelete(item) {
    const newState = this.state.items.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({ items: newState })
    }
  }
  render() {
    const listItem = this.state.items.map((item) => {
      return <li>
        <div key={item.id}>
          <span>{item.name}</span> <button onClick={this.handleDelete.bind(this, item)}>Usuń członka</button>
        </div>
      </li>
    })
    return (
      <div>
        <ul>
          {listItem}
        </ul>
      </div>
    );
  }
}

export default List;
