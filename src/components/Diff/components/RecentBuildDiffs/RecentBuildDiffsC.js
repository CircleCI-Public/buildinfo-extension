import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../../common/actions/appActions'
import RecentBuildDiffs from './RecentBuildDiffs'

const mapStateToProps = state => ({
  recentBuilds: state.app.get('recentBuilds'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setQuickDiff: appActions.setQuickDiff,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecentBuildDiffs);
