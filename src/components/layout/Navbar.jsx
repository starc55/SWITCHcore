import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobeEurope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import "@/styles/navbar.css";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "uz", label: "O'zbekcha" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = useCallback(
    (sectionId) => {
      setIsMobileMenuOpen(false);

      const performScroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        const timer = setTimeout(() => {
          performScroll();
        }, 600);
        return () => clearTimeout(timer);
      } else {
        performScroll();
      }
    },
    [location.pathname, navigate]
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="navbar-container">
            <div className="navbar-content">
              <img src={logo} alt="" />
              <Link
                to="/"
                className="navbar-logo"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SWIFTcore
              </Link>

              <div className="navbar-desktop-menu">
                <Link
                  to="/about"
                  className={`navbar-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("about")}
                  </motion.span>
                  {location.pathname === "/about" && (
                    <motion.div
                      className="active-underline"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>

                <button
                  onClick={() => handleScrollTo("services")}
                  className="navbar-link"
                >
                  <motion.span
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("services")}
                  </motion.span>
                </button>

                <button
                  onClick={() => handleScrollTo("work")}
                  className="navbar-link"
                >
                  <motion.span
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("worknavbar")}
                  </motion.span>
                </button>

                <button
                  onClick={() => handleScrollTo("contact")}
                  className="navbar-link"
                >
                  <motion.span
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("contact")}
                  </motion.span>
                </button>
              </div>

              <div className="navbar-actions">
                <div className="navbar-lang-dropdown">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="navbar-lang-button"
                  >
                    <FaGlobeEurope className="navbar-icon" />
                    {i18n.language.toUpperCase()}
                  </button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="navbar-lang-menu"
                      >
                        {languages.map((lang) => (
                          <motion.button
                            key={lang.code}
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => changeLanguage(lang.code)}
                            className="navbar-lang-item"
                          >
                            {lang.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  className="navbar-hamburger"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <LiaTimesSolid size={28} />
                  ) : (
                    <HiBars3BottomRight size={28} />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="navbar-mobile-menu"
                >
                  <Link
                    to="/about"
                    className="navbar-mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span whileTap={{ scale: 0.95 }}>
                      {t("about")}
                    </motion.span>
                  </Link>

                  <button
                    onClick={() => handleScrollTo("services")}
                    className="navbar-mobile-link"
                  >
                    <motion.span whileTap={{ scale: 0.95 }}>
                      {t("services")}
                    </motion.span>
                  </button>

                  <button
                    onClick={() => handleScrollTo("work")}
                    className="navbar-mobile-link"
                  >
                    <motion.span whileTap={{ scale: 0.95 }}>
                      {t("worknavbar")}
                    </motion.span>
                  </button>

                  <button
                    onClick={() => handleScrollTo("contact")}
                    className="navbar-mobile-link"
                  >
                    <motion.span whileTap={{ scale: 0.95 }}>
                      {t("contact")}
                    </motion.span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
