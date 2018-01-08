import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../../assets/styles/MetaView.styl'

// props for SimpleMetaRow should be passed to MetaRow
const Steps = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ styles['bi-label'] }>
            { label.replace('_', ' ') }
        </div>
        <div key={`${property}-A`} className={styles.left}>{ A.getIn(property).map(
            (step, idx) => <div className={styles['step-list-item']} key={`${step.get('name')}-${idx}`}>{step.get('name')}</div>) || 'null' }</div>
        <div key={`${property}-B`} className={styles.right}>{ B.getIn(property).map(
            (step, idx) => <div className={styles['step-list-item']} key={`${step.get('name')}-${idx}`}>{step.get('name')}</div>) || 'null' }</div>
    </React.Fragment>
)

Steps.propTypes = {
}

export default Steps