import React,{useState} from 'react';
import '../Login/signin.css';

const SignIn= (props)=>{

    const [userInfo, setUserInfo] = useState({
        email:'',
        password: '',
        confirmPass: '',
    });

    const inputHandler = (e)=>{
        const value = e.target.value;
    
    }
    return(
        <>
            <div className='signin_input'>
                <input 
                onChange={inputHandler}
                type={props.type} 
                autoComplete = {props.autoComplete} 
                name = {props.name} 
                placeholder= {props.placeholder}
                />
            </div>
        </>
    );
}

export default SignIn;