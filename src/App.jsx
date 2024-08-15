import React, { useState } from 'react';
import Header from './header';
import Home from './Home';
import Contact from './Contact';
import Company from './company';
import About from './About';
import Games from './games';
import Desc from './desc';
import Login from './login'
import Signup from './signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // State in the parent to hold the games data
  const [company, setCompany] = useState('');
  const [detail,setdetail]=useState('');
  const [image,setimage]=useState('');
  return (
    <>
      <Header />
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
            element={<Desc name={detail.name} description={detail.description} sysreq={detail.system_requirements} image={image}/>} 
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
