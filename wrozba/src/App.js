import React from 'react';
import './App.css';


let counter = 0;


class App extends React.Component {
  state = {
    input:"",
    // value:"",
    predictions: [{
      id: counter++,
      title: "Pierwsza wróżba"
    },
    {
      id: counter++,
      title: "Druga wróżba"
    },
    {
      id: counter++,
      title: "Trzecia wrózba"
    }]
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = () => {
    var randomItem = Math.floor(Math.random() * this.state.predictions.length);
    this.setState({
      input: this.state.predictions[randomItem]
    })
  }


  handleAddClick = () => {
    var newArray = this.state.predictions.slice();
    newArray.push({ id: counter++, title: this.state.input });
    this.setState({ predictions: newArray })
    for (let i = 0; i < this.state.predictions.length; i++) {
      if (this.state.predictions[i].title === "") {
        alert("Proszę wpisać życzenie")
      }
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          // value={this.state.input}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Zobacz wróżbę"
          onClick={this.handleSubmit}
        />
        <br />
        <input
          type="button"
          value="Dodaj wróżbę"
          onClick={this.handleAddClick}
        />
        <h1>{this.state.input.title}</h1>
        <br />
      </div>
    );
  }
};

export default App;