import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //useState :to change state in DOM

  //let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      console.log("clicked", counter);
      //counter = counter + 1;
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Cookie and React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter} </button>
      <br /> <br />
      <button onClick={removeValue}> Remove Value {counter} </button>
      <p> footer : {counter}</p>
    </>
  );
}

export default App;
