import React from "react";
import Order from "../Order/Order";
import Header from "../Header/Header";
import Inventory from "../Inventory/Inventory";

import "../index.css";

class App extends React.Component {
  state = {
    order: [],
  };

  addToOrder = (book) => {
    const { order } = this.state;
    this.setState({
      order: [...order, book],
    });
  };

  removeFromOrder = (title) => {
    const { order } = this.state;
    this.setState({
      order: order.filter((book) => title !== book.name),
    });
  };

  render() {
    const { order, books } = this.state;
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Order order={order} removeFromOrder={this.removeFromOrder} />
          <Inventory books={books} addToOrder={this.addToOrder} />
        </div>
      </div>
    );
  }
}

export default App;
