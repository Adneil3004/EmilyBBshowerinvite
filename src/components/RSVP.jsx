import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';
import './RSVP.css';

export default function RSVP() {
  const [state, handleSubmit] = useForm('mlgqoeav');

  if (state.succeeded) {
    return (
      <section className="rsvp section">
        <motion.div
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rsvp-success">
            <CheckCircle size={48} className="success-icon" />
            <h3>¡Gracias por confirmar!</h3>
            <p>Tu respuesta ha sido registrada</p>
          </div>
        </motion.div>
      </section>
    );
  }

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

        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">Tu nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ingresa tu nombre completo"
            />
            <ValidationError field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label>¿Asistirás?</label>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="asistencia" value="Sí, asistiré" required />
                <span>Sí, asistiré</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="asistencia" value="No podré asistir" />
                <span>No podré asistir</span>
              </label>
            </div>
            <ValidationError field="asistencia" errors={state.errors} />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={18} />
            {state.submitting ? 'Enviando...' : 'Confirmar'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
