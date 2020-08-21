import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import rootReducers from './reducers';
// 导入导航
import NavigationBar from './components/NavigationBar.jsx'
// 调试redux的2个插件redux-logger,redux-devtools-extension    redux-devtools-extension需要配合chorme 浏览器安装Redux-devtools
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
// 
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';       // 引入redux-saga中的createSagaMiddleware函数
import rootSaga from './saga.js';                    // 引入saga.js

const sagaMiddleware = createSagaMiddleware();        // 执行

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,sagaMiddleware)));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
     <Router>
       <NavigationBar/>
       <Switch>
       {renderRoutes(routes)}
       </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
