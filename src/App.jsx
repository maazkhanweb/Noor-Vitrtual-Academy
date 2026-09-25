import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Founder from "./pages/Founder";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";

import "./App.css";

/* =========================================================
   SCROLL TO TOP
   Automatically moves the page to the top whenever
   the route changes.
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* ================= SCROLL TO TOP ================= */}
        <ScrollToTop />

        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= MAIN CONTENT ================= */}
        <main className="page-content">
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* COURSES */}
            <Route
              path="/courses"
              element={<Courses />}
            />

            {/* FOUNDER */}
            <Route
              path="/founder"
              element={<Founder />}
            />

            {/* ADMISSION & FREE TRIAL */}
            <Route
              path="/admission"
              element={<Admission />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />

        {/* ================= FLOATING WHATSAPP ================= */}
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  );
}

export default App;