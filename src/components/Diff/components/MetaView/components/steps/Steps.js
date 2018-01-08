import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// props for SimpleMetaRow should be passed to MetaRow
const Steps = ({label, property, A, B, json}) => (
    <React.Fragment>
        <div className={ classnames('bi-label') }>
            { label.replace('_', ' ') }
        </div>
        <div key={`${property}-A`} className='left'>{ A.getIn(property).map(
            (step, idx) => <div className='step-list-item' key={`${step.get('name')}-${idx}`}>{step.get('name')}</div>) || 'null' }</div>
        <div key={`${property}-B`} className='right'>{ B.getIn(property).map(
            (step, idx) => <div className='step-list-item' key={`${step.get('name')}-${idx}`}>{step.get('name')}</div>) || 'null' }</div>
    </React.Fragment>
)

Steps.propTypes = {
}

export default Steps