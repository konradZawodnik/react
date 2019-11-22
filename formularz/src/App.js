import React from 'react';
import './App.css';

class Form extends React.Component {
    state = {
        city: "Londyn",
        text: "",
        isLoved: true,
        number: "0"
    }
    handleChange = e => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    // handleCityChange = e => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }
    // handleTextChange = e => {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }
    // handleIsLovedChange=e=>{
    //     this.setState({
    //         isLoved: e.target.isLoved
    //     })
    // }
    // handleVisitsNumberChange(e){
    //     this.setState({
    //         number: e.target.value
    //     })
    // }
    render() {
        const { city, text, number, isLoved } = this.state;
        return (
            // <form>
            //     <label>
            //     Podaj imię:
            //     <input type="text" name="name" />
            //     </label>
            //     <br />
            //     <label>
            //     Podaj email:
            //     <input type="email" name="email" />
            //     </label>
            //      <br />
            //     <button>
            //     Zapisz się
            //     </button>
            // </form>
            <div>
                <label>
                    Podaj miasto
          <input name="city" value={city}
                        onChange={this.handleChange}
                        type="text" />
                </label>
                <br />
                <label>Napisz coś o tym mieście
          <textarea name="text" value={text}
                        onChange={this.handleChange}></textarea>
                </label>
                <br />
                <label>
                    Czy lubisz to miasto?
              <input name="isLoved"
                        type="checkbox"
                        checked={isLoved}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Ile razy byliście w tym mieście?
              <select name="number"
                        value={number}
                        onChange={this.handleChange.bind(this)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">więcej</option>
                    </select>
                </label>
            </div>
        )

    }
}

export default Form;
