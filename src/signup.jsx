import { useState } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom';
function Signup(){
    const navigate = useNavigate();
    const [message,setMessage]=useState('');
    function handleSignup() {
        
        const username = document.getElementById('username').value;
        const email=document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('signup clicked');
    
        // Create the login data object
        const signupData = {
            email: email,
            name: username,
            password: password,
        };
    
        // Send a POST request to the Express server
        fetch('https://gamerhaven-backend.vercel.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
        .then(response => response.json())
        .then(data => {
            if(data.message==true){
            navigate('/login');
            }else{
                setMessage(data.message)
            }
            // Handle successful signup response
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessage( 'error signing up')
            // Handle error in signup
        });
        
    }
    return(
        <div className='page'>
        <div className="box">
         <h2 className='login-h2'>Signup</h2>
         <input type="text" placeholder='Username' id='username'/>
         <input type="email" placeholder='email' id='email' />
         <input type="password"placeholder='password'id='password'/>
         <input type="password"placeholder='confirm password'/>
         <a className='forgot' href="#">Forgot password?</a>
         <input type="submit" value="Signup" onClick={handleSignup}/>
         {message && <p className='error'>{message}</p>}
         <p className='signup-p'>Already have an account? <a href="/login">Login</a></p>
 
        </div> 
        </div>
    )
}
export default Signup
