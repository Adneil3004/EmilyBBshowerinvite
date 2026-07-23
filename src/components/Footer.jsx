import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
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
      </motion.div>
    </footer>
  );
}