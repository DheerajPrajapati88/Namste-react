import logo from '../assets/logo.png';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
 const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState('Login')

    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li>cart</li>
          </ul>
        </div>
            <button className='login' onClick={()=>{
              btnNameReact==='Login'? setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
      </div>
    );
  };
export default Header;