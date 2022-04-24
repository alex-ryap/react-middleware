import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = (state) => (next) => (action) => {
  console.log('Prev state: ', state.getState());
  console.log('Action: ', action);
  next(action);
  console.log('Next state: ', state.getState());
};
