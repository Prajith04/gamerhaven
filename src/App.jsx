import React, { useState,useEffect } from 'react';
import Header from './header';
import Home from './Home';
import Contact from './Contact';
import Company from './company';
import About from './About';
import Games from './games';
import Desc from './desc';
import Login from './login'
import Signup from './signup'
import Cart from './cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // State in the parent to hold the games data
  const [company, setCompany] = useState('');
  const [detail,setdetail]=useState('');
  const [image,setimage]=useState('');
  const [auth,setAuth]=useState(false);
  const name = localStorage.getItem('name');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <Header setAuth={setAuth} auth={auth} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/company" 
            element={<Company setCompany={setCompany} />} 
          />
          <Route 
            path="/company/games" 
            element={<Games company={company} setdetail={setdetail} setimage={setimage}/>} 
          />
          <Route 
            path="/company/games/description" 
            element={<Desc game={detail.name} description={detail.description} sysreq={detail.system_requirements} image={image} name={name}/>} 
          />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
