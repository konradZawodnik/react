import React from "react";
import OrderView from "../OrderView/OrderView";

const order = () => {
  const { order, removeFromOrder } = this.props;
  const orderedBooks = order.map((order) => {
    return <OrderView book={order} removeFromOrder={removeFromOrder} />;
  });

  return (
    <div className="order col-xs-6">
      <h2>Your order:</h2>
      {orderedBooks}
    </div>
  );
};

export default order;
