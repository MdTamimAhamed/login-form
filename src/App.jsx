import React from 'react';
import './App.css';
import LoginForm from './Component/Login/LoginForm';
import SignupForm from './Component/Sign Up/SignupForm'

function App() {
  return (
    <>
      <div className='app'>
        <LoginForm />
        <SignupForm />
      </div>
    </>
  );
}

export default App;
