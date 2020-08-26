import React, { useState, useCallback, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import ContentLoader from 'react-content-loader';
import "./CurrencyForm.css";

const CurrencyForm = () => {
    const [result, setResult] = useState(null);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState('GBP');
    const [amount, setAmmount] = useState(1);
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const onlyNumberKey = useCallback((e) => {
        const ASCIICode = (e.which) ? e.which : e.keyCode
        return (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) ? false : true
    }, []);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://free.currconv.com/api/v7/currencies?apiKey=6cf3a122f68b6389d5fa")
            const currencyAr = ["EUR"];
            for (const key in response.data.results) {
                currencyAr.push(key);
            }
            setCurrencies(currencyAr)
            setLoading(false);
        } catch (error) {
            console.error(error);
            setErrorModalOpen(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const convertHandler = useCallback(async () => {
        try {
            if (fromCurrency !== toCurrency) {
                setLoading(true);
                const response = await axios
                    .get(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=3b385138a6bddd2a8b03`)
                setResult(response.data[`${fromCurrency}_${toCurrency}`]);
                const resultFixed = amount * response.data[`${fromCurrency}_${toCurrency}`];
                setResult(resultFixed.toFixed(5));
                localStorage.setItem('amount', amount);
                localStorage.setItem('fromCurrency', fromCurrency);
                localStorage.setItem('toCurrency', toCurrency);
                localStorage.setItem('result', response.data[`${fromCurrency}_${toCurrency}`]);
                setLoading(false);
            } else {
                setResult("You cant convert the same currency!");
                setLoading(false);
            }
        } catch (error) {
            console.log("Opps", error.message);
        } finally {
            setLoading(false);
        }
    }, [fromCurrency, toCurrency, amount]);

    const selectHandler = useCallback((e) => {
        const { name, value } = e.target
        if (name === "from") {
            setFromCurrency(value);
        } else {
            if (name === "to") {
                setToCurrency(value);
            }
        }
    }, []);

    if (loading) {
        return ContentLoader
    }
    return (
        <Fragment>
            <div className="Converter">
                <h2>
                    <span>{"Konweter walut"}</span>
                </h2>
                <div className="From">
                    <div className="Inputs">
                        <input
                            name="amount"
                            placeholder="Wpisz kwotę"
                            type="number"
                            value={amount}
                            onKeyPress={(e) => onlyNumberKey(e)}
                            required
                            onChange={event => setAmmount(event.target.value)}
                        />
                    </div>
                    <div className="Inputs">
                        <input
                            name="result"
                            placeholder="Wynik"
                            type="number"
                            value={result}
                            onKeyPress={(e) => onlyNumberKey(e)}
                            required
                        />
                    </div>
                    <div>
                        <select
                            name="from"
                            onChange={event => selectHandler(event)}
                            value={fromCurrency}
                        >
                            {currencies.map((cur, index) => (
                                <option key={index}>{cur}</option>
                            ))}
                        </select>
                        <i class="fas fa-exchange-alt"></i>
                        <select
                            name="to"
                            onChange={event => selectHandler(event)}
                            value={toCurrency}
                        >
                            {currencies.map((cur, index) => (
                                <option key={index}>{cur}</option>
                            ))}
                        </select>
                    </div>
                    <Button
                        size="lg"
                        className="ConvertButton"
                        onClick={convertHandler}
                    >
                        {"Konwertuj"}
                    </Button>
                </div>
            </div>
            <Fragment>
                <span>
                    <Link to="/history"><div className="HistoryLabel">{'Historia'}</div>
                    </Link>
                </span>
                <Modal
                    className="Modal"
                    isOpen={errorModalOpen}
                >
                    <ModalHeader style={{ 'textAlign': "center" }}>{'Komunikat błędu'}</ModalHeader>
                    <ModalBody style={{ 'textAlign': "center", 'backgroundColor': 'white' }}>
                        {"Nie udało się wykonać żądanej operacji, ponieważ nie znaleziono zasobu powiązanego z serwerem"}
                    </ModalBody>
                    <ModalFooter style={{ 'textAlign': "right" }}>
                        <Button style={{ cursor: 'pointer' }} color="secondary" onClick={() => setErrorModalOpen(false)}>{'Zamknij'}</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        </Fragment>
    );
}

export default CurrencyForm;
