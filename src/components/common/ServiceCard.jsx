import React from "react";
import { motion } from "framer-motion";
import "@/styles/service.css";

const ServiceCard = ({ title, description, image, index, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`service-card ${reverse ? "service-card2" : ""}`}
    >
      <div className="service-card_content">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
