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
    // 1. Cek apakah jawaban user salah
    const isIncorrect = userAnswer !== currentStage.correctAnswer;
    
    // Hitung total kesalahan terbaru
    const updatedWrongCount = isIncorrect ? wrongAnswers + 1 : wrongAnswers;

    if (isIncorrect) {
      setWrongAnswers(updatedWrongCount);
    }

    // 2. Navigasi / Pindah Soal
    if (currentIndex < aiQuizStages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // 3. Logika 3 kondisi ending di soal terakhir
      if (updatedWrongCount === 0) {
        // Benar semua (salah 0)
        navigate('/endingsafe');
      } else if (updatedWrongCount <= 2) {
        // Salah 1 atau 2
        navigate('/endingneutral');
      } else {
        // Salah 3 atau lebih
        navigate('/endingrisky');
      }
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