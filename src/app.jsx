/*eslint-disable no-unused-vars*/
import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './js/user/components/userComponent';
import rootSaga from './js/user/sagas/userSaga';
import store from './js/user/stores/userStore';


const action = type => store.dispatch({type});

/**
 * 渲染函数
 */
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

//执行渲染函数
render();
//监听渲染函数
store.subscribe(render)
