import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import './introduction.css';

import asteriskPink from "../../Assets/img/asteriskPink.png";
import asteriskPurple from "../../Assets/img/asteriskPurple.png";

const Introduction = () => {
  return (
    <div className="openingContainer">
      <Header />

      <main className="openingContent">
        {/* Container pembungkus utama bubble + gambar hiasan */}
        <div className="bubbleWrapper">
          {/* Gambar Asterisk Kiri Atas */}
          <img 
            src={asteriskPink} 
            alt="Pink Asterisk" 
            className="asteriskImg asteriskTopLeft" 
          />

          {/* Kotak Chat Bubble Utama */}
          <div className="chatBubble">
            <p className="openingText">
              “Every day, we scroll through hundreds of posts.<br />
              Some are true.<br />
              Some are misleading.<br />
              Some are designed to manipulate us.<br />
              Can you spot the difference?”
            </p>
          </div>

          {/* Gambar Asterisk Kanan Bawah */}
          <img 
            src={asteriskPurple} 
            alt="Purple Asterisk" 
            className="asteriskImg asteriskBottomRight" 
          />
        </div>

        {/* Tombol Next */}
        <Link to="/readyornot" className="nextLink">
          <button className="buttonNext">Next</button>
        </Link>
      </main>
    </div>
  );
};

export default Introduction;