import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import './aiQuizResult.css';

const AiQuizResult = ({ results }) => {
  const allCorrect = results.every(Boolean);
  const title = allCorrect
    ? "You're a Sharp Observer!"
    : "You're Getting There! Keep Questioning What You See.";

  const tips = [
    'Unnatural hands or fingers',
    'Inconsistent shadows',
    'Blurry accessories',
    "Lip movement doesn't match audio",
    'Missing original source',
    'Emotional or sensational captions',
  ];

  return (
    <div className="AiQuizResultContainer">
      <Header />

      <main className="AiQuizResultContent">
        <div className="AiScoreCircles">
          {results.map((correct, index) => (
            <span
              key={index}
              className={`AiScoreCircle ${correct ? 'AiCircleCorrect' : 'AiCircleWrong'}`}
            />
          ))}
        </div>

        <h2 className="AiResultTitle">{title}</h2>

        <p className="AiResultEduText">
          AI-generated content is becoming increasingly realistic. Looking realistic doesn't
          always mean it's authentic.
        </p>

        <div className="AiResultTips">
          <h3 className="AiResultTipsTitle">Things to watch out for</h3>
          <ul className="AiResultTipsList">
            {tips.map((tip) => (
              <li key={tip} className="AiResultTipItem">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="AiResultRestartBtn">
          Restart
        </Link>
      </main>
    </div>
  );
};

export default AiQuizResult;