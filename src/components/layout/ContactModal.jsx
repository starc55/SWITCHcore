import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/styles/contactModal.css";

const ContactModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        className="contact-button"
        onClick={toggleModal}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("contactModal")}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={toggleModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{t("orderFormTitle")}</h2>
              <form>
                <label htmlFor="name">{t("nameLabel")}:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("namePlaceholder")}
                  required
                />

                <label htmlFor="contact">{t("contactLabel")}</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder={t("contactPlaceholder")}
                  required
                />

                <label htmlFor="message">{t("messageLabel")}:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  required
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("submitButton")}
                </motion.button>
              </form>
              <motion.button
                className="close-button"
                onClick={toggleModal}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;
