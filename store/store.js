import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  bank: {
    points: 0,
  },
  inventory: {
    pointsPickers: { name: 'Points Pickers', amount: 0 },
    superPointsPickers: { name: 'Super Points Pickers', amount: 0 },
  },
  store: [],
};

export function initializeStore() {
  return createStore(rootReducer, initialState);
}
