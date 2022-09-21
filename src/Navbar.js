import React from "react";
import {Link} from 'react-router-dom'

function Navbar(){
  return(
    <li>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <ul>
          <Link to='/about'>About</Link>
        </ul>
        <ul>
          <Link to='/contact'>Contact</Link>
        </ul>
    </li>
  );
}

export default Navbar;