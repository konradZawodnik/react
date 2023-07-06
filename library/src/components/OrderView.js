import React from "react";

export default class OrderView extends React.Component {
  render() {
    const { book, removeFromOrder } = this.props;
    return (
      <div className="orderView row">
        <div className="col-xs-8">
          <span>{book.name}</span>
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-danger"
            onClick={(event) => removeFromOrder(book.name)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
