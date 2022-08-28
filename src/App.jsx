import React from 'react';
import './App.css';
import LoginForm from './Component/Login/LoginForm';
import SignupForm from './Component/Sign Up/SignupForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route exact path='/' element={<LoginForm />}/>
            <Route exact path='/signup' element={<SignupForm />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
