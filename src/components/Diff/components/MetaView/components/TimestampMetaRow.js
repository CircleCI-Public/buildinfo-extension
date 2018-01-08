import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'
import styles from '../assets/styles/MetaView.styl'

const TimestampMetaRow = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ styles['bi-label'] }>
            { label.replace('_', ' ') }
        </div>
        <div key={`${property}-A`} className={styles.left}>{ moment(A.getIn(property)).format("MMM Do YYYY, h:mm:ss a") || 'null'}</div>
        <div key={`${property}-B`} className={styles.right}>{ moment(B.getIn(property)).format("MMM Do YYYY, h:mm:ss a") || 'null'}</div>
    </React.Fragment>
)

TimestampMetaRow.propTypes = {
}

export default TimestampMetaRow