import {BiCalendarAlt} from 'react-icons/bi';
import {BsEyeFill} from 'react-icons/bs';
import Styles from './SignupForm.module.css'
import styles from '../Login/LoginForm.module.css'
import InputHandler from '../InputHandler/InputHandler';
import React,{ useState } from 'react';
import {Link} from 'react-router-dom';


const SignupForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');


  return (
    <>
      <div className={styles.form_wrapper}>
        {/* sign up form top content */}
        <div className={styles.top_content}>
          <h2 className={styles.wlcm_txt}>Welcome!</h2>
          <p className={styles.wlcm_subtitle}>Please sign up to continue.</p>
        </div>

        {/* sign up form */}
        <form className={styles.form_area}>
          <h1 className={styles.heading}>Sign Up</h1>
            <div>
              <InputHandler 
                state={userName}
                setState={setUserName}
                type = 'text' 
                autoComplete='off' 
                name = 'user' 
                placeholder = 'User name'
              />
            </div>
            <div>
              <InputHandler 
                state={email}
                setState={setEmail}
                type = 'text' 
                autoComplete='off' 
                name = 'email' 
                placeholder = 'Email'
              />
            </div>
            <div className={Styles.dob_input_field}>
              <span><BiCalendarAlt /></span>
              <InputHandler 
                state={dob}
                setState={setDob}
                type = 'text' 
                autoComplete='off' 
                name = 'dob' 
                placeholder = 'Date of Birth (mm/dd/yy)'
              />
            </div>
            <div className={Styles.pass_input_field}>
              <span><BsEyeFill /></span>
              <InputHandler 
                state={password}
                setState={setPassword}
                type = 'password' 
                autoComplete='off' 
                name = 'password' 
                placeholder = 'Password'
              />
            </div>
            <div>
              <InputHandler 
                state={confirmPass}
                setState={setConfirmPass}
                type = 'password' 
                autoComplete='off' 
                name = 'confirm' 
                placeholder = 'Confirm Password'
              />
            </div>
           <button className={styles.sign_btn} type='submit'>Sign Up</button>
        </form>
        <div className={styles.bottom_content}>
            <p className={styles.s_size}>Already have an account? <span className={styles.link_sign_up}><Link to= '/'>Sign In</Link></span></p>
            <p className={styles.s_size}>Or sign in with</p>
            <div className={styles.socials}>
              <a href='www.google.com'><i className ="fa-brands fa-google"></i></a>
              <a href='www.facebook.com'><i className ="fa-brands fa-facebook"></i></a>
            </div>
          </div>
      </div>
    </>
  )
}

export default SignupForm;