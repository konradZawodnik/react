import React from 'react';
import './App.css';


const Cash = (props) => {
    const value = (props.cash / props.ratio*props.price).toFixed(2)
    return (
        <div>
            {props.title} {props.cash <= 0 ? "" : value}
        </div>
    )
}

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        product: "electricity"
    }
    static defaultProps={
        currencies:[
            {
                id: 0,
                name: "złotych",
                ratio: 1,
                title: "Wartość w złotówkach"
            },
            {
                id: 1,
                name: "dollar",
                ratio: 3.6,
                title: "Wartość w dolarach"
            },
            {
                id: 2,
                name: "euro",
                ratio: 4.25,
                title: "Wartość w euro"
            },
            {
                id: 3,
                name: "frank",
                ratio: 3.8,
                title: "Wartość w frankach"
            }
        ],
        prices:{
            electricity:.51,
            petrol: 4.76,
            oranges: 3.79
        }
    }
 
    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount:""
        })
    }
    insertSuffix(select) {
        if (select === "electricity") return <em>kWh</em>
        else if (select === "petrol") return <em>litórw</em>
        else if (select === "oranges") return <em>kilogramów</em>
        else return null
    }
    selectPrice(select){
        const price=this.props.prices[select]
        return price;
    }
    render() {
        const { amount, product } = this.state;
        const price=this.selectPrice(product)
        const calculators = this.props.currencies.map(currency => (
            <Cash key={currency.id}
                ratio={currency.ratio}
                title={currency.title}
                cash={amount} 
                price={price}/>
        ))
        return (
            <div classname="app">
                <label>Wybierz produkt:
                <select value={product} onChange={this.handleSelect}>
                        <option value="electricity">prąd</option>
                        <option value="petrol">benzyna</option>
                        <option value="oranges">pomarańcze</option>
                    </select>
                </label>
                <br />
                <label>
                    <input type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    {this.insertSuffix(this.state.product)}
                </label>
                {calculators}
            </div>
        )
    }
}

export default ExchangeCounter;
