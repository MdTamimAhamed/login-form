import React from 'react';
import '../Login/signin.css';

const SignIn = ({ state, setState, type, autoComplete, name, placeholder }) => {
  return (
    <div className='signin_input'>
      <input
        value={state}
        onChange={e => setState(e.target.value)}
        type={type}
        autoComplete={autoComplete}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SignIn;
