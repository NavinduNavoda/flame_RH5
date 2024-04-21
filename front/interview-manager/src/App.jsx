import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Queue from './Queue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Queue />
      </div>
    </>
  )
}

export default App
