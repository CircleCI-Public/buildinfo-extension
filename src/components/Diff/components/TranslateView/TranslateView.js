import React, { PureComponent } from 'react'
import './assets/styles/TranslateView.styl'

class TranslateView extends PureComponent {

  componentWillMount() {
    this.props.fetchConfigTranslation()
  }

  componentWillUnmount() {
    this.props.setConfigTranslation('')
  }

  render() {

    let { configTranslation } = this.props

    return (
      <div className='translate-view'>
        <textarea
          value={ configTranslation }
          placeholder='loading...'
          className='translate-content'
          rows='500'
          readOnly
        />
      </div>
    )
  }
}

export default TranslateView
