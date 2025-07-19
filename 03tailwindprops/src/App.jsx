import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-orange-700 text-red-950 p-4 rounded-xl' >Harry Potter</h1>
      <div className="w-90 h-60 rounded-xl ">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFnMW9sZWpoNWxlZ29kczkzcGZqYm8xNzlmNGR3MjNpandmdnQ3ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26BRzozg4TCBXv6QU/giphy.gif"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl text-red-950 bg-slate-300 rounded-2xl bg-opacity-45">Dwell the brave at heart</h1>
        </div>
      </div>
    </>
  )
}

export default App
