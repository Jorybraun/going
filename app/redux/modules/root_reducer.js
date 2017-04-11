import { combineReducers } from 'redux'

import map from './map'
import users from './users'

const rootReducer = combineReducers({
  users,
  map
})

export default rootReducer