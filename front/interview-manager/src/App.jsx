
import './App.css'
import SignUpForm from './SignUp'
import LoginForm from './LogIn'
import QueuePage from './QueuePage'
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home');

  return (
    <>
      <div>
        <Navbar setPage = {setPage}/>

        {page == 'home' && <Home  setPage = {setPage}/>}
        {page == 'queue' && <QueuePage />}
        {page == 'signup' && <SignUpForm />}
        {page == 'login' && <LoginForm />}
        
        <Footer />
      </div>
    </>
  )
}

export default App
