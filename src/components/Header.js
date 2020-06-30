import React from "react";
import {Link} from "react-router-dom";
import Logo from './logo.svg'

function Header() {
  return (
    <div>
      <img src={Logo} alt='Logo'/>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/history'>History</Link>
          <Link to='/about'>About</Link>
        </nav>
    </div>
)

}

export default Header;