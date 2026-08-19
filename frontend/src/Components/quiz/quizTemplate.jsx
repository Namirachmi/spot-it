import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import HealthBeautyResult from './healthBeautyResult';
import './quizTemplate.css';

import { 
  topicSelectionStage
} from './quizData';

import { useScenario } from './useScenario';

const QuizTemplate = () => {
  const navigate = useNavigate(); 

  // Topik yang sedang aktif (null saat masih di pemilihan topik)
  const [topic, setTopic] = useState(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [showHealthBeautyResult, setShowHealthBeautyResult] = useState(false);

  // Stage bersumber dari API (fallback silent ke data statis quizData.js)
  const stages = useScenario(topic);

  // Menentukan stage mana yang aktif saat ini
  const currentStage = stages 
    ? stages[currentStageIndex] 
    : topicSelectionStage;

  const handleOptionClick = (option) => {
  // 1. Pindah halaman jika ada targetRoute (misal: B. AI or Real -> /quizai)
  if (option.targetRoute) {
    navigate(option.targetRoute);
    return;
  } 

  // 2. Jika di Stage 0 & memilih topik (A atau C)
  if (option.topicKey) {
    setTopic(option.topicKey);
    setCurrentStageIndex(0); // Set ke stage awal dari topik baru
    return;
  }

  // 3. Pindah stage ke pertanyaan berikutnya dalam kuis yang sama
  if (option.nextStageIndex !== undefined) {
    setCurrentStageIndex(option.nextStageIndex);
  } 
  
  // 4. Pindah ke halaman ending saat kuis selesai (Health & Beauty punya
  //    result screen sendiri, ditampilkan langsung tanpa pindah route)
  else if (option.endingRoute) {
    if (topic === 'healthBeauty') {
      setShowHealthBeautyResult(true);
    } else {
      navigate(option.endingRoute);
    }
  }
};

  // Health & Beauty selesai: tampilkan Debunked Session (state-based)
  if (showHealthBeautyResult) {
    return <HealthBeautyResult />;
  }

  // Selama fetch scenario dari API (biasanya < 300ms), tampilkan frame kosong
  // agar tidak ada flash stage pemilihan topik
  if (topic && !stages) {
    return (
      <div className="QuizPageContainer">
        <Header />
        <main className="QuizLayout">
          <section className="QuizLeftPanel">
            <div className="EmptyPanel"></div>
          </section>
          <div className="DividerLine"></div>
          <section className="QuizRightPanel"></section>
        </main>
      </div>
    );
  }

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