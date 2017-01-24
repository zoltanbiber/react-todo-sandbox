import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import About from './modules/About';
import store from './store';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
