import React from 'react';
import { FolderWrapper } from '../StackingCards';

const AboutUsCard = ({ index }) => {
  return (
    <FolderWrapper bgColor="#00E0BA" font-family="SuperBouncer" tabText="About Us" tabPosition="left" index={index}>
      <div className="CardGrid">
        <div className='LayerGrid'>
          <p className='AboutUsContent'>
            kami adalah tim AAA krn kita adlh antek antek asing pramboro bukan candi loh yaxh kita lagi mau buat apa yachh ada yg bisa tebak ga nicch xixixixi selamat siangn yh momsxx selamat bekerja para warga sigmazxx kami adalah tim AAA krn kita adlh antek antek asing pramboro bukan candi loh yaxh kita lagi mau buat apa yachh ada yg bisa tebak ga nicch xixixixi selamat siangn yh momsxx selamat bekerja para warga sigmazxxkami adalah tim AAA krn kita adlh antek antek asing pramboro bukan candi loh yaxh kita lagi mau buat apa yachh ada yg bisa tebak ga nicch xixixixi selamat siangn yh momsxx selamat bekerja para warga sigmazxx
          </p>
        </div>
      </div>
    </FolderWrapper>
  );
};

export default AboutUsCard;