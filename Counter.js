// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducer';


const Counter = () => {
  const Count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const value = Count > 0 ? Count : 0;


  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(increment())}>add </button>
      <button onClick={() => dispatch(decrement())}>remove</button>
    </div>
  );
};

export default Counter;
