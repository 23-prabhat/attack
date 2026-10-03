import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="hello-app">
      <h1>Hello, World!</h1>
      <p>Button clicked: {count} {count === 1 ? 'time' : 'times'}</p>
      <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
        Hello World
      </button>
    </main>
  )
}

export default App
