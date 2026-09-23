import { Link } from "react-router-dom";
import "./Admission.css";

function Admission() {
  return (
    <main className="admission-page">

      {/* ================= HERO ================= */}
      <section className="admission-hero">
        <div className="admission-hero-overlay"></div>

        <div className="admission-hero-content">
          <span className="admission-eyebrow">
            ADMISSION & FREE TRIAL
          </span>

          <h1>
            Begin Your
            <br />
            <span>NVA Journey</span>
          </h1>

          <p>
            Take the first step towards quality Quran and Islamic
            education. Fill out the admission form and our team will
            contact you to arrange your classes.
          </p>

          <a
            href="#admission-form"
            className="admission-hero-btn"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="admission-intro">
        <div className="admission-container">

          <div className="admission-heading">
            <span>JOIN NOOR VIRTUAL ACADEMY</span>

            <h2>Start Learning With Us</h2>

            <div className="admission-heading-line"></div>

            <p>
              Our admission process is simple. Submit your details
              through the form below and our team will get in touch
              with you regarding your preferred course, class timing,
              and free trial.
            </p>
          </div>

          {/* ================= BENEFITS ================= */}
          <div className="admission-benefits">

            <div className="admission-benefit-card">
              <div className="benefit-number">01</div>

              <h3>Choose Your Course</h3>

              <p>
                Select the Quran or Islamic education program that
                matches your learning goals.
              </p>
            </div>

            <div className="admission-benefit-card">
              <div className="benefit-number">02</div>

              <h3>Submit Your Details</h3>

              <p>
                Complete the admission form with your basic contact
                and class information.
              </p>
            </div>

            <div className="admission-benefit-card">
              <div className="benefit-number">03</div>

              <h3>Take Your Free Trial</h3>

              <p>
                Our team will contact you and help arrange your free
                trial class.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section
        className="admission-form-section"
        id="admission-form"
      >
        <div className="admission-container">

          <div className="form-section-heading">
            <span>ADMISSION FORM</span>

            <h2>Apply for Admission & Free Trial</h2>

            <p>
              Please complete the form below. Your information will
              be submitted directly through our Google Form.
            </p>
          </div>

          {/* ================= GOOGLE FORM ================= */}
          <div className="google-form-wrapper">

            <div className="google-form-header">

              <div className="google-form-icon">
                G
              </div>

              <div>
                <h3>Noor Virtual Academy</h3>

                <p>
                  Admission & Free Trial Form
                </p>
              </div>

            </div>

            <div className="google-form-container">

              {/* =================================================
                  GOOGLE FORM EMBED

                  Later replace YOUR_FORM_ID with the actual
                  Google Form ID.
              ================================================= */}

              <iframe
  title="Noor Virtual Academy Admission Form"
  src="https://forms.gle/X6NDmECZD4BBp2xt6"
  className="google-form-iframe"
  loading="lazy"
>
  Loading…
</iframe>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="admission-process">
        <div className="admission-container">

          <div className="process-heading">
            <span>WHAT HAPPENS NEXT?</span>

            <h2>After You Submit the Form</h2>
          </div>

          <div className="process-grid">

            <div className="process-item">
              <div className="process-icon">01</div>

              <h3>Form Received</h3>

              <p>
                Your admission information is received through our
                online form.
              </p>
            </div>

            <div className="process-item">
              <div className="process-icon">02</div>

              <h3>We Contact You</h3>

              <p>
                Our team contacts you using the details provided in
                your application.
              </p>
            </div>

            <div className="process-item">
              <div className="process-icon">03</div>

              <h3>Free Trial</h3>

              <p>
                We arrange your trial class according to the available
                schedule.
              </p>
            </div>

            <div className="process-item">
              <div className="process-icon">04</div>

              <h3>Continue Learning</h3>

              <p>
                After your trial, you can discuss the class schedule
                and continue your learning journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="admission-cta">

        <div className="admission-cta-content">

          <span>HAVE QUESTIONS?</span>

          <h2>Need Help With Admission?</h2>

          <p>
            If you have any questions about courses, timings, or the
            admission process, our team is ready to assist you.
          </p>

          <div className="admission-cta-buttons">

            <Link
              to="/contact"
              className="admission-contact-btn"
            >
              Contact Us
            </Link>

            <a
              href="#admission-form"
              className="admission-form-btn"
            >
              Apply Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Admission;