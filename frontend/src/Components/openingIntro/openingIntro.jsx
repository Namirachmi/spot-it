import React, { useRef, useEffect, useState } from 'react';
import './openingIntro.css';

const OpeningIntro = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [isRollingUp, setIsRollingUp] = useState(false); // State untuk memicu kelas roll-up

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Wajib dipasang agar autoplay berjalan di Safari/Chrome
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Handler saat video selesai atau tombol lewati diklik
  const handleStartRollUp = () => {
    setIsRollingUp(true); // Pemicu animasi slide/roll ke atas

    // Beri jeda 800ms (sesuai transition 0.8s di CSS) sebelum melepas komponen
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 800);
  };

  return (
    <div className={`IntroContainer ${isRollingUp ? 'roll-up' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleStartRollUp} /* Menjalankan animasi saat video selesai */
        className="IntroVideo"
      >
        {/* Jalur langsung dari akar folder public */}
        <source src="/video/spotItMotion.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video HTML5.
      </video>

      {/* Tombol Lewati memicu animasi roll-up juga */}
      <button className="SkipButton" onClick={handleStartRollUp}>
        Lewati
      </button>
    </div>
  );
};

export default OpeningIntro;
