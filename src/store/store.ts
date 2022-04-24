import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
