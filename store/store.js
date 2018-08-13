import { createStore } from 'redux';
import rootReducer from './reducers';

const exampleInitialState = {
  bank: {
    points: 0,
  },
  inventory: {
    pointsPickers: 0,
  },
  store: [],
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(rootReducer, initialState);
}
