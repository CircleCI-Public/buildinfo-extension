import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MetaView from './MetaView'

const mapStateToProps = state => ({
  diffBuildA: state.app.get('diffConfigA'),
  diffBuildB: state.app.get('diffConfigB'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MetaView);
