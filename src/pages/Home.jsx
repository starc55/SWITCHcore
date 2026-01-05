import React from "react";
import Navbar from "@/components/layout/Navbar";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
