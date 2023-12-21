// store.js

import { configureStore } from '@reduxjs/toolkit';
import Combain from './Combain';
import rootReducer from './Reducer';
import getreducer from './Reducer2';

const store1 = configureStore({
  // reducer: rootReducer
  reducer:getreducer
});

export default store1;