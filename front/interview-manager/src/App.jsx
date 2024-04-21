
import './App.css'
import SignUpForm from './SignUp'
import LoginForm from './LogIn'
import QueuePage from './QueuePage'
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <div>
        <Home />
        <Footer />
        <QueuePage />
        <SignUpForm/>
        <LoginForm />
      </div>
    </>
  )
}

export default App
