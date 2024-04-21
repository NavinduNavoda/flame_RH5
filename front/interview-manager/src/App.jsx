import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Queue from  './Queue'
import SignUpForm from './SignUp'
import LoginForm from './LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Queue /> */}
        {/* <SignUpForm/> */}
        <LoginForm />
      </div>
    </>
  )
}

export default App
