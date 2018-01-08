import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../assets/styles/MetaView.styl'

let { left, right, pre } = styles

// props for SimpleMetaRow should be passed to MetaRow
const SimpleMetaRow = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ styles['bi-label'] }>
            { label.replace('_', ' ') }
        </div>
        {json &&
        <React.Fragment>
            <pre key={`${property}-A`} className={classnames([left, pre])}>{ json ? JSON.stringify(A.getIn(property), null, 2) : A.getIn(property) || 'null'}</pre>
            <pre key={`${property}-B`} className={classnames([right, pre])}>{ json ? JSON.stringify(B.getIn(property), null, 2) : B.getIn(property) || 'null'}</pre>
        </React.Fragment>
        }
        {!json &&
        <React.Fragment>
            <div key={`${property}-A`} className={left}>{ A.getIn(property) || 'null'}</div>
            <div key={`${property}-B`} className={right}>{ B.getIn(property) || 'null'}</div>
        </React.Fragment>
        }
    </React.Fragment>
)

SimpleMetaRow.propTypes = {
}

export default SimpleMetaRow