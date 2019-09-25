import React, {useState} from 'react'
import NumericInput from '../calculations/NumericInput'
import ComputedLabel from '../calculations/ComputedLabel'

const currency = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
});

const calculations = {
    A: ({
            principal,
            annualInterestRate,
            timesCompounded,
            time
    }) => principal * Math.pow(1 + annualInterestRate / timesCompounded, timesCompounded * time)
};

const CompoundInterest = () => {
    const [data, setData] = useState({});
    const commonProps = {
        changeHandler: delta => setData(data => ({...data, ...delta}))
    };
    const { principal, annualInterestRate, timesCompounded, time } = data;

    return <form>
        <NumericInput label="Principal Investment Amount" value={{ principal }} {...commonProps} />
        <NumericInput label="Annual Interest Rate" value={{ annualInterestRate }} {...commonProps} />
        <NumericInput label="Times Compounded" value={{ timesCompounded }} {...commonProps} />
        <NumericInput label="Time the money is invested or borrowed for" value={{ time }} {...commonProps} />
        <ComputedLabel
            label="Future value including interest"
            data={data}
            calculateDerivedValue={calculations.A}
            formatter={currency.format}
            {...commonProps} />
    </form>
};

export default CompoundInterest
