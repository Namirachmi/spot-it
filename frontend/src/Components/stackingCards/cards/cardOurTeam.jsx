import React from 'react';
import { FolderWrapper } from '../stackingCards';

import starOne from "../../../Assets/img/starOne.png";
import starTwo from "../../../Assets/img/starTwo.png";
import starThree from "../../../Assets/img/starThree.png";
import starFour from "../../../Assets/img/starFour.png";
import starFive from "../../../Assets/img/starFive.png";

const TeamCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#7C00FE" tabText="Our Team" tabPosition="right" index={index}>
      <div className="TeamGrid">
        <div className="LayerGrid TeamRow">
        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src={starOne} alt="Member Number 1" className="imgNumber" />
            <h2> Chevanya K. S.</h2>
            <p> Assigned as the Project Proposal & Game Flow Designer, responsible for drafting comprehensive project proposals and mapping out user flow, and interactive logic website. </p>
          </div>
        </div>

        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src={starTwo} alt="Member Number 2" className="imgNumber" />
            <h2> Keren S.</h2>
            <p> Handles all visual branding and graphic design, styling project proposals to crafting engaging opening visual sequences for videography and media assets. </p>
          </div>
        </div>

        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src={starThree} alt="Member Number 3" className="imgNumber" />
            <h2> Namira R. </h2>
            <p> Assigned as the UI/UX & Front-End Designer, responsible for crafting user interface designs in Figma and implementing them into functional React.js code. </p>
          </div>
        </div>
        </div>

        <div className="LayerGrid TeamRow">
        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src={starFour} alt="Member Number 4" className="imgNumber" />
            <h2> Ramzi A. R. </h2>
            <p> Drives the engine behind the website—handling all back-end quiz mechanics, game logic, and server deployment to keep the site running smoothly. </p>
          </div>
        </div>

        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src={starFive} alt="Member Number 5" className="imgNumber" />
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