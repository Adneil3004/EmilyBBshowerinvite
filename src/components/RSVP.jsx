import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './RSVP.css';

const GOOGLE_FORM_URL = 'https://forms.gle/45gQfYBdyuBpQde49';

export default function RSVP() {
  return (
    <section className="rsvp section">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="rsvp-title">Confirmar Asistencia</h2>
        <p className="rsvp-subtitle">Tu presencia es muy importante para nosotros</p>
        
        <motion.a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="submit-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={18} />
          Confirmar Asistencia
        </motion.a>
      </motion.div>
    </section>
  );
}
