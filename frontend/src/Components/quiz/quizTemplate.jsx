import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header'; 
import './quizTemplate.css';

import { 
  topicSelectionStage, 
  breakingNewsStages, 
  healthBeautyStages 
} from './quizData';

const QuizTemplate = () => {
  const navigate = useNavigate(); 

  // State untuk menyimpan data topik yang sedang aktif (null saat masih di pemilihan topik)
  const [currentTopicStages, setCurrentTopicStages] = useState(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // Menentukan stage mana yang aktif saat ini
  const currentStage = currentTopicStages 
    ? currentTopicStages[currentStageIndex] 
    : topicSelectionStage;

  const handleOptionClick = (option) => {
  // 1. Pindah halaman jika ada targetRoute (misal: B. AI or Real -> /quizai)
  if (option.targetRoute) {
    navigate(option.targetRoute);
    return;
  } 

  // 2. Jika di Stage 0 & memilih topik (A atau C)
  if (option.topicKey) {
    if (option.topicKey === 'breakingNews') {
      setCurrentTopicStages(breakingNewsStages);
    } else if (option.topicKey === 'healthBeauty') {
      setCurrentTopicStages(healthBeautyStages);
    }
    setCurrentStageIndex(0); // Set ke stage awal dari data topik baru
    return;
  }

  // 3. Pindah stage ke pertanyaan berikutnya dalam kuis yang sama
  if (option.nextStageIndex !== undefined) {
    setCurrentStageIndex(option.nextStageIndex);
  } 
  
  // 4. Pindah ke halaman ending saat kuis selesai
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