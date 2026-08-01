import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import './readyOrNot.css';

const ReadyOrNot = () => {
  return (
    <div className="openingContainer">
      <Header />

      <main className="openingContent">
        {/* Container pembungkus utama bubble + gambar hiasan */}
        <div className="bubbleWrapper">
          {/* Gambar Asterisk Kiri Atas */}
          <img 
            src={'src/Assets/img/asteriskPink.png'} 
            alt="Pink Asterisk" 
            className="asteriskImg asteriskTopLeft" 
          />

          {/* Kotak Chat Bubble Utama */}
          <div className="chatBubble">
            <p className="openingText">
              “In this game, every choice matters.
                Think carefully before you trust, react, or share.
                Ready?”
            </p>
          </div>

          {/* Gambar Asterisk Kanan Bawah */}
          <img 
            src={'src/Assets/img/asteriskPurple.png'} 
            alt="Purple Asterisk" 
            className="asteriskImg asteriskBottomRight" 
          />
        </div>

        <div className="buttonGroup">
            <Link to="/" className="nextLink">
                <button className="buttonNext">Nah I'm good </button>
            </Link>

            <Link to="/quizbreakingnews" className="nextLink">
                <button className="buttonNext">I'm Ready </button>
            </Link>
        </div>
      </main>
    </div>
  );
};

export default ReadyOrNot;