// Reducer.js
// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'counter1',
  initialState: { value: 5 },
  reducers: {
    add: (state) => {
      state.value += 1;
      
    },
    remove: (state) => {
       
      state.value =0;
    },
    
  },
});

export const { add, remove } = Slice.actions;

const getreducer = Slice.reducer;

export default getreducer;