import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "@/styles/aboutPage.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LightRay from "@/components/common/LightRay";
import SectionTitle from "@/components/ui/SectionTitle";
import Partner from "@/components/common/Partner";
import Contact from "@/components/layout/Contact";

const AboutPage = () => {
  const { t } = useTranslation();

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      rotateY: -20,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
    hover: {
      y: -20,
      scale: 1.08,
      rotateY: 10,
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const values = t("aboutPage.values", { returnObjects: true });

  return (
    <div className="about-page">
      <div className="lightray-background">
        <LightRay
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <Navbar />

      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("aboutPage.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t("aboutPage.heroSubtitle")}
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div className="story-content">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t("aboutPage.storyTitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("aboutPage.storyParagraph1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t("aboutPage.storyParagraph2")}
            </motion.p>
          </motion.div>
          <motion.div
            className="story-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder" />
          </motion.div>
        </div>
      </motion.section>

      <section className="values">
        <div className="container">
          <SectionTitle title={t("aboutPage.valuesSectionTitle")} />

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card-modern"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                viewport={{ once: true, amount: 0.4 }}
              >
                <div
                  className={`card-gradient-bg bg-gradient-to-br ${value.gradient}`}
                />
                <div className="card-content">
                  <motion.div
                    className="card-icon"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Partner />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
