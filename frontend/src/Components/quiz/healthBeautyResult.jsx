import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import './healthBeautyResult.css';

const HealthBeautyResult = () => {
  return (
    <div className="HbResultContainer">
      <Header />

      <main className="HbResultContent">
        <div className="HbResultBubble">
          <h1 className="HbResultTitle">Debunked!</h1>

          <p className="HbResultText">
            The main red flag to catch was{' '}
            <strong className="HbResultHighlight">“No medical source cited”</strong>. A health
            claim needs a real medical source — a doctor, a journal, or an official health
            agency.
          </p>

          <div className="HbResultFakeSignals">
            <p className="HbResultSubheading">Why the other two aren't credibility signals:</p>
            <p className="HbResultTextSmall">
              <strong>High number of likes</strong> — going viral doesn't make it true. Fake
              health posts are often the most shared.
            </p>
            <p className="HbResultTextSmall">
              <strong>Viral comments</strong> — being heavily discussed doesn't mean it's
              verified. Anyone can comment without checking a single source.
            </p>
          </div>

          <p className="HbResultText">
            And one more thing: toothpaste is{' '}
            <strong className="HbResultHighlight">not a safe or effective acne treatment</strong>.
            It can dry out and irritate your skin. Before trying or sharing a health claim, check
            a real medical source first.
          </p>
        </div>

        <Link to="/" className="HbResultRestartBtn">
          Restart
        </Link>
      </main>
    </div>
  );
};

export default HealthBeautyResult;