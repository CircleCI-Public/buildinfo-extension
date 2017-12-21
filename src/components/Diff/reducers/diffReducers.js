import { fromJS } from 'immutable'
import * as types from '../const'

const initialState = fromJS({
  diffType: 'words',
  diffView: 'diff',
})

const diffReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIFF_TYPE:
      return state.set('diffType', action.payload)
    case types.SET_DIFF_VIEW:
      return state.set('diffView', action.payload)
    default:
      return state
  }
}

export default diffReducer
