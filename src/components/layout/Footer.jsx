import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "@/styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const telegramBotLink = "https://t.me/swiftcore_bot";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <footer className="footer-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px" }}
        variants={containerVariants}
        className="footer-container"
      >
        <div className="footer-grid">
          <motion.div
            className="footer-col company-info"
            custom={0}
            variants={itemVariants}
          >
            <motion.h3
              className="footer-logo"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              SWIFTcore
            </motion.h3>
            <p>{t("footer.description")}</p>
            <div className="social-links">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-col" custom={1} variants={itemVariants}>
            <h4>{t("footer.quickLinks.title")}</h4>
            <ul>
              {[
                { text: t("navbar.home"), id: "home" },
                { text: t("navbar.about"), id: "about" },
                { text: t("navbar.services"), id: "services" },
                { text: t("navbar.work"), id: "work" },
                { text: t("navbar.contact"), id: "contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" custom={2} variants={itemVariants}>
            <h4>{t("footer.servicesTitle")}</h4>
            <ul>
              {t("footer.servicesList", { returnObjects: true }).map(
                (service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={telegramBotLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            className="footer-col newsletter-col"
            custom={3}
            variants={itemVariants}
          >
            <h4>{t("footer.contactTitle")}</h4>
            <div className="contact-info">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FaEnvelope size={16} />{" "}
                <a href="mailto:info@swiftcore.uz">info@swiftcore.uz</a>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FaPhone size={16} />{" "}
                <a href="tel:+998991234567">+998 99 123 45 67</a>
              </motion.p>
            </div>

            <motion.form
              className="newsletter-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                required
              />
              <button type="submit">{t("footer.newsletter.button")}</button>
            </motion.form>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} SWIFTcore. {t("footer.copyright")}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
