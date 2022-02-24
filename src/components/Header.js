import React, { useState } from 'react';
import { HomePage } from '../pages/Home';
import { PageTwo } from '../pages/Page2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Header.css';


function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <Router>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
   
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'

          >
            <Link to="/Page2"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
        
      </nav>
      <Routes>
      		
      		<Route path="/Page2" element={<PageTwo />}></Route>
      		
      </Routes>
      
      </Router>
    </>
  );
}

export default Header;
