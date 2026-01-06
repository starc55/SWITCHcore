import React from "react";
import Navbar from "@/components/layout/Navbar";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Footer from "../components/layout/Footer";
import TrustedPage from "../components/common/TrustedPage";
import HorizontalScroll from "../components/common/HorizontalScroll";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <HorizontalScroll />
      <Services />
      <Work />
      <TrustedPage />
      <Footer />
    </div>
  );
};

export default Home;
