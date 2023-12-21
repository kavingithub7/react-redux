// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 5 },
  reducers: {
    increment: (state) => {
      state.count += 1;
      
    },
    decrement: (state) => {
       
      state.count =state.count-1;
    },
    
  },
});

export const { increment, decrement } = counterSlice.actions;

const rootReducer = counterSlice.reducer;

export default rootReducer;