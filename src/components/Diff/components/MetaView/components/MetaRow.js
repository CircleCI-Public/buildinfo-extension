import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isEqual } from 'lodash'

const customCompare =(label, property,  A, B) => {
    switch(label) {
        case 'names':
            return !isEqual(A.getIn(property).map(step => step.name).sort(), 
                B.getIn(property).map(step => step.name).sort())  
        case 'count':
            return !isEqual(A.getIn(property).count(), B.getIn(property).count())
        default:
            return !isEqual(A.getIn(property), B.getIn(property))
    }
}

const MetaRow = (props) => (
    <div className={ classnames('job-meta', {'hidden': props.hidden, 
        'reddy': customCompare(props.label, props.property, props.A, props.B) })}>
        {React.Children.map(props.children, child => {
            const { children, ...newProps } = props
            newProps['key'] = `${newProps.A.get('start_time')}${newProps.B.get('build_number')}`
            return React.cloneElement(child, newProps)
            })
        }
    </div>
)

MetaRow.propTypes = {
    props: PropTypes.any,
}

export default MetaRow