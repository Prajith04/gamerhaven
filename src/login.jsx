import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    function handleLogin() {
        const loginData = {
            name: username,
            password: password
        };

        fetch('https://gamerhaven-backend.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.accessToken) {
                // Store the JWT in localStorage
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('name',data.name);
                navigate('/'); // Redirect to home on successful login
                setAuth(true);
                  

            } else {
                setError(data.message || 'Login failed'); // Set error message
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setError('An error occurred. Please try again.'); // Set generic error message
        });
    }

    return (
        <div className='page'>
            <div className="box">
                <h2 className='login-h2'>Login</h2>
                <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a className='forgot' href="#">Forgot password?</a>
                <input
                    type="submit"
                    value="Login"
                    onClick={handleLogin}
                />
                {error && <p className='error'>{error}</p>} {/* Display error message */}
                <p className='signup-p'>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
