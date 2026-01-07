"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/styles/stats.css";
import { FaUsers } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { LuHandshake } from "react-icons/lu";
import { LiaThumbtackSolid } from "react-icons/lia";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const statsVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const TrustedPage = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: 150,
      plus: true,
      titleKey: "stats.happyClients",
      icon: <FaUsers />,
    },
    {
      number: 95,
      suffix: "%",
      titleKey: "stats.growthRate",
      icon: <AiOutlineRise />,
    },
    {
      number: 40,
      plus: true,
      titleKey: "stats.partners",
      icon: <LuHandshake />,
    },
    {
      number: 8,
      plus: true,
      titleKey: "stats.experience",
      icon: <LiaThumbtackSolid />,
    },
  ];

  return (
    <section className="trusted-section">
      <motion.div
        className="bg-circle circle-1"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5],
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="bg-circle circle-2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          rotate: [0, -360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="trusted-container">
        <motion.div
          className="trusted-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="trusted-title">
            {t("stats.mainTitle.part1")}{" "}
            <span className="highlight">{t("stats.mainTitle.highlight")}</span>{" "}
            {t("stats.mainTitle.part2")}
          </h1>
          <p className="trusted-desc">{t("stats.description")}</p>
        </motion.div>

        <div className="trusted-right">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`stats-card ${
                  index < 2 ? "card-upper" : "card-lower"
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={statsVariants}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.12,
                  y: -15,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">
                    <Counter target={stat.number} suffix={stat.suffix} />
                    {stat.plus && <span className="plus">+</span>}
                  </div>
                  <p className="stat-title">{t(stat.titleKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPage;
