import { call, put, takeLatest, select, fork } from 'redux-saga/effects'
import * as api from '../api'
import { getApiToken } from '../selectors/appSelectors'
import * as appActions from '../actions/appActions'
import * as types from '../const'

function* fetchConfigA(action) {
  const token = yield select(getApiToken)
  const vcsType = yield select(state => state.app.get('vcsType'))
  const orgName = yield select(state => state.app.get('orgName'))
  const repoName = yield select(state => state.app.get('repoName'))
  const buildNum = yield select(state => state.app.get('diffInputA'))
  const build = yield call(api.fetchBuild, vcsType, orgName, repoName, buildNum, token)
  try {
    yield put(appActions.setDiffConfigA(build))
  } catch(e) {console.log(e)}
}

function* fetchConfigB(action) {
  const token = yield select(getApiToken)
  const vcsType = yield select(state => state.app.get('vcsType'))
  const orgName = yield select(state => state.app.get('orgName'))
  const repoName = yield select(state => state.app.get('repoName'))
  const buildNum = yield select(state => state.app.get('diffInputB'))
  const build = yield call(api.fetchBuild, vcsType, orgName, repoName, buildNum, token)
  try {
    yield put(appActions.setDiffConfigB(build))
  } catch(e) {console.log(e)}
}

function* fetchRecentBuilds(action) {
  const token = yield select(getApiToken)
  const { vcsType, orgName, repoName } = action.payload
  const builds = yield call(api.fetchRecentBuilds, vcsType, orgName, repoName, token)
  try {
    yield put(appActions.setRecentBuilds(builds))
  } catch(e) {console.log(e)}
}

function* setQuickDiff(action) {

  yield put(appActions.setDiffInputA(action.payload.buildNumA))
  yield put(appActions.setDiffInputB(action.payload.buildNumB))
  yield fork(fetchConfigA)
  yield fork(fetchConfigB)

}

export function* diffSaga(action) {
  yield takeLatest(types.SET_QUICK_DIFF, setQuickDiff)
}

// watchers
export function* fetchConfigSaga() {
  yield takeLatest(types.FETCH_DIFF_CONFIG_A, fetchConfigA)
  yield takeLatest(types.FETCH_DIFF_CONFIG_B, fetchConfigB)
  yield takeLatest(types.FETCH_RECENT_BUILDS, fetchRecentBuilds)
}
