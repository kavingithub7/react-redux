// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
const store1 = configureStore({
  reducer: rootReducer,
});

export default store1;
