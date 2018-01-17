import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/userReducer';

//创建saga中间件:sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//创建redux的store,并将saga中间件绑定到store
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
//使用saga中间件run方法运行某个或者某些中间件
sagaMiddleware.run(rootSaga);

//导出store
export default store;