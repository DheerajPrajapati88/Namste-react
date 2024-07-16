import logo from '../assets/logo.png';
import { useState } from 'react';
 const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState('Login')
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>cart</li>
          </ul>
        </div>
            <button className='login' onClick={()=>{
              btnNameReact==='Login'? setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
      </div>
    );
  };
export default Header;