import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import slicesReducer from './slicesReducer'

const rootreducer = combineReducers({
  settings: settingsReducer,
  sliceStore: slicesReducer
})

export default rootreducer
