import React from 'react';
import './App.css';


let counter = 0;
const NewPrediction = (props) => {
  return (
    <div>
      {/* {props.title} */}
    </div>
  )
}

class App extends React.Component {
  static defaultProps = {
    predictions: [
      // {
      //   id: 0,
      //   title: "Pierwsza wróżba"
      // },
      // {
      //   id: 1,
      //   title: "Druga wróżba"
      // },
      // {
      //   id: 2,
      //   title: "Trzecia wrózba"
      // }
    ]
  }
  state = {
    input: "",
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

  handleSubmit = (e) => {
    var randomItem = this.state.predictions[Math.floor(Math.random() * this.state.predictions.length)];
    var element = document.createElement("div");
    element.textContent = randomItem.title
    document.body.appendChild(element);
    alert(element.textContent)
    e.preventDefault();
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
    const nextpredictions = this.state.predictions.map(prediction => (
      <NewPrediction key={prediction.id}
        title={prediction.title}
      />
    ))
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
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
        <h1>
          {nextpredictions}
        </h1>
        <br />
      </div>
    );
  }
};

export default App;
