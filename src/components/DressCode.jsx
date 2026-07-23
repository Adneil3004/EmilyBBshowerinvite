import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import './DressCode.css';

const dressCodeData = {
  title: "Código de Vestimenta",
  description: "Elegante",
  note: "Tonos pasteles bienvenidos"
};

export default function DressCode() {
  return (
    <section className="dresscode section">
      <motion.div 
        className="container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="dresscode-box"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="dresscode-icon">
            <Shirt size={28} />
          </div>
          <h2>{dressCodeData.title}</h2>
          <p className="dresscode-desc">{dressCodeData.description}</p>
          <p className="dresscode-note">{dressCodeData.note}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}