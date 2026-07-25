import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css';

const TARGET = new Date('2026-08-15T15:30:00').getTime();

function calcRemaining() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(calcRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(calcRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds },
  ];

  return (
    <section className="countdown section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="countdown-title">Faltan...</h2>
        <div className="countdown-grid">
          {units.map(({ label, value }) => (
            <div key={label} className="countdown-unit">
              <span className="countdown-value">{String(value).padStart(2, '0')}</span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
