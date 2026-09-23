import { useState } from "react";
import { Link } from "react-router-dom";
import "./Founder.css";

function Founder() {
  const [photoError, setPhotoError] = useState(false);

  const qualifications = [
    "Bachelor’s / Master’s Degree in Islamic Studies",
    "Extensive Experience in Quran Education",
    "Certified Quran Teacher",
    "Passionate About Online Islamic Education",
    "Committed to Student Development",
  ];

  return (
    <main className="founder-page">

      {/* ================= HERO ================= */}
      <section className="founder-hero">

        <div className="founder-hero-overlay"></div>

        <div className="founder-hero-content">

          <span className="founder-eyebrow">
            NVA FOUNDER & COORDINATOR
          </span>

          <h1>
            A Vision for
            <br />
            <span>Brighter Generations</span>
          </h1>

          <p>
            Building a meaningful online learning environment where
            students can connect with the Quran, develop knowledge,
            and grow with strong Islamic values.
          </p>

        </div>

      </section>


      {/* ================= FOUNDER PROFILE ================= */}
      <section className="founder-profile">

        <div className="founder-container">

          <div className="founder-profile-grid">

            {/* ================= PHOTO ================= */}
            <div className="founder-photo-section">

              <div className="founder-photo-frame">

                {!photoError && (
                  <img
                    src="/founder.png"
                    alt="NVA Founder"
                    className="founder-photo"
                    onError={() => setPhotoError(true)}
                  />
                )}

                {photoError && (
                  <div className="founder-photo-placeholder">

                    <div className="placeholder-icon">
                      NVA
                    </div>

                    <span>
                      Founder Photo
                    </span>

                    <small>
                      Image could not be loaded
                    </small>

                  </div>
                )}

              </div>


              <div className="founder-photo-caption">

                <strong>
                  Name Here
                </strong>

                <span>
                  Founder & Coordinator
                </span>

              </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="founder-profile-content">

              <span className="section-label">
                MEET THE FOUNDER
              </span>

              <h2>
                Leading With
                <br />
                <span>Knowledge & Purpose</span>
              </h2>

              <div className="gold-line"></div>

              <p className="founder-lead">
                Noor Virtual Academy was established with the vision
                of making quality Quran and Islamic education more
                accessible to students around the world.
              </p>

              <p>
                With a strong passion for Quranic education and
                student development, the founder believes that online
                education can provide a flexible and meaningful
                learning environment for children, young people, and
                adults.
              </p>

              <p>
                The aim is not only to help students improve their
                Quran reading, but also to encourage understanding,
                good character, discipline, and a connection with
                Islamic values.
              </p>

              <Link
                to="/admission"
                className="founder-btn"
              >
                Start Your Free Trial
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= QUALIFICATIONS ================= */}
      <section className="founder-qualifications">

        <div className="founder-container">

          <div className="qualifications-heading">

            <span>
              PROFESSIONAL BACKGROUND
            </span>

            <h2>
              Qualifications & Experience
            </h2>

            <div className="gold-line center"></div>

            <p>
              Dedicated to maintaining a quality learning environment
              based on knowledge, guidance, and student development.
            </p>

          </div>


          <div className="qualifications-grid">

            {qualifications.map((qualification, index) => (
              <div
                className="qualification-card"
                key={qualification}
              >

                <div className="qualification-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="qualification-check">
                  ✓
                </div>

                <p>
                  {qualification}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= FOUNDER MESSAGE ================= */}
      <section className="founder-message">

        <div className="founder-container">

          <div className="founder-message-box">

            <div className="quote-mark">
              “
            </div>

            <span>
              A MESSAGE FROM THE FOUNDER
            </span>

            <h2>
              Education That Builds
              <br />
              <span>Knowledge, Faith & Character</span>
            </h2>

            <p>
              Our goal is to create a learning environment where
              every student feels supported, respected, and motivated
              to improve. We believe that Quranic education can help
              shape not only knowledgeable students, but also people
              with strong character and values.
            </p>

            <div className="founder-signature">

              <span>
                Name Here
              </span>

              <small>
                Founder & Coordinator
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}
      <section className="founder-values">

        <div className="founder-container">

          <div className="values-heading">

            <span>
              OUR VALUES
            </span>

            <h2>
              What Guides Our Work
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-card">

              <div className="value-icon">
                01
              </div>

              <h3>
                Knowledge
              </h3>

              <p>
                Encouraging students to learn, understand, and
                continuously improve their knowledge.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                02
              </div>

              <h3>
                Faith
              </h3>

              <p>
                Helping students develop a meaningful connection
                with the Quran and Islamic teachings.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                03
              </div>

              <h3>
                Character
              </h3>

              <p>
                Promoting good manners, responsibility, respect, and
                positive personal development.
              </p>

            </div>


            <div className="value-card">

              <div className="value-icon">
                04
              </div>

              <h3>
                Excellence
              </h3>

              <p>
                Striving to provide students with a professional and
                supportive online learning experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="founder-cta">

        <div className="founder-cta-content">

          <span>
            JOIN OUR LEARNING COMMUNITY
          </span>

          <h2>
            Begin Your Journey With NVA
          </h2>

          <p>
            Experience our online Quran learning environment through
            a free trial class.
          </p>

          <Link
            to="/admission"
            className="founder-cta-btn"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Founder;