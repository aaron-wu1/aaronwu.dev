import { useState } from 'react'
import About from './about.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About></About>
    </>
  )
}

export default App
