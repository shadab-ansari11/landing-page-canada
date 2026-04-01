import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Michael Henderson",
      role: "Business Owner, Toronto",
      text: "TrustHaven transformed our accounting process. Their year-round support is invaluable for a growing business like ours.",
    },
    {
      name: "Sarah Villeneuve",
      role: "Real Estate Developer",
      text: "Highly professional and responsive. They handled our complex corporate tax structure with zero stress.",
    },
    {
      name: "David Channing",
      role: "Self-Employed Consultant",
      text: "Finally, accounts I can understand! Their ability to explain complex ITA rules in plain English is rare.",
    },
  ];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tagline-small">CLIENT SUCCESS</span>
          <h2>Trusted by Business Owners Across Canada</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--primary)"
                    color="var(--primary)"
                  />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-info">
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
