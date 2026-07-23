import { motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import './Details.css';

const detailsData = {
  title: "Baby Shower",
  time: "2:00 PM",
  location: "Salón de Fiestas Los Ángeles",
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
        
        <div className="details-grid">
          <motion.div variants={itemVariants} className="detail-card">
            <div className="detail-icon">
              <PartyPopper size={20} />
            </div>
            <h3>{detailsData.title}</h3>
            <p className="detail-time">{detailsData.time}</p>
            <p className="detail-location">{detailsData.location}</p>
            <p className="detail-address">{detailsData.address}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="detail-card">
            <div className="detail-icon detail-icon-amazon">
              <img src="/imgs/amazon_logo.png" alt="Amazon" />
            </div>
            <h3>Mesa de Regalos</h3>
            <p className="detail-location">Amazon</p>
            <a
              href="https://www.amazon.com.mx/baby-reg/josedaniel-hernndez-septiembre-2026-ecatepecdemorelos/1T9O9TWFVYS1U?ref_=cm_sw_r_cp_ud_dp_AXFQVM720PTAXQ8PD8R9"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link"
            >
              Ver mesa de regalos
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}