import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="tagline">CANADIAN ACCOUNTING & TAX SPECIALISTS</span>
          <h1>
            Your Finances, handled with{" "}
            <span className="accent-text">Integrity</span> and Care.
          </h1>
          <p className="hero-description">
            Serving individuals, self-employed professionals, and corporations
            across Canada with expert tax planning, bookkeeping, and CRA
            representation.
          </p>
          <div className="hero-buttons">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK FREE CONSULTATION
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              OUR SERVICES
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative circle */}
      <div className="hero-circle-decoration"></div>
    </section>
  );
};

export default Hero;
