import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import CurrencyForm from './CurrencyForm/CurrencyForm';
import CurrencyHistory from './CurrencyHistory/CurrencyHistory';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="ApplicationArea">
        <div className="EmptyArea" />
        <div className="CurrencyForm">
          <Route exact path="" component={CurrencyForm} />
        </div>
        <div className="CurrencyHistory">
          <Route path="/history" component={CurrencyHistory} />
        </div>
        <div className="EmptyArea" />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
