import '../Login/welcome.css';

const Welcome = () => {
  return (
    <>
      <div className='left-col'>
        <div className='top_txt'>
          <h1>Welcome Back!</h1>
          <p>Please sign in to continue.</p>
        </div>
        <div className='bottom_txt'>
          <p className='text_1 utility'>
            No account? <span className='signup_link'>Sign Up</span>
          </p>
          <p className='text_2 utility'>Or sign in with</p>
          <div className='alter'>
            <a href='www.google.com'>
              <i className='fa-brands fa-google'></i>
            </a>
            <a href='www.facebook.com'>
              <i className='fa-brands fa-facebook'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
