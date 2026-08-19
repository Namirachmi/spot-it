// src/Components/quiz/QuizAiTemplate.jsx

import React, { useState } from 'react';
import Header from '../../header/header';
import { aiQuizStages } from './aiOrRealData';
import AiQuizResult from './aiQuizResult';
import './quizAiTemplate.css';

import starTeal from '../../../Assets/img/starTeal.png';
import starPurple from '../../../Assets/img/starPurple.png';

const QuizAiTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);

  const finished = results.length === aiQuizStages.length;

  const currentStage = aiQuizStages[currentIndex];
  const isVideo = currentStage?.imageSrc?.endsWith('.mp4');

  const handleAnswer = (userAnswer) => {
    const isCorrect = userAnswer === currentStage.correctAnswer;
    setResults((prev) => [...prev, isCorrect]);
    setCurrentIndex((prev) => prev + 1);
  };

  if (finished) {
    return <AiQuizResult results={results} />;
  }

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