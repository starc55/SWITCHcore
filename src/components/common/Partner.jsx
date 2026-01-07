import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "@/styles/common/partner.css";

const Partner = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: "VATAN",
      logo: "https://static.wikitide.net/avidwiki/thumb/d/dd/Vatan_Film_Studio_%281992%29.png/400px-Vatan_Film_Studio_%281992%29.png", // Vatan Film Studio logosi (eng yaqin topilgan)
    },
    {
      name: "Fruits of Uzbekistan",
      logo: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=61555694723048",
    },
    {
      name: "TXT GROUP",
      logo: "https://visuresolutions.com/wp-content/uploads/2024/06/Images-Partner-TXT.png",
    },
    {
      name: "Butrinka",
      logo: null,
    },
    {
      name: "Ko'rgazmalar Markazi",
      logo: "https://uzexpocentre.uz/uploads/news/b6c3aedbb6d87e20cefdc78056c66cca.jpg",
    },
    {
      name: "CARDINAR",
      logo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="partners-section">
      <div className="container">
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="executive-text">{t("partners.executive")}</span>
          <h2 className="partners-title">
            {t("partners.count")} <span className="plus">+</span>{" "}
            {t("partners.supporters")}
          </h2>
        </motion.div>

        <motion.div
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-card"
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="partner-logo-wrapper">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-img"
                    loading="lazy"
                  />
                ) : (
                  <span className="partner-name-fallback">{partner.name}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
