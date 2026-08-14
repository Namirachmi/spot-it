import React from 'react';
import { FolderWrapper } from '../stackingCards';

const AboutUsCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#00E0BA" font-family="PeaceSans" tabText="About Us" tabPosition="left" index={index}>
      <div className="CardGrid">
        <div className='LayerGrid'>
          <p className='AboutUsContent'>
            Hello! We are AAA team from Indonesia. The word AAA stands for Antek-Antek Asing. Our team consist of five member from three different universities.
            Our project name, Spot It, is our first collaboration between the five of us. Spot It is our project for the UNESCO Hackathon 2026 within a theme in MIL (Media and Information Literacy).
          </p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default AboutUsCard;