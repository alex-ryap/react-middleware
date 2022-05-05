import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middlewares/loggerMiddleware';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: [loggerMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
