// src/Components/quiz/QuizAiTemplate.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import { aiQuizStages } from './aiOrRealData';
import './quizAiTemplate.css';

import starTeal from '../../../Assets/img/starTeal.png';
import starPurple from '../../../Assets/img/starPurple.png';

const QuizAiTemplate = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const currentStage = aiQuizStages[currentIndex];
  const isVideo = currentStage.imageSrc?.endsWith('.mp4');
  
  const handleAnswer = (userAnswer) => {
    // 1. Navigasi / Pindah Soal untuk semua stage kecuali terakhir
    if (currentIndex < aiQuizStages.length - 1) {
      if (userAnswer !== currentStage.correctAnswer) {
        setWrongAnswers((prev) => prev + 1); // functional update: aman dari double-click
      }
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    // 2. Soal terakhir: hitung total salah lalu tentukan ending
    const finalWrong = wrongAnswers + (userAnswer !== currentStage.correctAnswer ? 1 : 0);
    if (finalWrong === 0) {
      navigate('/endingsafe');
    } else if (finalWrong <= 2) {
      navigate('/endingneutral');
    } else {
      navigate('/endingrisky');
    }
  };

  return (
    <div className="AiQuizContainer">
      <Header />

      <main className="AiQuizContent">
        {/* Frame Gambar dengan Ornamen Gambar Bintang */}
        <div className="AiFrameWrapper">
          <img src={starTeal} alt="Star Decoration" className="StarTeal" />
          <img src={starPurple} alt="Star Decoration" className="StarPurple" />

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
