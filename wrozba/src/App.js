import React, { useState } from 'react';
import './App.css';


let counter = 0;

const App = () => {
  const initialValues = [{
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
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState(initialValues);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    let randomItem = Math.floor(Math.random() * predictions.length);
    setPredictions(predictions[randomItem]);
  };

  const handleAddClick = () => {
    for (let i = 0; i < predictions.length; i++) {
      const newArray = predictions.slice();
      newArray.push({ id: counter++, title: input });
      if (newArray[newArray.length - 1].title === '') {
        return alert("Napisz jakąś wróżbę");
      } else {
        setPredictions(newArray);
        alert(`Wróżba dodana. Aktulane wrózby to :${newArray[i].title}`)
      };
    };
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Zobacz wróżbę"
        onClick={handleSubmit}
      />
      <br />
      <input
        type="button"
        value="Dodaj wróżbę"
        onClick={handleAddClick}
      />
      <h1>{predictions.title}</h1>
      <br />
    </div>
  );
}


export default App;


// import React from 'react';
// import './App.css';


// let counter = 0;


// class App extends React.Component {
//   state = {
//     input: "",
//    //  value:"",
//     predictions: [{
//       id: counter++,
//       title: "Pierwsza wróżba"
//     },
//     {
//       id: counter++,
//       title: "Druga wróżba"
//     },
//     {
//       id: counter++,
//       title: "Trzecia wrózba"
//     }]
//   }
//   handleChange = (e) => {
//     this.setState({ input: e.target.value });
//   }

//   handleSubmit = () => {
//     var randomItem = Math.floor(Math.random() * this.state.predictions.length);
//     this.setState({
//       input: this.state.predictions[randomItem]
//     })
//   }


//   handleAddClick = () => {
//     for (let i = 0; i < this.state.predictions.length; i++) {
//       const newArray = this.state.predictions.slice();
//       newArray.push({ id: counter++, title: this.state.input });
//       if (newArray[newArray.length-1].title === '') {
//         return alert("Napisz jakąś wróżbę");
//       } else {
//         this.setState({ 
//           predictions: newArray,
//           input:"" })
//         alert(`Wróżba dodana. Aktulane wrózby to :${newArray[i].title}`)
//       };
//     };
//   }
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//        //   value={this.state.input}
//           onChange={this.handleChange}
//         />
//         <input
//           type="submit"
//           value="Zobacz wróżbę"
//           onClick={this.handleSubmit}
//         />
//         <br />
//         <input
//           type="button"
//           value="Dodaj wróżbę"
//           onClick={this.handleAddClick}
//         />
//         <h1>{this.state.input.title}</h1>
//         <br />
//       </div>
//     );
//   }
// };

// export default App;
