import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import {useState} from 'react';

function App() {

  const [startPause, setStartPause] = useState("Start");
  const [counting, setCounting] = useState("Down Counting");
  const [value, setValue] = useState(0);
  const [state, setState] = useState("Reset");

  const handleRest = (event) => {
      setStartPause("Start");
      setCounting("Down Counting");
      setState("Reset");
  }
  const handleStartPause = (event) => {
      if (event.target.innerText == "Start"){
          setStartPause("Pause");
      }
      else {
          setStartPause("Start");
      }
      if (counting == "Down Counting"){
        setState(startPause + " " + "Up Counting");
      }
      else{
        setState(startPause + " " + "Down Counting");
      }
  }
  const handleCounting = (event) => {
      if (event.target.innerText == "Down Counting"){
          setCounting("Up Counting");
      }
      else {
          setCounting("Down Counting");
      }
      if (startPause == "Start"){
        setState("Pause" + " " + counting);
      }
      else{
        setState("Start" + " " + counting);
      }
  }


  return (
    <div className="App">
      <div className="counter">
        <Counter data={value} state ={state}></Counter>
      </div>
      <div className="buttons">
        <Button text="Reset" onClick={handleRest}></Button>
        <Button text={startPause} onClick={handleStartPause}></Button>
        <Button text={counting} onClick={handleCounting}></Button>
      </div>
    </div>
  );
}

export default App;
