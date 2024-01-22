import { combineReducers } from 'redux';
import { dataReducer } from './dataReducers';
import { lessDataReducer } from './lessDataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  newdata: lessDataReducer,
});

export default rootReducer;
