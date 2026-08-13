import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './header.css'

import logoTeam from "../../Assets/img/logoTeam.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoTeam} alt="Logo Spot It" />
      </div>

      <nav>
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <a href="/#about-us"> About Us </a> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
