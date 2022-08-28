import styles from './SignupForm.module.css'
import InputHandler from '../InputHandler/InputHandler';
import React,{ useState } from 'react';

const SignupForm = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

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
          <InputHandler 
          
          />
        </form>
      </div>
    </>
  )
}

export default SignupForm;