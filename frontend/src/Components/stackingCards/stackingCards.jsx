import React from 'react';
import { motion } from 'framer-motion';
import AboutUsCard from './cards/cardAboutUs';
import AboutProjectCard from './cards/cardAboutOurProject';
import PhotoboothCard from './cards/cardOurPhotobooth';
import TeamCard from './cards/cardOurTeam';
import './stackingCards.css';

// Reusable Base Card Wrapper (Menangani Animasi & Sticky)
export const FolderWrapper = ({ children, bgColor, tabText, tabPosition = 'left', index }) => {
  const stickyTop = 100 + (index * 40); 

  return (
    <motion.div 
      className="sticky-card-wrapper"
      style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Ganti ke amount agar lebih responsif
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`folder-card tab-${tabPosition}`} style={{ backgroundColor: bgColor }}>
        <div className="folder-tab">
          <span>{tabText}</span>
        </div>
        <div className="folder-body">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// Main Stacking Container
const StackingCards = () => {
  return (
    <div id="about-us" className="cards-stack-container">
      <AboutUsCard index={0} />
      <AboutProjectCard index={1} />
      <PhotoboothCard index={2} />
      <TeamCard index={3} />
    </div>
  );
};

export default StackingCards;