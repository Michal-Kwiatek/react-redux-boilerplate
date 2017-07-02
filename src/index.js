import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>, document.getElementById('root'));

