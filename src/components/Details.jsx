import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './Details.css';

const detailsData = {
  title: "Baby Shower",
  time: "3:30 PM",
  address: "Yucatán 509, Sta Maria Tulpetlac, 55400 Ecatepec de Morelos, Méx."
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Details() {
  return (
    <section className="details section">
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="details-title">
          Detalles del Evento
        </motion.h2>
        
        <motion.div variants={itemVariants} className="detail-card-full">
          <div className="detail-header">
            <img src="./imgs/bb.png" alt="Baby" className="detail-baby-img" />
            <h3>{detailsData.title}</h3>
          </div>

          <div className="detail-info">
            <div className="detail-info-row">
              <Clock size={16} />
              <span>{detailsData.time}</span>
            </div>
            <p className="detail-address">{detailsData.address}</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="detail-map">
          <iframe
            src="https://maps.google.com/maps?q=19.5624999,-99.0483194&z=17&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
