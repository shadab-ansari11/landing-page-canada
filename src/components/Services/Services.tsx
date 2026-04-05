import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  BookOpen,
  Calculator,
  Users,
  ShieldCheck,
} from "lucide-react";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      icon: <User size={24} />,
      title: "Personal Tax (T1)",
      description:
        "Optimized returns for individuals, rental income, and self-employed.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Corporate Tax (T2)",
      description:
        "CCPC specialists — small business deductions, dividends, and more.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Bookkeeping",
      description:
        "Monthly reconciliation and reporting — using QuickBooks Online.",
    },
    {
      icon: <Calculator size={24} />,
      title: "GST/HST Filing",
      description:
        "Registration, ITC claims, quarterly/annual filings and audits.",
    },
    {
      icon: <Users size={24} />,
      title: "Payroll",
      description: "Remittances, T4 slips, and ongoing payroll management.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "CRA Audit Support",
      description:
        "Representation, objections, and correspondence handles for you.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tagline-small">WHAT WE DO</span>
          {/* <h2>Everything You Need, Under One Roof.</h2> */}
          <h2>Services</h2>
          <p>
            From your first tax return to complex corporate structures, we have
            the expertise to handle it all. Personal tax planning & filing. Tax
            compliance Corporate Tax, Payroll, GST & tax planning New
            Incorporations, changes and annual flings Book-keeping, fin.
            modelling & Financial Reports Financial Planning & Analysis,
            Compilations
          </p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
