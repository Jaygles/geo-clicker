import { combineReducers } from 'redux';
import testReducer from './reducer_test';
import bank from './reducer_bank';
import inventory from './reducer_inventory';
import store from './reducer_store';

const rootReducer = combineReducers({
  testReducer,
  bank,
  inventory,
  store,
});

export default rootReducer;
