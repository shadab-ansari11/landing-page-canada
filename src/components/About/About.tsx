import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "./About.css";

const About: React.FC = () => {
  const points = [
    {
      title: "Integrity",
      description: "Honest advice, even when it's not what you hoped to hear.",
    },
    {
      title: "Accuracy",
      description: "Details matter. We get them right, every time.",
    },
    {
      title: "Accessibility",
      description: "Complex tax explained in plain language you understand.",
    },
    {
      title: "Proactive Partnership",
      description: "We plan ahead to protect and grow your wealth year-round.",
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tagline-small">ABOUT TRUSTHAVEN</span>
          <h2>More Than Accountants. Your Financial Partners.</h2>
          <p>
            We combine deep Canadian tax knowledge with a proactive, year-round
            approach — so you're never caught off guard by CRA. From sole
            proprietors to growing corporations, we deliver precision and peace
            of mind.
          </p>
        </motion.div>

        <motion.div
          className="about-points"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {points.map((point, index) => (
            <div key={index} className="point-item">
              <div className="point-icon">
                <Check size={18} />
              </div>
              <div className="point-text">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
