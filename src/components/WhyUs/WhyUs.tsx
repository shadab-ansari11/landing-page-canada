import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Users,
  Cpu,
  Building2,
  DollarSign,
} from "lucide-react";
import "./WhyUs.css";

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Deep Canadian Tax Expertise",
      description: "ITA and ETA specialists — we go well beyond the basics.",
    },
    {
      icon: <Clock size={32} />,
      title: "Year-Round Support",
      description: "Available anytime — not just at filing time.",
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Attention",
      description: "You're never a file number. Every client is unique.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Technology-Forward",
      description: "QuickBooks Online for real-time financial visibility.",
    },
    {
      icon: <Building2 size={32} />,
      title: "CRA Handles For You",
      description: "We act as your authorized representative with CRA.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Transparent Pricing",
      description: "Clear upfront fees — no surprises on your invoice.",
    },
  ];

  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tagline-small">WHY CHOOSE US</span>
          <h2>Why Clients Choose TrustHaven</h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-card-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
