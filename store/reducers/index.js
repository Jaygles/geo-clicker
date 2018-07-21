import { combineReducers } from 'redux';
import testReducer from './reducer_test';

const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;
