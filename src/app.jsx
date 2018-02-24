import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Counter from './js/user/components/userComponent';
import store from './js/user/stores/userStore';
import UserList from './js/user/components/userListComponent';
import action from './js/user/utils/actionDispatchUtil';

/**
 * 渲染函数
 */
function render() {
  ReactDOM.render(
    /*<Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,*/
      <Provider>
       <UserList></UserList>
      </Provider>,
    document.getElementById('root')
  )
}

//执行渲染函数
render();
//监听渲染函数
store.subscribe(render)
