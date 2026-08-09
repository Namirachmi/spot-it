import React from 'react';
import { FolderWrapper } from '../StackingCards';

const PhotoboothCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#FFAF00" tabText="Our Photobooth" tabPosition="left" index={index}>
      <div className="PhotoboothFlex">
        <div className='LayerGrid'>
          <div className="MockUpBox">
            {/*<img src="" alt="Spot It Photobooth" />*/}
          </div>
          <p className='PhotoboothContent'> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default PhotoboothCard;