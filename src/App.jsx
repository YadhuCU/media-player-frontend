import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WatchHistory from "./pages/WatchHistory.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<WatchHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
