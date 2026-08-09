import React from 'react';
import { FolderWrapper } from '../StackingCards';

const AboutProjectCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#F5004F" tabText="About Our Project" tabPosition="right" index={index}>
      <div className="PinkFolder">
        <div className='LayerGrid'> 
          <p className='OurProjectContent'> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default AboutProjectCard;