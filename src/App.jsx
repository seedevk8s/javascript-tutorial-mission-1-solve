import { useState } from 'react'
import './App.css'

function Counter() {
  return (
    <button>Counter버튼</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      Hello Vite + React!
    </>
  )
}

export default App
