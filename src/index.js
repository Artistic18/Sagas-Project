import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import countReducer from './reducers/reducers';
import { watchCountUP } from './middlewares/saga';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(countReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchCountUP);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
