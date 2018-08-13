import { combineReducers } from 'redux';
import bank from './reducer_bank';
import inventory from './reducer_inventory';
import store from './reducer_store';

const rootReducer = combineReducers({
  inventory,
  store,
  bank,
});

export default rootReducer;
