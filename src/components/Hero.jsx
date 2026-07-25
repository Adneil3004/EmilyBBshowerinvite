import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const inviteData = {
  babyName: "Emily Guadalupe",
  date: "Sábado, 15 de Agosto 2026 3:30pm",
  verse: "Porque los hijos son herencia de Dios"
};

export default function Hero() {
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name') || 'Guest';
  }, []);

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src="./imgs/9102340.jpg" alt="Baby Shower" />
        </motion.div>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hola! 
          <br />
          <span className="hero-guest">{guestName}</span>
          <br />
          te invitamos a celebrar el baby shower de
        </motion.p>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {inviteData.babyName}
        </motion.h1>
        
        <motion.div 
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />
        
        <motion.p 
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {inviteData.date}
        </motion.p>
        
        <motion.p 
          className="hero-verse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {inviteData.verse}
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}