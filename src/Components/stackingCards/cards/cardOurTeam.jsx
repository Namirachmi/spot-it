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
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. </p>
          </div>
        </div>

        <div className="TeamCard HighlightPink">
          <div className='member'>
            <img src="/src/Assets/img/starTwo.png" alt="Member Number 2" className="imgNumber" />
            <h2> Keren S.</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. </p>
          </div>
        </div>

        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src="/src/Assets/img/starThree.png" alt="Member Number 3" className="imgNumber" />
            <h2> Namira R. </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. </p>
          </div>
        </div>
        </div>

        <div className="LayerGrid TeamRow">
        <div className="TeamCard HighlightOrange">
          <div className='member'>
            <img src="/src/Assets/img/starFour.png" alt="Member Number 4" className="imgNumber" />
            <h2> Ramzi A. R. </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. </p>
          </div>
        </div>

        <div className="TeamCard HighlightWhite">
          <div className='member'>
            <img src="/src/Assets/img/starFive.png" alt="Member Number 5" className="imgNumber" />
            <h2> Tiara K.</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. </p>
          </div>
        </div>

        </div>
        </div>
        

    </FolderWrapper>
  );
};

export default TeamCard;