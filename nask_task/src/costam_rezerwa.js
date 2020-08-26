import React, { useEffect, useCallback, useState, Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import { Button } from 'reactstrap';
import { Form, Field } from 'react-final-form'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './CurrencyForm.css';

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const CurrencyForm = (props) => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState(null);
    const [currnecies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(false);
    const { fromCurrency, toCurrency } = props;
    const FormGroupAdapter = ({ input, inputOnChange }) => {
        const inputProps = {
            ...input,
            onChange: e => {
                input.onChange(e);
                inputOnChange && inputOnChange(e);
            }
        };
        return <input {...inputProps} />;
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    const changedCurrencyValue = useCallback(async (values) => {
        const { fromCurrency, toCurrency } = values
        try {
            setLoading(true);
            const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}${toCurrency}&compact=ultra&apiKey=6cf3a122f68b6389d5fa`)
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const getCurrencies = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://free.currconv.com/api/v7/currencies?apiKey=6cf3a122f68b6389d5fa')
            setCurrencies(response.data.results);
            console.log(response.data)
            setLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [getCurrencies]);

    useEffect(() => {
        getCurrencies();
    }, []);

    if (loading) {
        return ContentLoader
    }
    return (
        <Fragment>
            <header className="Header"></header>
            <section className="Section">
                <div className="HistoryButton">
                    <Link to="/history"><button>Pokaż historię</button></Link>
                    {console.log(data)}
                </div>
                <Form
                    className="Form"
                    initialValues={{
                        fromCurrency: '',
                        toCurrency: '',
                    }}
                    onSubmit={values => { changedCurrencyValue(values) }}
                >
                    {({ handleSubmit }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <h2>Konweter walut</h2>
                            <div>
                                <Field
                                    name="fromCurrency"
                                    placeholder="Wpisz kwotę"
                                    component={FormGroupAdapter}
                                    inputOnChange={handleChange}
                                    validate={composeValidators(required, mustBeNumber)}
                                />
                            </div>
                            <div>
                                <Field
                                    name="toCurrency"
                                    placeholder="Wynik"
                                    component={FormGroupAdapter}
                                    inputOnChange={handleChange}
                                    validate={composeValidators(required, mustBeNumber)}
                                />
                            </div>
                            <div>
                                <Field
                                    name="givenCurrency"
                                    component="select"
                                    onClick={getCurrencies}
                                />
                                <Field
                                    name="changedCurrency"
                                    component="select"
                                    onClick={getCurrencies}
                                />
                            </div>
                            <Button className="ConvertButton" color="primary" type="submit">Konwertuj</Button>
                        </form>
                    )}
                </Form>
            </section>
            <footer className="Footer"></footer>
        </Fragment>
    )
};


export default CurrencyForm;



// {Object.entries(currencies).map(([key, value]) => (
//     <option key={key}>{value}</option>
// ))}

// {Object.entries(currencies).map(([key, value]) => (
//     <option key={key}>{value}</option>
// ))}