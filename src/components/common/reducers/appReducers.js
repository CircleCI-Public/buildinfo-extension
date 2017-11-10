import { fromJS } from 'immutable'
import * as types from '../const'

const initialState = fromJS({
  apiTokenValid: false,
  apiTokenFetched: false,
  diffContent: 'config',
  apiToken: '',
  buildURL: '',
  orgName: '',
  repoName: '',
  buildNumber: '',
  recentBuilds: fromJS([]),
  vcsType: '',
  diffInputA: '',
  diffInputB: '',
  diffConfigA: {circle_yml: {string:''}},
  diffConfigB: {circle_yml: {string:''}},
})

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKEN_VALID:
      return state.set('apiTokenValid', action.payload)
    case types.SET_TOKEN_FETCHED:
      return state.set('apiTokenFetched', action.payload)
    case types.SET_ORG_NAME:
      return state.set('orgName', action.payload)
    case types.SET_VCS_TYPE:
      return state.set('vcsType', action.payload)
    case types.SET_REPO_NAME:
      return state.set('repoName', action.payload)
    case types.SET_RECENT_BUILDS:
      return state.set('recentBuilds', action.payload)
    case types.SET_BUILD_NUMBER:
      return state.set('buildNumber', action.payload)
    case types.SET_TOKEN:
      return state.set('apiToken', action.payload)
    case types.SET_BUILD_URL:
      return state.set('buildURL', action.payload)
    case types.SET_DIFF_INPUT_A:
      return state.set('diffInputA', action.payload)
    case types.SET_DIFF_INPUT_B:
      return state.set('diffInputB', action.payload)
    case types.SET_DIFF_CONFIG_A:
      return state.set('diffConfigA', fromJS(action.payload))
    case types.SET_DIFF_CONFIG_B:
      return state.set('diffConfigB', fromJS(action.payload))
    case types.SET_DIFF_CONTENT:
      return state.set('diffContent', action.payload)
    default:
      return state
  }
}

export default appReducer
