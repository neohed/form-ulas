import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../../styles/derived-value.css'

class ComputedLabelClass extends PureComponent {
    state = {
        derivedValue: ''
    };

    componentDidMount () {
        this.updateDerivedValue()
    }

    componentDidUpdate () {
        this.updateDerivedValue()
    }

    updateDerivedValue = () => {
        const { calculateDerivedValue, data, changeHandler } = this.props;
        const derivedValue = calculateDerivedValue(data);

        if (!isNaN(derivedValue) && derivedValue !== this.state.derivedValue) {
            this.setState({ derivedValue });
            changeHandler({
                [calculateDerivedValue.name]: derivedValue
            })
        }
    };

    renderLabel = (label) => {
        if (typeof label === 'string') {
            return <label>{label}</label>
        } else {
            return label
        }
    };

    render () {
        const { label } = this.props;
        const { derivedValue } = this.state;
        return <>
            {this.renderLabel(label)}
            <input type='text' value={derivedValue} readOnly className="derived-value" />
        </>
    }
}

ComputedLabelClass.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node.isRequired
    ]),
    data: PropTypes.object.isRequired,
    calculateDerivedValue: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired
};

export default ComputedLabelClass
