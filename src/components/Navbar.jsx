import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "NVA Founder",
    path: "/founder",
  },
  {
    name: "Admission & Free Trial",
    path: "/admission",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        <div className="navbar-container">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <img
             src="/images/logo.png"
              alt="Noor Virtual Academy"
              className="navbar-logo-image"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="desktop-navigation">

            <div className="nav-links">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

            {/* BOOK FREE TRIAL */}
            <Link
              to="/admission"
              className="navbar-trial-button"
            >
              <span>Book Free Trial</span>
              <span className="trial-arrow">→</span>
            </Link>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`mobile-navigation ${
            menuOpen ? "show" : ""
          }`}
        >
          <div className="mobile-nav-inner">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="mobile-arrow">→</span>
              </NavLink>
            ))}

            <Link
              to="/admission"
              className="mobile-trial-button"
              onClick={closeMenu}
            >
              Book Free Trial
              <span>→</span>
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;