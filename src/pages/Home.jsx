import React from "react";
import Navbar from "@/components/layout/Navbar";
import Header from "./Header";
// import AboutSection from "./components/About";
import Services from "./Services";
import Work from "./Work";
import About from "./About";
// import Contact from "./components/Contact";
import TrustedPage from "@/components/common/TrustedPage";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import Footer from "@/components/layout/Footer";
import Partner from "../components/common/Partner";
import Contact from "../components/layout/Contact";

const Home = () => {
  return (
    <div>
      <Navbar currentPage="home" />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <HorizontalScroll />
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <Work />
      </section>
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
