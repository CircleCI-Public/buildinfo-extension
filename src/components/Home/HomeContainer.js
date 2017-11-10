import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setBuildURL,
  setOrgName,
  setRepoName,
  setVcsType,
  fetchRecentBuilds,
  setBuildNumber } from '../common/actions/appActions'
import Home from './Home'

const mapStateToProps = state => ({
  apiTokenValid: state.app.get('apiTokenValid'),
  apiTokenFetched: state.app.get('apiTokenFetched'),
  buildNumber: state.app.get('buildNumber'),
  apiToken: state.app.get('apiToken'),
  buildURL: state.app.get('buildURL'),
  orgName: state.app.get('orgName'),
  repoName: state.app.get('repoName'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setBuildURL,
  setOrgName,
  setRepoName,
  setVcsType,
  setBuildNumber,
  fetchRecentBuilds,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
