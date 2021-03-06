# Calculations

Components for calculations in forms.

Example:

```javascript
const calculations = {
    f1: ({ a }) => a * 2,
    f2: ({ a, f1 }) => a * f1,
    f3: ({ a, b, f2 }) => a + b + f2
};

const SimpleForm = () => {
    const [data, setData] = useState({ a: 1, b: 2 });
    const commonProps = {
        changeHandler: delta => setData(data => ({...data, ...delta}))
    };
    const { a, b } = data;

    return <form>
        <NumericInput label="Input 1" value={{ a }} {...commonProps} />
        <ComputedLabel label="Output 1" data={data} calculateDerivedValue={calculations.f1} {...commonProps} />
        <NumericInput label="Input 2" value={{ b }} {...commonProps} />
        <ComputedLabel label="Output 2" data={data} calculateDerivedValue={calculations.f2} {...commonProps} />
        <ComputedLabel label="Output 3" data={data} calculateDerivedValue={calculations.f3} {...commonProps} />
    </form>
};

```

#### ToDo

* Create data driven example where all form properties are held in an array of objects.
* Try integrating with Formik.

#### Resources:

* [Compound Interest Calculator](https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php)
* [Blog Post](https://www.neohed.com/form-ulas)
