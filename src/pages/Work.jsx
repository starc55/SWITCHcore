import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "@/styles/work.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LightRay from "@/components/common/LightRay";

const projects = [
  {
    id: 1,
    titleKey: "projects.ecommerce.title",
    categoryKey: "projects.ecommerce.category",
    link: "#",
    image:
      "https://cdn.dribbble.com/userupload/9000434/file/original-903fac30a0a944a36dcfaeb29e373619.png?format=webp&resize=800x600&vertical=center",
  },
  {
    id: 2,
    titleKey: "projects.branding.title",
    categoryKey: "projects.branding.category",
    link: "#",
    image:
      "https://cdn.dribbble.com/userupload/7250580/file/original-69cf18ac8d332defc569e3b4c0a7fc46.jpg?resize=800x600&vertical=center",
  },
  {
    id: 3,
    titleKey: "projects.banking.title",
    categoryKey: "projects.banking.category",
    link: "#",
    image:
      "https://cdn.dribbble.com/userupload/27179821/file/original-9dae0043a39c082c004d7a28e53f83f3.png?resize=800x600&vertical=center",
  },
  {
    id: 4,
    titleKey: "projects.marketing.title",
    categoryKey: "projects.marketing.category",
    link: "#",
    image: "https://image.adsoftheworld.com/ci6zt8l3i526acrn16hpj8j1gybp",
  },
  {
    id: 5,
    titleKey: "projects.saas.title",
    categoryKey: "projects.saas.category",
    link: "#",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708016230/catalog/1515754269054631936/utr7mhe9adj94cva6m3i.webp",
  },
  {
    id: 6,
    titleKey: "projects.education.title",
    categoryKey: "projects.education.category",
    link: "#",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/10913e120865113.60ba0b4e2a2a6.png",
  },
  {
    id: 7,
    titleKey: "projects.restaurant.title",
    categoryKey: "projects.restaurant.category",
    link: "#",
    image:
      "https://cdn.dribbble.com/userupload/15252935/file/original-318b9c53f3f2b14ed6e013a40541550f.jpg?resize=800x600&vertical=center",
  },
  {
    id: 8,
    titleKey: "projects.fitness.title",
    categoryKey: "projects.fitness.category",
    link: "#",
    image:
      "https://cdn.dribbble.com/userupload/13798783/file/original-d9494398aa951c122ccb3e8aa562689a.png?resize=800x600&vertical=center",
  },
];

const Work = () => {
  const { t } = useTranslation();

  const description = projects.map((project) => t(project.titleKey)).join(", ");

  return (
    <div className="work-page">
      <Helmet>
        <title>{t("work.title")}</title>
        <meta name="description" content={description} />
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
            {t("work.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t("work.heroSubtitle")}
          </motion.p>
        </div>
      </motion.section>

      <section className="work-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              className={`project-card card-height-${(index % 3) + 1}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="project-img"
                  loading="lazy"
                />
              </div>

              <motion.div className="project-overlay">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="overlay-content"
                >
                  <h3>{t(project.titleKey)}</h3>
                  <p>{t(project.categoryKey)}</p>
                  <span className="view-link">{t("projects.viewMore")}</span>
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
