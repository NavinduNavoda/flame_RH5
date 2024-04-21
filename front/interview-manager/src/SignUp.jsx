import React, { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/users/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phoneNumber, email, password }),
            credentials: 'same-origin',

          });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong.');
        return;
      }

      // Handle successful signup
      console.log('Signup successful');
      // You can redirect to another page or perform any other action here
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Something went wrong.');
    }
  };

  return (
    <div className='pt-[200px] flex-col'>
      <h2 className='mb-[20px] text-[32px] font-semibold'>Sign Up</h2>
      {error && <p>{error}</p>}
      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />

      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button className='text-white'  onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
