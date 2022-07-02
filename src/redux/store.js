import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/index';
// import {cre}



export const store = configureStore({
  reducer: rootReducer
});

