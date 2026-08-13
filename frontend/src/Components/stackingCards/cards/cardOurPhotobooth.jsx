import React from 'react';
import { FolderWrapper } from '../stackingCards';

import photoBooth from "../../../Assets/img/photoBooth.png";

const PhotoboothCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#FFAF00" tabText="Our Photobooth" tabPosition="left" index={index}>
      <div className="PhotoboothFlex">
        <div className='LayerGrid'>
          <div className="MockUpBox">
            <img src={photoBooth} alt="Spot It Photobooth" />
          </div>
          <p className='PhotoboothContent'> 
            A complimentary photobooth installed in public spaces. Prior to access, participants complete a brief interactive misinformation challenge (1 to 2 minutes, 5 questions), after which they receive immediate feedback on their current level of awareness, along with a QR code directing them to the accompanying website.
          </p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default PhotoboothCard;
