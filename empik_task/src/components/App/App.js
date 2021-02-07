import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AddedProductsToBasket from './AddedProductsToBasket/AddedProductsToBasket';

import './App.css';

const App = ({ count }) => {

  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get('/api/cart');
      setData(response.data);
    } catch (err) {
      return err;
    }
  }, [data]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        {data && data.map((item) => (
          <li className="row" key={item.pid}>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <AddedProductsToBasket
              amount={amount}
              item={item}
              setAmount={setAmount}
            />
          </li>
        ))}
      </ul>
      <div className="summary">{`Całkowita suma zamówienia to ${Number(count * amount).toFixed(2)} zł`}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.countReducer.count,
})

export default connect(mapStateToProps)(App);
