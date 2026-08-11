// src/Components/quiz/QuizAiTemplate.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import { aiQuizStages } from './aiOrRealData';
import './quizAiTemplate.css';

const QuizAiTemplate = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStage = aiQuizStages[currentIndex];

  const isVideo = currentStage.imageSrc?.endsWith('.mp4');
  
  const handleAnswer = (userAnswer) => {
    if (currentIndex < aiQuizStages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate(currentStage.nextEnding || '/endingsafe');
    }
  };

  return (
    <div className="AiQuizContainer">
      <Header />

      <main className="AiQuizContent">
        {/* Frame Gambar dengan Ornamen Gambar Bintang */}
        <div className="AiFrameWrapper">
          {/* 2. Ganti karakter ★ dengan tag <img> */}
          <img src='src/Assets/img/starTeal.png' alt="Star Decoration" className="StarTeal" />
          <img src='src/Assets/img/starPurple.png' alt="Star Decoration" className="StarPurple" />

          <div className="AiImageCard">
            {isVideo ? (
              <video 
                src={currentStage.imageSrc} 
                className="AiImage"
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            ) : (
              <img 
                src={currentStage.imageSrc} 
                alt="AI or Real Artwork" 
                className="AiImage"
              />
            )}
          </div>
        </div>

        {/* Teks Pertanyaan */}
        <h2 className="AiQuestionText">
          {currentStage.question}
        </h2>

        {/* Tombol Opsi True / False */}
        <div className="AiButtonsGroup">
          <button className="AiBtn" onClick={() => handleAnswer('True')}>
            True
          </button>
          <button className="AiBtn" onClick={() => handleAnswer('False')}>
            False
          </button>
        </div>
      </main>
    </div>
  );
};

export default QuizAiTemplate;