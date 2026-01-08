import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobeEurope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Helmet } from "react-helmet-async";

import "@/styles/navbar.css";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = useMemo(
    () => [
      { code: "uz", label: "Uz" },
      { code: "ru", label: "Py" },
      { code: "en", label: "Eng" },
    ],
    []
  );

  const currentLangLabel = useMemo(
    () =>
      languages.find((lang) => lang.code === i18n.language)?.label ||
      "O'zbekcha",
    [i18n.language, languages]
  );

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
      setIsLangOpen(false);
    },
    [i18n]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        const timer = setTimeout(performScroll, 600);
        return () => clearTimeout(timer);
      } else {
        performScroll();
      }
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    const closeMenus = (e) => {
      if (
        !e.target.closest(".navbar-lang-dropdown") &&
        !e.target.closest(".navbar-hamburger")
      ) {
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenus);
    return () => document.removeEventListener("click", closeMenus);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <Helmet>
            <title>SWIFTcore | {t("site_title")}</title>
            <meta name="description" content={t("site_description")} />

            <meta
              property="og:title"
              content={`SWIFTcore | ${t("site_title")}`}
            />
            <meta property="og:description" content={t("site_description")} />
            <meta
              property="og:image"
              content="https://yourdomain.com/og-image.jpg"
            />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={i18n.language} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={`SWIFTcore | ${t("site_title")}`}
            />
            <meta name="twitter:description" content={t("site_description")} />
            <meta
              name="twitter:image"
              content="https://yourdomain.com/twitter-image.jpg"
            />

            <link rel="canonical" href={window.location.href} />
            {languages.map((lang) => (
              <link
                key={lang.code}
                rel="alternate"
                hrefLang={lang.code}
                href={`https://yourdomain.com/${
                  lang.code === "uz" ? "" : lang.code
                }${location.pathname}`}
              />
            ))}
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`https://yourdomain.com${location.pathname}`}
            />
          </Helmet>

          <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="navbar-container">
              <div className="navbar-content">
                <img
                  src={logo}
                  alt="SWIFTcore logo"
                  className="navbar-logo-img"
                />
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

                  {["services", "work", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleScrollTo(section)}
                      className="navbar-link"
                    >
                      <motion.span
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t(section === "work" ? "worknavbar" : section)}
                      </motion.span>
                    </button>
                  ))}
                </div>

                <div className="navbar-actions">
                  <div className="navbar-lang-dropdown">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLangOpen((prev) => !prev);
                      }}
                      className="navbar-lang-button"
                      aria-label="Tilni o'zgartirish"
                    >
                      <FaGlobeEurope className="navbar-icon" />
                      {currentLangLabel}
                    </button>

                    <AnimatePresence>
                      {isLangOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="navbar-lang-menu"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {languages.map((lang) => (
                            <motion.button
                              key={lang.code}
                              whileHover={{ x: 10 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => changeLanguage(lang.code)}
                              className={`navbar-lang-item ${
                                lang.code === i18n.language ? "active" : ""
                              }`}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMobileMenuOpen((prev) => !prev);
                    }}
                    aria-label="Menyuni ochish/yopish"
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

                    {["services", "work", "contact"].map((section) => (
                      <button
                        key={section}
                        onClick={() => handleScrollTo(section)}
                        className="navbar-mobile-link"
                      >
                        <motion.span whileTap={{ scale: 0.95 }}>
                          {t(section === "work" ? "worknavbar" : section)}
                        </motion.span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
