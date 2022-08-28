import styles from './LoginForm.module.css'
import InputHandler from '../InputHandler/InputHandler'
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <>
            <div className={styles.form_wrapper}>
              <div className={styles.top_content}>
                <h2 className={styles.wlcm_txt}>Welcome back!</h2>
                <p className={styles.wlcm_subtitle}>Please sign in to continue.</p>
              </div>
              <form className={styles.form_area}>
                <h1 className={styles.heading}>Sign In</h1>
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
                <button className={styles.sign_btn} type='submit'>Sign In</button>
              </form>
              <div className={styles.bottom_content}>
                <p className={styles.s_size}>No account? <span className={styles.link_sign_up}><Link to= '/signup'>Sign Up</Link></span></p>
                <p className={styles.s_size}>Or sign in with</p>
                <div className={styles.socials}>
                  <a href='www.google.com'><i className ="fa-brands fa-google"></i></a>
                  <a href='www.facebook.com'><i className ="fa-brands fa-facebook"></i></a>
                </div>
              </div>
            </div>
        </>
    );
}
export default LoginForm;
