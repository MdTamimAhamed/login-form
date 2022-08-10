import './index.css';
import Welcome from './Component/Login/Welcome';
import SignIn from './Component/Login/SignIn';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <div className='app'>
        <div className='container wrapper'>
          <Welcome />
          <form className='signin_form'>
            <h1 className='form_title'>Sign In</h1>
            <SignIn
              state={email}
              setState={setEmail}
              type='text'
              placeholder='Email'
              name='email'
              autoComplete='off'
            />
            <SignIn
              state={password}
              setState={setPassword}
              type='password'
              placeholder='Password'
              name='password'
            />
            <SignIn
              state={confirmPassword}
              setState={setConfirmPassword}
              type='password'
              placeholder='Confirm password'
              name='confirm'
            />

            <button type='submit' id='signin_btn'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
