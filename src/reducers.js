import { combineReducers } from 'redux'

import app from './components/common/reducers/appReducers'
import diff from './components/Diff/reducers/diffReducers'

const appReducer = combineReducers({
  app,
  diff
})

export default appReducer
