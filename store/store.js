import { createStore } from 'redux';
import rootReducer from './reducers';

const exampleInitialState = {
  testReducer: '',
  bank: {
    points: 0,
  },
  inventory: {
    pointsPickers: 0,
  },
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(rootReducer, initialState);
}
