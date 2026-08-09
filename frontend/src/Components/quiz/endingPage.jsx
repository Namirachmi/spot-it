import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import './endingPage.css';

const EndingPage = ({ title, message, quote, bgClass }) => {
  return (
    <div className={`EndingPageContainer ${bgClass}`}>
      <Header />

      <main className="EndingContent">
        <div className="EndingBubbleWrapper">
          <div className="EndingChatBubble">
            <h1 className="EndingTitle">{title}</h1>
            <p className="EndingMessage">{message}</p>
            {quote && <p className="EndingQuote">{quote}</p>}
          </div>
        </div>

        <Link to="/start" className="EndingRestartBtn">
          Restart
        </Link>
      </main>

    </div>
  );
};

export default EndingPage;