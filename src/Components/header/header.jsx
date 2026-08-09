import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./src/Assets/img/logoTeam.png" alt="Logo Spot It" />
      </div>

      <nav>
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to=""> About Us </Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
