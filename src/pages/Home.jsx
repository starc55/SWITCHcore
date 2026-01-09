import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Header from "./Header";
import About from "./About";
import TrustedPage from "@/components/common/TrustedPage";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import Footer from "@/components/layout/Footer";
import Partner from "../components/common/Partner";
import Contact from "../components/layout/Contact";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("heroHeader")}</title>
        <meta name="description" content={t("heroSubheader")} />
      </Helmet>
      <Navbar currentPage="home" />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <HorizontalScroll />
      <TrustedPage />
      <section>
        <Partner />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
