import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/common/ServiceCard";
import service from "@/assets/service.svg";
import rafiki from "@/assets/rafiki.svg";
import { useTranslation } from "react-i18next";
import "@/styles/service.css";

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

      <SectionTitle title="service.title" />

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
    </section>
  );
};

export default Services;
