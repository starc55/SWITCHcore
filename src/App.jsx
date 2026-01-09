import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "@/App.css";
import Home from "@/pages/Home";
import AboutPage from "./pages/AboutPage";
import ChatButton from "./components/layout/ChatButton";
import Services from "./pages/Services";
import Work from "./pages/Work";
import ContactModal from "./components/layout/ContactModal";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Helmet>
        <title>{t("heroHeader")}</title>
        <meta name="description" content={t("heroSubheader")} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Work />} />
      </Routes>
      <ContactModal />
      <ChatButton />
    </Router>
  );
}

export default App;
