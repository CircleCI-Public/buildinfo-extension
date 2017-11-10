import * as types from '../const'

export const setTokenValid = ( valid: Boolean ) => ({
  type: types.SET_TOKEN_VALID,
  payload: valid
})

export const setTokenFetched = ( fetched: Boolean ) => ({
  type: types.SET_TOKEN_FETCHED,
  payload: fetched
})

export const setToken = ( token: String ) => ({
  type: types.SET_TOKEN,
  payload: token
})

export const setOrgName = ( org: String ) => ({
  type: types.SET_ORG_NAME,
  payload: org
})

export const setRepoName = ( repo: String ) => ({
  type: types.SET_REPO_NAME,
  payload: repo
})

export const setVcsType = ( vcs: String ) => ({
  type: types.SET_VCS_TYPE,
  payload: vcs
})

export const setBuildURL = ( url: String ) => ({
  type: types.SET_BUILD_URL,
  payload: url
})

export const setQuickDiff = ( buildNumA: Number, buildNumB: Number ) => ({
  type: types.SET_QUICK_DIFF,
  payload: {
    buildNumA: buildNumA,
    buildNumB: buildNumB,
  }
})

export const setBuildNumber = ( buildNum: Number ) => ({
  type: types.SET_BUILD_NUMBER,
  payload: Number(buildNum)
})

export const fetchBuild = (vcsType: String, orgName: String, repoName: String, buildNum: Number) => ({
  type: types.FETCH_BUILD,
  payload: {
    vcsType: vcsType,
    orgName: orgName,
    repoName: repoName,
    buildNum: buildNum
  }
})

export const fetchRecentBuilds = (vcsType: String, orgName: String, repoName: String) => ({
  type: types.FETCH_RECENT_BUILDS,
  payload: {
    vcsType: vcsType,
    orgName: orgName,
    repoName: repoName,
  }
})

export const setRecentBuilds = ( builds: Array ) => ({
  type: types.SET_RECENT_BUILDS,
  payload: builds,
})

export const setDiffInputA = ( buildNum: Integer ) => ({
  type: types.SET_DIFF_INPUT_A,
  payload: buildNum,
})

export const setDiffInputB = ( buildNum: Integer ) => ({
  type: types.SET_DIFF_INPUT_B,
  payload: buildNum,
})

export const fetchDiffConfigA = () => ({
  type: types.FETCH_DIFF_CONFIG_A
})

export const fetchDiffConfigB = () => ({
  type: types.FETCH_DIFF_CONFIG_B
})

export const setDiffConfigA = ( config: String ) => ({
  type: types.SET_DIFF_CONFIG_A,
  payload: config,
})

export const setDiffConfigB = ( config: String ) => ({
  type: types.SET_DIFF_CONFIG_B,
  payload: config,
})

export const setDiffContent = ( content: String ) => ({
  type: types.SET_DIFF_CONTENT,
  payload: content,
})
