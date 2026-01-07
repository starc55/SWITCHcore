import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { BsFeather } from "react-icons/bs";
import "@/styles/chatButton.css";

const ChatButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="chat-fixed-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        aria-label={t("chat.openChat")}
      >
        <BsFeather size={28} />
        <motion.span
          className="chat-badge"
          initial={{ scale: 0 }}
          animate={{ scale: isOpen ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          1
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="chat-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="chat-widget"
              initial={{ opacity: 0, y: 50, scale: 0.85, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 50, scale: 0.85, rotateX: -15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              <div className="chat-header">
                <div className="chat-header-info">
                  <motion.div
                    className="chat-avatar"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BsFeather size={20} />
                  </motion.div>
                  <div>
                    <h4>{t("chat.headerTitle")}</h4>
                    <span className="chat-status">{t("chat.status")}</span>
                  </div>
                </div>
                <motion.button
                  className="chat-close-btn"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={t("chat.close")}
                >
                  ×
                </motion.button>
              </div>

              <div className="chat-messages">
                <motion.div
                  className="message received"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {t("chat.welcomeMessage")}
                </motion.div>
              </div>

              <div className="chat-input-area">
                <motion.input
                  type="text"
                  placeholder={t("chat.inputPlaceholder")}
                  className="chat-input"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />
                <motion.button
                  className="chat-send-btn"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  aria-label={t("chat.send")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4z"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
