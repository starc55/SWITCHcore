import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "@/App.css";
import Home from "@/pages/Home";
import AboutPage from "./pages/AboutPage";
import ChatButton from "./components/layout/ChatButton";

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
      </Routes>
      <ChatButton />
    </Router>
  );
}

export default App;
