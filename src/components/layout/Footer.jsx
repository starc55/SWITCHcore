import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "@/styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        viewport={{
          once: true,
          margin: "-100px 0px",
        }}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              SWIFTcore
            </motion.h3>
            <p>
              Innovatsion yechimlar va ishonchli hamkorlik orqali biznesingizni
              yangi bosqichga olib chiqamiz.
            </p>
            <div className="social-links">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-col" custom={1} variants={itemVariants}>
            <h4>Tezkor Havolalar</h4>
            <ul>
              {[
                "Bosh sahifa",
                "Biz haqimizda",
                "Xizmatlar",
                "Bizning Ishlar",
                "Aloqa",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" custom={2} variants={itemVariants}>
            <h4>Xizmatlar</h4>
            <ul>
              {[
                "Web Dizayn",
                "Mobil Ilovalar",
                "Brending",
                "Digital Marketing",
                "UI/UX Dizayn",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-col newsletter-col"
            custom={3}
            variants={itemVariants}
          >
            <h4>Biz bilan aloqada bo'ling</h4>
            <div className="contact-info">
              {[
                { icon: FaEnvelope, text: "info@swiftcore.uz" },
                { icon: FaPhone, text: "+998 99 123 45 67" },
                { icon: FaMapMarkerAlt, text: "Toshkent, O'zbekiston" },
              ].map((contact, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <contact.icon size={16} /> {contact.text}
                </motion.p>
              ))}
            </div>
            <motion.form
              className="newsletter-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input type="email" placeholder="Email manzilingiz" required />
              <button type="submit">Xabaringizni qoldiring</button>
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
          <p>&copy; {currentYear} SWIFTcore. Barcha huquqlar himoyalangan.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
