import React, { useState } from 'react';
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {

      // const response = await axios.post('http://localhost:4000/api/users/login' , { email, password }, {withCredentials: true});

      response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        credentials: 'same-origin',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong.');
        return;
      }

      // Reset error state on successful login
      setError('');

      // Handle successful login
      console.log(response);
      // You can redirect to another page or perform any other action here
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Something went wrong.');
    }
  };

  return (
    <div className='pt-[200px]'>
      <h2 className='mb-[20px] text-[32px] font-semibold'>Login</h2>
      {error && <p>{error}</p>}
      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={handleLogin} className='text-white' >Login</button>
    </div>
  );
};

export default LoginForm;
