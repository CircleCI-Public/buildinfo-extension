import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setDiffConfigA, setDiffConfigB,
  setDiffInputA, setDiffInputB, fetchDiffConfigA, fetchDiffConfigB,
  setDiffContent, setQuickDiffBranch } from '../common/actions/appActions'
import { setDiffType, setDiffView } from './actions/diffActions'
import Diff from './Diff'

const mapStateToProps = state => ({
  diffInputA: state.app.get('diffInputA'),
  diffInputB: state.app.get('diffInputB'),
  diffBuildA: state.app.get('diffConfigA'),
  diffBuildB: state.app.get('diffConfigB'),
  diffType: state.diff.get('diffType'),
  diffView: state.diff.get('diffView'),
  apiTokenValid: state.app.get('apiTokenValid'),
  diffContent: state.app.get('diffContent'),
  quickDiffBranchList: state.app.get('quickDiffBranchList'),
  quickDiffBranch: state.app.get('quickDiffBranch'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setDiffConfigA,
  setDiffConfigB,
  setDiffInputA,
  setDiffInputB,
  fetchDiffConfigA,
  fetchDiffConfigB,
  setDiffType,
  setDiffView,
  setDiffContent,
  setQuickDiffBranch,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Diff);
