import React from 'react';
import { FolderWrapper } from '../stackingCards';

const AboutProjectCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#F5004F" tabText="About Our Project" tabPosition="right" index={index}>
      <div className="PinkFolder">
        <div className='LayerGrid'> 
          <p className='OurProjectContent'> 
            Spot It is a project for UNESCO Hackathon 2026 by AAA Team.
            We launched two type of version: Online and offline experience.
            Online experience is a story-based simulation which which participants encounter realistic scenarios, such as a viral post or a questionable headline, and must decide whether to share, verify, or disregard the content. On the other side, offline experience is a A complimentary photobooth installed in public spaces. Prior to access, participants complete a brief interactive misinformation challenge (1 to 2 minutes, 5 questions), after which they receive immediate feedback on their current level of awareness, along with a QR code directing them to the accompanying website. Our main target audience is Youth aged 16 to 25, particularly active social media users.
          </p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default AboutProjectCard;
