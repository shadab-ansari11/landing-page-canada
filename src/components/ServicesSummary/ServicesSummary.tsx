import React from "react";
import { motion } from "framer-motion";
import "./ServicesSummary.css";

const ServicesSummary: React.FC = () => {
  const items = [
    { title: "T1 & T2", subtitle: "Personal & Corporate Tax" },
    { title: "GST/HST", subtitle: "Filing & Representation" },
    { title: "QBO", subtitle: "Cloud Bookkeeping" },
    { title: "CCPC", subtitle: "Incorporation Specialists" },
  ];

  return (
    <div className="services-summary-wrapper">
      <div className="container">
        <motion.div
          className="services-summary-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="summary-grid">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="summary-item">
                  <span className="summary-subtitle">{item.subtitle}</span>
                  <h3 className="summary-title">{item.title}</h3>
                </div>
                {index < items.length - 1 && (
                  <div className="summary-divider" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSummary;
