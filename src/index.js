import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducers from './reducers';
// 调试redux的2个插件redux-logger,redux-devtools-extension    redux-devtools-extension需要配合chorme 浏览器安装Redux-devtools
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
// 
import { Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
