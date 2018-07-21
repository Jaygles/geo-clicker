import { createStore } from 'redux';
import rootReducer from './reducers';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(rootReducer, initialState);
}
