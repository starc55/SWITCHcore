import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "@/styles/contact.css";
import { IoBuildOutline } from "react-icons/io5";
import Aurora from "@/components/common/Aurora.jsx";

const Contact = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    window.open(
      "https://t.me/your_company_bot",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>{t("contactPage.header")}</title>
        <meta name="description" content={t("contactPage.description")} />
      </Helmet>
      <Aurora
        colorStops={["#667eea", "#764ba2", "#f093fb"]}
        blend={0.6}
        amplitude={1.2}
        speed={0.4}
      />
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        <motion.h2
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("contactPage.header")}
        </motion.h2>

        <motion.p
          className="contact-sub"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {t("contactPage.description")}
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-button-wrapper"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 80,
          delay: 0.4,
        }}
      >
        <motion.button
          className="contact-btn"
          onClick={handleContactClick}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 50px rgba(102, 126, 234, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>{t("contactPage.button")}</span>
          <IoBuildOutline size={28} />
          <motion.div className="btn-glow" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Contact;
