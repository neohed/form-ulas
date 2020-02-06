import React from 'react'
import PropTypes from 'prop-types'

const NumericInput = ({
    label,
    value,
    changeHandler
}) => {
    const propName = Object.getOwnPropertyNames(value)[0];
    const propValue = value[propName];

    return <>
        <label>
            {
                label
            }
        </label>
        <input
            value={propValue}
            onChange={e => changeHandler({
                [propName]: e.target.value
            })}
        />
    </>
};

NumericInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node.isRequired
    ]),
    value: PropTypes.object.isRequired,
    changeHandler: PropTypes.func.isRequired
};

export default NumericInput
