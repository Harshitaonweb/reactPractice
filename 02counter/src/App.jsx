import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
  };

  return (
    <>
      <h1>Cookie and React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter} </button>
      <br /> <br />
      <button>Remove Value {counter} </button>
      <p> footer : 15 </p>
    </>
  );
}

export default App;
