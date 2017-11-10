import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setDiffConfigA, setDiffConfigB,
  setDiffInputA, setDiffInputB, fetchDiffConfigA, fetchDiffConfigB,
  setDiffContent } from '../common/actions/appActions'
import { setDiffType } from './actions/diffActions'
import Diff from './Diff'

const mapStateToProps = state => ({
  diffInputA: state.app.get('diffInputA'),
  diffInputB: state.app.get('diffInputB'),
  diffBuildA: state.app.get('diffConfigA'),
  diffBuildB: state.app.get('diffConfigB'),
  diffType: state.diff.get('diffType'),
  apiTokenValid: state.app.get('apiTokenValid'),
  diffContent: state.app.get('diffContent'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setDiffConfigA,
  setDiffConfigB,
  setDiffInputA,
  setDiffInputB,
  fetchDiffConfigA,
  fetchDiffConfigB,
  setDiffType,
  setDiffContent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Diff);
