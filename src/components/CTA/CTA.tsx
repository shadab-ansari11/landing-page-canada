import React from "react";
import { motion } from "framer-motion";
import "./CTA.css";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Experience Accounting Done Right?</h2>
          <p>
            Book your complimentary initial consultation today. No obligation —
            just clarity.
          </p>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK YOUR FREE CONSULTATION
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
