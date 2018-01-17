/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';

/**
 * 计数器组件
 */
const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }) =>
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={onIncrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment async
        </button>
      </p>

//导出计数器组件
export default Counter
