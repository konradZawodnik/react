import { useState, useCallback } from 'react';

import './App.css';

interface PredictionsState {
  [index: number]: { id: number; title: string };
}

let counter = 0;

const App = () => {
  const initialValues: PredictionsState = [{
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
  const [value, setValue] = useState<string>('');
  const [predictions, setPredictions] = useState<any>(initialValues);

  const handleSubmit = useCallback(() => {
    let randomItem = Math.floor(Math.random() * predictions.length);
    setPredictions(predictions[randomItem]);
  }, [predictions]);

  const handleAddClick = useCallback(() => {
    for (let i = 0; i < predictions.length; i++) {
      const newArray = predictions.slice();
      newArray.push({ id: counter++, title: value });
      if (newArray[newArray.length - 1].title === '') {
        return alert("Napisz jakąś wróżbę");
      } else {
        setPredictions(newArray);
        alert(`Wróżba dodana. Aktulane wrózby to :${newArray[i].title}`)
      };
    };
  }, [predictions, value]);

  return (
    <div className="Container">
      <input
        className="Input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="Button"
        onClick={handleSubmit}
        type="submit"
      >
        Zobacz wróżbę
       </button>
      <br />
      <button
        className="Button"
        onClick={handleAddClick}
        type="button"
      >
        Dodaj wróżbę
        </button>
      <h1>{predictions.title}</h1>
      <br />
    </div>
  );
}

export default App;
