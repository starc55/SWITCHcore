import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home";
import AboutPage from "./pages/AboutPage";
import ChatButton from "./components/layout/ChatButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ChatButton />
    </Router>
  );
}

export default App;
