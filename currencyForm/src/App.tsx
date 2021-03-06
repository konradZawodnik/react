import React, { useCallback, useState } from 'react';

import Cash from './Cash/Cash';
import Select from './Select/Select';
import Input from './Input/Input';

import './App.css';

type ExchangeCounterProps = {
    currencies: Array<{
        id: number,
        name: string,
        ratio: number,
        title: string
    }>,
    prices: {
        [select:string]: number,
    },
}

const ExchangeCounter = ({ currencies, prices }: ExchangeCounterProps) => {
    const [amount, setAmount] = useState("");
    const [product, setProduct] = useState("electricity")

    const handleChange = useCallback((e) => {
        setAmount(e.target.value);
    }, []);

    const handleSelect = useCallback((e) => {
        setProduct(e.target.value);
        setAmount("");
    }, []);

    const insertSuffix = useCallback((select) => {
        switch (select) {
            case "electricity":
                return <em>kWh</em>
            case "petrol":
                return <em>litórw</em>
            case "oranges":
                return <em>kilogramów</em>
            default:
                return null
        }
    }, []);

    const selectPrice = useCallback((select) => {
        const price = prices[select]
        return price;
    }, []);

    const price = selectPrice(product)
    return (
        <div className="App">
            <Select product={product} handleSelect={handleSelect} />
            <br />
            <Input amount={amount} handleChange={handleChange} insertSuffix={insertSuffix} product={product} />
            {currencies.map(currency => (
                <Cash
                    key={currency.id}
                    ratio={currency.ratio}
                    title={currency.title}
                    cash={amount}
                    price={price}
                />
            ))}
        </div>
    )
}

ExchangeCounter.defaultProps = {
    currencies: [
        {
            id: 0,
            name: "złotych",
            ratio: 1,
            title: "Wartość w złotówkach:"
        },
        {
            id: 1,
            name: "dollar",
            ratio: 3.6,
            title: "Wartość w dolarach:"
        },
        {
            id: 2,
            name: "euro",
            ratio: 4.25,
            title: "Wartość w euro:"
        },
        {
            id: 3,
            name: "frank",
            ratio: 3.8,
            title: "Wartość w frankach:"
        }
    ],
    prices: {
        electricity: .51,
        petrol: 4.76,
        oranges: 3.79
    }
}

export default ExchangeCounter;
