import React from 'react';
import { render } from 'react-dom';
import store from '../src/store/store'
import { Provider } from 'react-redux';

import App from '../src/components/App/App';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
