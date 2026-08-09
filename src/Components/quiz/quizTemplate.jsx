import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header'; 
import './quizTemplate.css';

import { quizStages } from './quizData';

const QuizTemplate = () => {
  const navigate = useNavigate(); 
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const currentStage = quizStages[currentStageIndex];

  const handleOptionClick = (option) => {
    // 1. Jika tombol memiliki targetRoute (seperti B. AI or Real)
    if (option.targetRoute) {
      navigate(option.targetRoute);
    } 
    // 2. Jika tombol mengarah ke stage berikutnya dalam kuis yang sama
    else if (option.nextStageIndex !== undefined) {
      setCurrentStageIndex(option.nextStageIndex);
    } 
    // 3. Jika di stage akhir dan mengarah ke ending
    else if (option.endingRoute) {
      navigate(option.endingRoute);
    }
  };

  return (
    <div className="QuizPageContainer">
      <Header />

      <main className="QuizLayout">
        {/* SISI KIRI: GAMBAR ATAU TEKS PERNYATAAN */}
        <section className="QuizLeftPanel">
          {currentStage.imageSrc ? (
            /* Jika ada gambar (Stage 1) */
            <div className="QuestionImageCard">
              <img 
                src={currentStage.imageSrc} 
                alt="Question Illustration" 
                className="QuestionImage" 
              />
            </div>
          ) : currentStage.officialText ? (
            /* Jika gambar hilang dan ada teks official di bawah (Stage 2) */
            <div className="OfficialTextContainer">
              <p className="OfficialText">{currentStage.officialText}</p>
            </div>
          ) : (
            /* Sisi kiri kosong (Stage 0) */
            <div className="EmptyPanel"></div>
          )}
        </section>

        {/* GARIS PEMBATAS TENGAH */}
        <div className="DividerLine"></div>

        {/* SISI KANAN: PERTANYAAN & OPSI JAWABAN */}
        <section className="QuizRightPanel">
          {/* Box Pertanyaan (Bisa 1 atau 2 Box) */}
          <div className="QuestionBoxGroup">
            {currentStage.questionBoxes.map((qBox) => (
              <div key={qBox.id} className="QuestionBox">
                <h2>{qBox.text}</h2>
              </div>
            ))}
          </div>

          {/* Container Tombol Opsi */}
          <div className="OptionsContainer">
            {currentStage.options.map((option) => (
              <button
                key={option.id}
                className={`OptionButton ${option.colorClass}`}
                onClick={() => handleOptionClick(option)}
              >
                <span className="OptionLabel">{option.label}</span>
                <span className="OptionText">{option.text}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizTemplate;