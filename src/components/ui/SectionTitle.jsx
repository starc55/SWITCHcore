import React from "react";
import "@/styles/ui/sectionTitle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SectionTitle = ({
  title,
  pageTitle,
  pageDescription,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>SWIFTcore | {t(pageTitle || title)}</title>
        <meta
          name="description"
          content={t(pageDescription || "site_description")}
        />

        <meta
          property="og:title"
          content={`SWIFTcore | ${t(pageTitle || title)}`}
        />
        <meta
          property="og:description"
          content={t(pageDescription || "site_description")}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content={`SWIFTcore | ${t(pageTitle || title)}`}
        />
        <meta
          name="twitter:description"
          content={t(pageDescription || "site_description")}
        />

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="section-title-wrapper">
        <motion.p
          className={`section-title ${className}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t(title)}
        </motion.p>
      </div>
    </>
  );
};

export default SectionTitle;
