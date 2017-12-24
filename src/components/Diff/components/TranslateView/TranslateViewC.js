import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchConfigTranslation, setConfigTranslation } from '../../../common/actions/appActions'
import TranslateView from './TranslateView'

const mapStateToProps = state => ({
  configTranslation: state.app.get('configTranslation')
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConfigTranslation,
  setConfigTranslation,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TranslateView);
