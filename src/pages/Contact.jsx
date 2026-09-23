import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h1>
            Contact
            <br />
            <span>Noor Virtual Academy</span>
          </h1>

          <p>
            Have a question about our courses, classes, timings, or
            admission process? Our team is here to help you.
          </p>

          <a
            href="#contact-options"
            className="contact-hero-btn"
          >
            Contact Us
          </a>

        </div>

      </section>


      {/* ================= CONTACT OPTIONS ================= */}
      <section
        className="contact-options-section"
        id="contact-options"
      >

        <div className="contact-container">

          <div className="contact-heading">

            <span>
              WE ARE HERE TO HELP
            </span>

            <h2>
              Get In Touch With Us
            </h2>

            <div className="contact-heading-line"></div>

            <p>
              Choose your preferred way to contact Noor Virtual
              Academy. We will be happy to assist you.
            </p>

          </div>


          <div className="contact-options-grid">

            {/* ================= WHATSAPP ================= */}
            <a
              href="https://wa.me/923189263632"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card whatsapp-card"
            >

              <div className="contact-card-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div className="contact-card-content">

                <h3>
                  WhatsApp
                </h3>

                <p>
                  Chat with our team directly on WhatsApp.
                </p>

                <span className="contact-card-link">
                  Start a Conversation →
                </span>

              </div>

            </a>


            {/* ================= EMAIL ================= */}
            <a
              href="mailto:noorvirtualacademy123@gmail.com"
              className="contact-card"
            >

              <div className="contact-card-icon email-icon">
                <FaEnvelope />
              </div>

              <div className="contact-card-content">

                <h3>
                  Email
                </h3>

                <p>
                  Send us your questions or admission inquiries.
                </p>

                <span className="contact-card-link">
                  Send an Email →
                </span>

              </div>

            </a>


            {/* ================= WORKING HOURS ================= */}
            <div className="contact-card">

              <div className="contact-card-icon">
                <FaClock />
              </div>

              <div className="contact-card-content">

                <h3>
                  Working Hours
                </h3>

                <p>
                  Our team is available during academy working
                  hours to assist you.
                </p>

                <span className="contact-card-link">
                  Flexible Support
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MESSAGE SECTION ================= */}
      <section className="message-section">

        <div className="contact-container">

          <div className="message-grid">

            {/* ================= LEFT ================= */}
            <div className="message-info">

              <span>
                SEND US A MESSAGE
              </span>

              <h2>
                Have a Question?
              </h2>

              <p>
                If you have any questions about our Quran courses,
                free trial classes, admission, timings, or teachers,
                feel free to contact us.
              </p>

              <p>
                You can also contact us through WhatsApp or our social
                media pages.
              </p>


              <div className="message-highlights">

                <div className="message-highlight">
                  <span className="highlight-icon">
                    ✓
                  </span>

                  <span>
                    Quick Response
                  </span>
                </div>


                <div className="message-highlight">
                  <span className="highlight-icon">
                    ✓
                  </span>

                  <span>
                    Friendly Support
                  </span>
                </div>


                <div className="message-highlight">
                  <span className="highlight-icon">
                    ✓
                  </span>

                  <span>
                    Admission Guidance
                  </span>
                </div>

              </div>

            </div>


            {/* ================= RIGHT FORM ================= */}
            <div className="contact-form-wrapper">

              <form
                className="contact-form"
                onSubmit={(event) => event.preventDefault()}
              >

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="phone">
                      Contact Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your number"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <select id="subject">

                    <option value="">
                      Select an option
                    </option>

                    <option value="admission">
                      Admission
                    </option>

                    <option value="free-trial">
                      Free Trial
                    </option>

                    <option value="courses">
                      Courses
                    </option>

                    <option value="timings">
                      Class Timings
                    </option>

                    <option value="general">
                      General Inquiry
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Write your message..."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SOCIAL MEDIA ================= */}
      <section className="social-section">

        <div className="contact-container">

          <div className="social-heading">

            <span>
              CONNECT WITH US
            </span>

            <h2>
              Follow Noor Virtual Academy
            </h2>

            <div className="contact-heading-line"></div>

            <p>
              Stay connected with us and receive updates about our
              courses, classes, and educational activities.
            </p>

          </div>


          <div className="social-grid">

            {/* ================= WHATSAPP ================= */}
            <a
              href="https://wa.me/923189263632"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card whatsapp-social"
              aria-label="Contact Noor Virtual Academy on WhatsApp"
            >

              <div className="social-icon">
                <FaWhatsapp />
              </div>

              <div>
                <h3>
                  WhatsApp
                </h3>

                <span>
                  Message Us
                </span>
              </div>

            </a>


            {/* ================= FACEBOOK ================= */}
            <a
              href="https://www.facebook.com/share/1DhqUF6bGU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card facebook-social"
              aria-label="Visit Noor Virtual Academy Facebook"
            >

              <div className="social-icon">
                <FaFacebookF />
              </div>

              <div>
                <h3>
                  Facebook
                </h3>

                <span>
                  Follow Us
                </span>
              </div>

            </a>


            {/* ================= TIKTOK ================= */}
            <a
              href="https://www.tiktok.com/@modern.english.le"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card tiktok-social"
              aria-label="Visit Noor Virtual Academy TikTok"
            >

              <div className="social-icon">
                <FaTiktok />
              </div>

              <div>
                <h3>
                  TikTok
                </h3>

                <span>
                  Follow Us
                </span>
              </div>

            </a>


            {/* ================= YOUTUBE ================= */}
            <a
              href="https://youtube.com/@abdulmajid-i1w2q?si=9mO5YOV796YI8rvY"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card youtube-social"
              aria-label="Visit Noor Virtual Academy YouTube"
            >

              <div className="social-icon">
                <FaYoutube />
              </div>

              <div>
                <h3>
                  YouTube
                </h3>

                <span>
                  Watch Our Videos
                </span>
              </div>

            </a>

          </div>

        </div>

      </section>


      {/* ================= LOCATION / VISUAL ================= */}
      <section className="location-section">

        <div className="location-visual">

          <div className="location-overlay"></div>

          <div className="location-content">

            <span>
              LEARN FROM ANYWHERE
            </span>

            <h2>
              Quran Education Without Borders
            </h2>

            <p>
              Noor Virtual Academy connects students with online
              Quran and Islamic education from wherever they are.
            </p>

            <Link
              to="/admission"
              className="location-btn"
            >
              Start Your Free Trial
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="contact-final-cta">

        <div className="contact-final-content">

          <span>
            READY TO START?
          </span>

          <h2>
            Begin Your Learning Journey
          </h2>

          <p>
            Join Noor Virtual Academy and take the first step towards
            meaningful Quran and Islamic education.
          </p>

          <Link
            to="/admission"
            className="final-cta-btn"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;