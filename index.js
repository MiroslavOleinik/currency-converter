import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { currency } from './currency'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(currency);

render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
