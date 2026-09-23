import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <span className="about-eyebrow">
            ABOUT NOOR VIRTUAL ACADEMY
          </span>

          <h1>
            Learn Quran.
            <br />
            <span>Build Character.</span>
          </h1>

          <p>
            Noor Virtual Academy is an online Quran learning platform
            dedicated to providing quality Islamic education through
            qualified teachers, flexible classes, and a supportive
            learning environment.
          </p>

          <Link
            to="/admission"
            className="about-hero-btn"
          >
            Start Your Free Trial
          </Link>

        </div>

      </section>


      {/* ================= ABOUT LEARNING BANNER ================= */}
      <section className="about-learning-banner">

        <div className="about-learning-banner-container">

          <img
            src="/about-learning-banner.png"
            alt="Noor Virtual Academy Online Quran Learning"
          />

        </div>

      </section>


      {/* ================= ABOUT CONTENT ================= */}
      <section className="about-content-section">

        <div className="about-content-container">

          <div className="about-section-heading">

            <span>
              OUR STORY
            </span>

            <h2>
              About Noor Virtual Academy
            </h2>

            <div className="heading-line"></div>

          </div>


          <div className="about-content-grid">

            {/* ================= LEFT CONTENT ================= */}
            <div className="about-text">

              <div className="about-story-image">

                <img
                  src="/about-story.png"
                  alt="Noor Virtual Academy Quran Learning"
                />

              </div>


              <p className="about-lead">
                Noor Virtual Academy was created with a simple vision:
                to make quality Quran and Islamic education accessible
                to students around the world.
              </p>


              <p>
                We believe that learning the Quran is not only about
                reading its words, but also about understanding its
                message and developing good character through its
                teachings.
              </p>


              <p>
                Our online learning environment allows students to
                learn from the comfort of their homes while receiving
                guidance from dedicated and qualified teachers.
              </p>


              <p>
                Whether a student is beginning with Noorani Qaida,
                improving Quran recitation, learning Tajweed, or
                studying Islamic teachings, Noor Virtual Academy aims
                to provide a structured and engaging learning journey.
              </p>

            </div>


            {/* ================= RIGHT FEATURE BOX ================= */}
            <div className="about-feature-box">

              <div className="feature-item">

                <div className="feature-icon">
                  01
                </div>

                <div>
                  <h3>
                    Quality Education
                  </h3>

                  <p>
                    Structured Quran and Islamic education designed
                    for different learning levels.
                  </p>
                </div>

              </div>


              <div className="feature-item">

                <div className="feature-icon">
                  02
                </div>

                <div>
                  <h3>
                    Qualified Teachers
                  </h3>

                  <p>
                    Learn under the guidance of dedicated and
                    experienced teachers.
                  </p>
                </div>

              </div>


              <div className="feature-item">

                <div className="feature-icon">
                  03
                </div>

                <div>
                  <h3>
                    Flexible Learning
                  </h3>

                  <p>
                    Convenient online classes designed around the
                    student's schedule.
                  </p>
                </div>

              </div>


              <div className="feature-item">

                <div className="feature-icon">
                  04
                </div>

                <div>
                  <h3>
                    Global Access
                  </h3>

                  <p>
                    Students can learn Quran from anywhere in the
                    world.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section">

        <div className="mission-container">

          <div className="mission-card">

            <span className="mission-number">
              01
            </span>

            <h2>
              Our Mission
            </h2>

            <p>
              To provide accessible, engaging, and quality Quranic
              education that helps students develop strong knowledge,
              faith, and character.
            </p>

          </div>


          <div className="mission-card featured">

            <span className="mission-number">
              02
            </span>

            <h2>
              Our Vision
            </h2>

            <p>
              To build a global learning community where students can
              connect with the Quran, understand Islamic values, and
              grow into confident and responsible individuals.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="about-stats">

        <div className="stat-item">

          <strong>
            100%
          </strong>

          <span>
            Online Learning
          </span>

        </div>


        <div className="stat-item">

          <strong>
            1:1
          </strong>

          <span>
            Personal Attention
          </span>

        </div>


        <div className="stat-item">

          <strong>
            24/7
          </strong>

          <span>
            Global Access
          </span>

        </div>


        <div className="stat-item">

          <strong>
            Free
          </strong>

          <span>
            Trial Class
          </span>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="about-cta-content">

          <span>
            BEGIN YOUR JOURNEY
          </span>

          <h2>
            Start Learning Quran Today
          </h2>

          <p>
            Take your first step with Noor Virtual Academy and
            experience our online learning environment.
          </p>

          <Link
            to="/admission"
            className="cta-button"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;