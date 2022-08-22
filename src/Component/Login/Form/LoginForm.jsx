import './LoginForm.css'
import InputHandler from '../FormInput/InputHandler'
import React,{ useState } from 'react';

const LoginForm = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <>
            <div className='form_wrapper'>
              <div className='top-content'>
                <h2 className='wlcm_txt'>Welcome back!</h2>
                <p className='wlcm_subtitle'>Please sign in to continue.</p>
              </div>
              <form className='form-area'>
                <h1 className='heading'>Sign In</h1>
                <InputHandler 
                  state = {email}
                  setState = {setEmail}
                  type = 'text' 
                  autoComplete='off' 
                  name = 'email' 
                  placeholder = 'Email'
                />
                <InputHandler 
                  state = {password}
                  setState = {setPassword}
                  type = 'password' 
                  name = 'password' 
                  placeholder = 'Password'
                />
                <button className='sign_btn' type='submit'>Sign In</button>
              </form>
              <div className='bottom-content'>
                <p className='s_size'>No account? <span className='link_sign_up'>Sign Up</span></p>
                <p className='s_size'>Or sign in with</p>
                <div className='socials'>
                  <a href='www.google.com'><i className ="fa-brands fa-google"></i></a>
                  <a href='www.facebook.com'><i className ="fa-brands fa-facebook"></i></a>
                </div>
              </div>
            </div>
        </>
    );
}
export default LoginForm;
