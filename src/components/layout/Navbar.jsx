import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobeEurope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import "@/styles/navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "uz", label: "O'zbekcha" },
    { code: "ru", label: "Русский" },
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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="navbar"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          initial="visible"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="navbar-container">
            <div className="navbar-content">
              <Link to="/" className="navbar-logo">
                SWIFTcore
              </Link>

              <div className="navbar-desktop-menu">
                {["about", "services","worknavbar", "contact"].map((item) => (
                  <Link key={item} to={`#${item}`} className="navbar-link">
                    {t(item)}
                  </Link>
                ))}
              </div>

              <div className="navbar-actions">
                <div className="navbar-lang-dropdown">
                  <button
                    onClick={() => setIsLangOpen((prev) => !prev)}
                    className="navbar-lang-button"
                  >
                    <FaGlobeEurope className="navbar-icon" />
                    {i18n.language.toUpperCase()}
                  </button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="navbar-lang-menu"
                      >
                        {languages.map((lang) => (
                          <motion.button
                            key={lang.code}
                            variants={itemVariants}
                            whileHover={{
                              x: 8,
                            }}
                            whileTap={{ scale: 0.98 }}
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

                <button className="navbar-hamburger" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? (
                    <LiaTimesSolid />
                  ) : (
                    <HiBars3BottomRight />
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
                  transition={{ duration: 0.3 }}
                  className="navbar-mobile-menu"
                >
                  {["home", "about", "services", "contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      className="navbar-mobile-link"
                      onClick={toggleMobileMenu}
                    >
                      {t(item)}
                    </a>
                  ))}
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
