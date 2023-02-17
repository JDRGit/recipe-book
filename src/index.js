import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <div className="bg-gray-100 min-h-screen">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
