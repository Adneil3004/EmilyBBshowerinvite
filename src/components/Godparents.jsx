import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './Godparents.css';

const parentsData = {
  title: "Mis papitos",
  father: "Josè Daniel Hernández Nicolas",
  mother: "Katia Lorena Aldana Cano"
};

export default function Godparents() {
  return (
    <section className="godparents section">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="godparents-title">{parentsData.title}</h2>
        
        <div className="godparents-grid">
          <motion.div 
            className="godparent-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="godparent-icon">
              <User size={20} />
            </div>
            <span className="godparent-label">Papá</span>
            <p className="godparent-name">{parentsData.father}</p>
          </motion.div>
          
          <motion.div 
            className="godparent-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="godparent-icon">
              <User size={20} />
            </div>
            <span className="godparent-label">Mamá</span>
            <p className="godparent-name">{parentsData.mother}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}