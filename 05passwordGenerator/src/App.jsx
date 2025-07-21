import { use, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(False);
  const [charAllowed, setCharAllowed] = useState(False);
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  );
}

export default App;
