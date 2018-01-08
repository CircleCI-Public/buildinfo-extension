import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

const TimestampMetaRow = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ classnames('bi-label') }>
            { label.replace('_', ' ') }
        </div>
        <div key={`${property}-A`} className='left'>{ moment(A.getIn(property)).format("MMM Do YYYY, h:mm:ss a") || 'null'}</div>
        <div key={`${property}-B`} className='right'>{ moment(B.getIn(property)).format("MMM Do YYYY, h:mm:ss a") || 'null'}</div>
    </React.Fragment>
)

TimestampMetaRow.propTypes = {
}

export default TimestampMetaRow