import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const shareWhatsApp = () => {
    const url = window.location.href;
    const msg = encodeURIComponent(
      `Bebé Emily Guadalupe está en camino 👶🍼\n\n` +
      `Te invitamos a celebrar su baby shower\n` +
      `📅 Sábado, 15 de Agosto 2026 a las 3:30 PM\n` +
      `📍 Yucatán 509, Sta Maria Tulpetlac, Ecatepec de Morelos\n\n` +
      `Confirma tu asistencia aquí:\n${url}`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <footer className="footer">
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-icon">
          <Heart size={20} fill="currentColor" />
        </div>
        <p className="footer-text">
          Gracias por ser parte de este momento especial
        </p>
        <p className="footer-family">
          La familia Hernandez Aldana
        </p>
        <motion.button
          className="whatsapp-btn"
          onClick={shareWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={18} />
          Compartir por WhatsApp
        </motion.button>
      </motion.div>
    </footer>
  );
}
