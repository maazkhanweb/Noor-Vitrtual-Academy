import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <div className="app">

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