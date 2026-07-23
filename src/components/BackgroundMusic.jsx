import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import './BackgroundMusic.css';

export default function BackgroundMusic() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/sound/Tu_respirar.mp3" loop />
      <motion.button
        className={`music-toggle ${muted ? 'muted' : 'playing'}`}
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        aria-label={muted ? 'Activar música' : 'Silenciar música'}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.button>
    </>
  );
}
