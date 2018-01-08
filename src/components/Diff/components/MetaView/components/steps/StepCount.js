import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../../assets/styles/MetaView.styl'

let { left, right } = styles

// props for SimpleMetaRow should be passed to MetaRow
const StepCount = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ styles['bi-label'] }>
            { label.replace('_', ' ') }
        </div>
        <div key={`${property}-A`} className={left}>{ A.getIn(property).count() || 'null'}</div>
        <div key={`${property}-B`} className={right}>{ B.getIn(property).count() || 'null'}</div>
    </React.Fragment>
)

StepCount.propTypes = {
}

export default StepCount