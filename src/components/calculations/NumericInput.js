import React from 'react'
import PropTypes from 'prop-types'

const NumericInput = ({
    label,
    value,
    changeHandler
}) => {
    const propName = Object.getOwnPropertyNames(value)[0];
    const propValue = value[propName];

    const changeHandlerWrapper = e => changeHandler({
        [propName]: e.target.value
    });

    return <>
        <label>{label}</label>
        <input value={propValue} onChange={changeHandlerWrapper} />
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
