import React from "react";
import homeImg from "@/assets/home.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "@/styles/header.css";
import Particles from "@/components/common/Particles.jsx";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Helmet>
        <title>{t("heroHeader")}</title>
        <meta name="description" content={t("heroSubheader")} />
      </Helmet>

      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <header className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content-header"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("heroHeader")}
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("heroSubheader")}
            </motion.p>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.01,
              rotate: 1,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={homeImg} alt="Hero illustration" className="hero-image" />
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>↓</span>
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
