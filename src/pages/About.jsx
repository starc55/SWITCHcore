import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "@/styles/about.css";

const About = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="about"
      className="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="about-head" variants={headerVariants}>
        <p className="about-header">{t("aboutHeader")}</p>
      </motion.div>

      <motion.p className="about-content" variants={contentVariants}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        facilis eveniet ad, rem odio tempora soluta eius saepe repudiandae
        fugiat cumque debitis blanditiis neque cum, doloremque repellendus
        ducimus laborum exercitationem ratione assumenda molestias iure
        quibusdam? Totam iusto eaque perspiciatis ipsum!
      </motion.p>
    </motion.div>
  );
};

export default About;
