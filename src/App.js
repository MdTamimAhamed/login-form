import './index.css'
import Welcome from './Component/Login/Welcome';
import SignIn from './Component/Login/SignIn';

function App() {
  return (
    <>
      <div className="app">
        <div className="container wrapper">
          <Welcome />
          <form className='signin_form'>
            <h1 className='form_title'>Sign In</h1>
            <SignIn type = 'text' placeholder = 'Email' name = 'email' autoComplete = 'off' />
            <SignIn type = 'password' placeholder = 'Password' name = 'password' />
            <SignIn type = 'password' placeholder = 'Confirm password' name = 'confirm' />
            <button type='submit' id='signin_btn'>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
