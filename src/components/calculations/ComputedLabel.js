import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/derived-value.css'

const ComputedLabel = ({
    calculateDerivedValue,
    data,
    changeHandler,
    label,
    formatter = n => n
}) => {
    const [derivedValue, setDerivedValue] = useState('');

    useEffect(() => {
        const newDerivedValue = calculateDerivedValue(data);

        if (
            !isNaN(newDerivedValue)
            && newDerivedValue !== derivedValue)
        {
            setDerivedValue(newDerivedValue);

            changeHandler({
                [calculateDerivedValue.name]: newDerivedValue
            })
        }
    }, [
        data,
        derivedValue,
        calculateDerivedValue,
        changeHandler
    ]);

    const renderLabel = label => {
        if (typeof label === 'string') {
            return <label>{label}</label>
        } else {
            return label
        }
    };

    return <>
        {
            renderLabel(label)
        }
        <input
            type='text'
            value={
                formatter(derivedValue)
            }
            readOnly
            className="derived-value"
        />
    </>
};

ComputedLabel.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node.isRequired
    ]),
    data: PropTypes.object.isRequired,
    calculateDerivedValue: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
    formatter: PropTypes.func
};

export default ComputedLabel
