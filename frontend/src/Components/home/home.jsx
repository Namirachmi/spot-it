import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Header from '../header/header'
import StackingCards from '../stackingCards/stackingCards'
import Start from '../quiz/start';
import OpeningIntro from '../openingIntro/openingIntro';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  return (
    <>
      {/* 3. Tampilkan Intro jika showIntro bernilai true */}
      {showIntro ? (
        <OpeningIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="HeroContainer">
            <Header/>
            
            <div className="HeroContent">
              <img src="./src/Assets/img/logoProject.png" alt="Logo Spot It" />
              <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>

              <Link to="/start">
                <button className="btnStart"> Start the Quiz </button>
              </Link>
            </div>

            <StackingCards />
        </div>
      )}
    </>
  )
}

export default Home
