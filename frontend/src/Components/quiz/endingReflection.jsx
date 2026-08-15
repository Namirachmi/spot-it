import React from 'react';
import './endingReflection.css';

const reflectionPoints = [
  'No official source',
  'Newly created account',
  'Emotional wording ("Share immediately!")',
  "Thousands of shares don't guarantee accuracy",
  'No confirmation from disaster authorities',
];

const milTips = [
  'Check official agencies first',
  'Compare multiple trusted sources',
  "Don't let urgency replace verification",
];

const EndingReflection = () => {
  return (
    <div className="EndingReflection">
      <div className="ReflectionCard">
        <h2 className="ReflectionHeading">Did You Spot These Red Flags?</h2>
        <ul className="ReflectionList">
          {reflectionPoints.map((point) => (
            <li key={point} className="ReflectionItem">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="MilTipsCard">
        <h2 className="MilTipsHeading">MIL Tips</h2>
        <ul className="MilTipsList">
          {milTips.map((tip) => (
            <li key={tip} className="MilTipItem">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EndingReflection;