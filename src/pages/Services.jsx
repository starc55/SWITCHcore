import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/common/ServiceCard";
import service from "@/assets/service.svg";
import rafiki from "@/assets/rafiki.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "@/styles/service.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LightRay from "@/components/common/LightRay";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("service.card1.title"),
      description: t("service.card1.description"),
      image: service,
    },
    {
      title: t("service.card2.title"),
      description: t("service.card2.description"),
      image: rafiki,
      reverse: true,
    },
    {
      title: t("service.card3.title"),
      description: t("service.card3.description"),
      image: service,
    },
  ];

  return (
    <section id="services" className="services">
      <Helmet>
        <title>{t("service.title")}</title>
        <meta
          name="description"
          content={`${t("service.card1.description")} ${t(
            "service.card2.description"
          )} ${t("service.card3.description")}`}
        />
      </Helmet>
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
            {t("service.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t("service.heroSubtitle")}
          </motion.p>
        </div>
      </motion.section>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            index={index}
            reverse={service.reverse}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Services;
