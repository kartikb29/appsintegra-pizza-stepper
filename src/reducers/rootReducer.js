import {combineReducers} from 'redux';
import settingsReducer from './settingsReducer';
import orderReducer from './orderReducer';
import personReducer from './personReducer'

const rootreducer = combineReducers({
  settings: settingsReducer,
  orderStore: orderReducer,
  personStore: personReducer,
});

export default rootreducer;
