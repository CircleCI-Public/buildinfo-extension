import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Nav from './Nav'
import {
  setBuildURL,
  setOrgName,
  setRepoName,
  setVcsType,
  setTokenValid,
  setTokenFetched,
  fetchRecentBuilds,
  setBuildNumber } from '../common/actions/appActions'

const mapStateToProps = state => ({
  apiTokenValid: state.app.get('apiTokenValid'),
  orgName: state.app.get('orgName'),
  repoName: state.app.get('repoName'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setTokenValid,
  setTokenFetched,
  setBuildURL,
  setOrgName,
  setRepoName,
  setVcsType,
  setBuildNumber,
  fetchRecentBuilds,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
