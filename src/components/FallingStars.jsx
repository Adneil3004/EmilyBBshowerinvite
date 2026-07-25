import { useEffect, useState } from 'react';
import './FallingStars.css';

function createStar(id) {
  return {
    id,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.3,
  };
}

export default function FallingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: 40 }, (_, i) => createStar(i));
    setStars(initial);

    let nextId = 40;
    const interval = setInterval(() => {
      setStars(prev => {
        const updated = [...prev.slice(1), createStar(nextId++)];
        return updated;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-stars" aria-hidden="true">
      {stars.map(star => (
        <span
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
