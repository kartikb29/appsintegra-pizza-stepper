import {combineReducers} from 'redux';
import settingsReducer from './settingsReducer';
import slicesReducer from './slicesReducer';
import personReducer from './personReducer'

const rootreducer = combineReducers({
  settings: settingsReducer,
  sliceStore: slicesReducer,
  personStore: personReducer,
});

export default rootreducer;
