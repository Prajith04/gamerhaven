import './header.css';
import logo from './assets/logo.png';
import { useEffect } from 'react';

function Header({ auth, setAuth }) {
  useEffect(() => {
    console.log('Auth state changed:', auth); // Debugging line
  }, [auth]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <>
      <div className='header'>
        <div className='gh'>
          <img className='logo' src={logo} alt="logo" />
          <h1 className='gamerhaven'>GAMERHAVEN</h1>
        </div>
        <div className="nav">
          <a href="/">HOME</a>
          <a href="/company">GAMES</a>
          <a href="/contact">CONTACT</a>
          <a href="/about">ABOUT</a>
        </div>
        <div className='user'>
          {auth ? (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <a href='/login'>Login</a>
              <a href='/signup'>Sign Up</a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
