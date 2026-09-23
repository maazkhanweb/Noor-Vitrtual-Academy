import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    whatsapp: "https://wa.me/923189263632",
    facebook: "https://www.facebook.com/share/1DhqUF6bGU/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@modern.english.le",
    youtube: "https://youtube.com/@abdulmajid-i1w2q?si=9mO5YOV796YI8rvY",
  };

  return (
    <footer className="site-footer">

      {/* ================= TOP FOOTER ================= */}
      <div className="footer-main">

        <div className="footer-container footer-grid">

          {/* ================= BRAND ================= */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <div className="footer-logo-mark">
                <img
                  src="/images/logo.png"
                  alt="Noor Virtual Academy"
                />
              </div>

              <div className="footer-logo-text">
                <strong>NVA</strong>
                <span>NOOR VIRTUAL ACADEMY</span>
              </div>

            </Link>

            <p>
              Noor Virtual Academy is dedicated to providing accessible,
              structured and meaningful Quran and Islamic education through
              professional online learning.
            </p>

            <Link
              to="/admission"
              className="footer-trial-button"
            >
              Book Free Trial
              <span>→</span>
            </Link>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <div className="footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/courses">
                Courses
              </Link>

              <Link to="/founder">
                NVA Founder
              </Link>

              <Link to="/admission">
                Admission & Free Trial
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>

          </div>


          {/* ================= COURSES ================= */}
          <div className="footer-column">

            <h3>Our Courses</h3>

            <div className="footer-links">

              <Link to="/courses">
                Noorani Qaida
              </Link>

              <Link to="/courses">
                Quran Recitation
              </Link>

              <Link to="/courses">
                Tajweed Course
              </Link>

              <Link to="/courses">
                Quran Translation
              </Link>

              <Link to="/courses">
                Islamic Studies
              </Link>

              <Link to="/courses">
                Sisters' Classes
              </Link>

            </div>

          </div>


          {/* ================= CONNECT ================= */}
          <div className="footer-column">

            <h3>Connect With Us</h3>

            <div className="footer-social-links">

              {/* ================= WHATSAPP ================= */}
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social whatsapp"
                aria-label="Contact Noor Virtual Academy on WhatsApp"
              >

                <span className="social-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.86c0 2.09.55 4.13 1.6 5.92L.12 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.43-8.41ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.5-5.19C2.21 6.42 6.64 2 12.09 2c2.64 0 5.12 1.03 6.99 2.91a9.82 9.82 0 0 1 2.9 7c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
                    />
                  </svg>

                </span>

                <span>WhatsApp</span>

              </a>


              {/* ================= FACEBOOK ================= */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social facebook"
                aria-label="Follow Noor Virtual Academy on Facebook"
              >

                <span className="social-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.66.34-1 1-1Z"
                    />

                  </svg>

                </span>

                <span>Facebook</span>

              </a>


              {/* ================= TIKTOK ================= */}
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social tiktok"
                aria-label="Follow Noor Virtual Academy on TikTok"
              >

                <span className="social-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.94h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .59.05.86.13V10.1a6.3 6.3 0 1 0 5.49 6.25V9.4a8.22 8.22 0 0 0 4.81 1.55V7.5c-.36 0-.7-.03-1.04-.09Z"
                    />

                  </svg>

                </span>

                <span>TikTok</span>

              </a>


              {/* ================= YOUTUBE ================= */}
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social youtube"
                aria-label="Watch Noor Virtual Academy on YouTube"
              >

                <span className="social-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M23.5 6.19a3 3 0 0 0-2.11-2.12C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.57A3 3 0 0 0 .5 6.19 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.81 3 3 0 0 0 2.11 2.12c1.86.57 9.39.57 9.39.57s7.53 0 9.39-.57a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.81ZM9.6 15.5v-7L15.8 12l-6.2 3.5Z"
                    />

                  </svg>

                </span>

                <span>YouTube</span>

              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <p>
            © {currentYear} Noor Virtual Academy. All Rights Reserved.
          </p>

          <div className="footer-legal">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;