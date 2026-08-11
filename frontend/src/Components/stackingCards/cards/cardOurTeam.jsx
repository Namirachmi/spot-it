import React from 'react';
import { FolderWrapper } from '../StackingCards';

const TeamCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#7C00FE" tabText="Our Team" tabPosition="right" index={index}>
      <div className="TeamGrid">
        <div className="LayerGrid TeamRow">
        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src="/src/Assets/img/starOne.png" alt="Member Number 1" className="imgNumber" />
            <h2> Chevanya K. S.</h2>
            <p> Assigned as the Project Proposal & Game Flow Designer, responsible for drafting comprehensive project proposals and mapping out user flow, and interactive logic website. </p>
          </div>
        </div>

        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src="/src/Assets/img/starTwo.png" alt="Member Number 2" className="imgNumber" />
            <h2> Keren S.</h2>
            <p> Handles all visual branding and graphic desig, styling project proposals to crafting engaging opening visual sequences for videography and media assets. </p>
          </div>
        </div>

        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src="/src/Assets/img/starThree.png" alt="Member Number 3" className="imgNumber" />
            <h2> Namira R. </h2>
            <p> Assigned as the UI/UX & Front-End Designer, responsible for crafting user interface designs in Figma and implementing them into functional React.js code. </p>
          </div>
        </div>
        </div>

        <div className="LayerGrid TeamRow">
        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src="/src/Assets/img/starFour.png" alt="Member Number 4" className="imgNumber" />
            <h2> Ramzi A. R. </h2>
            <p> Drives the engine behind the website—handling all back-end quiz mechanics, game logic, and server deployment to keep the site running smoothly. </p>
          </div>
        </div>

        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src="/src/Assets/img/starFive.png" alt="Member Number 5" className="imgNumber" />
            <h2> Tiara K.</h2>
            <p> Assigned as the Project Proposal & Game Flow Designer, responsible for drafting comprehensive project proposals and mapping out user flow, and interactive logic website. </p>
          </div>
        </div>

        </div>
        </div>
        

    </FolderWrapper>
  );
};

export default TeamCard;