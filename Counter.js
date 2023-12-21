// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Reducer';
   const Counter = () => {
  const Count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const value = Count > 0 ? Count : 0;
  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(increment())}>+</button><br/>
      <button onClick={() => dispatch(decrement())}>-</button><br/>
    </div>
  );
};

export default Counter;
