import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import logoTeam from "../../Assets/img/logoTeam.png";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={hidden ? 'nav-hidden' : ''}>
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
