import React from 'react';
import { createRoot } from 'react-dom/client';
import ButtonsContainer from './ButtonContainer/ButtonsContainer';
import store from './store/store'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ButtonsContainer />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
