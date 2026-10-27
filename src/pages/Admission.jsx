import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import "./Admission.css";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const EMPTY_FORM = {
  studentName: "",
  guardianName: "",
  guardianRelation: "",
  email: "",
  whatsapp: "",
  applyFor: "",
  days: [],
};

function Admission() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (field) => (event) =>
    setForm((f) => ({ ...f, [field]: event.target.value }));

  const toggleDay = (day) =>
    setForm((f) => ({
      ...f,
      days: f.days.includes(day)
        ? f.days.filter((d) => d !== day)
        : [...f.days, day],
    }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.days.length === 0) {
      setStatus({ type: "error", message: "Please select at least one preferred day." });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await api("admissions", { method: "POST", body: form });
      setForm(EMPTY_FORM);
      setStatus({
        type: "success",
        message: "JazakAllah! Your application has been submitted. Our team will contact you soon.",
      });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setSending(false);
    }
  };

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
              Please complete the form below. Our team will contact
              you after receiving your application.
            </p>
          </div>

          {/* ================= ADMISSION FORM ================= */}
          <div className="google-form-wrapper">
            <form className="nva-form" onSubmit={handleSubmit}>

              <div className="nva-field">
                <label htmlFor="studentName">Student Name *</label>
                <input id="studentName" type="text" required maxLength={100}
                  value={form.studentName} onChange={update("studentName")} />
              </div>

              <div className="nva-field">
                <label htmlFor="guardianName">Guardian Name *</label>
                <input id="guardianName" type="text" required maxLength={100}
                  value={form.guardianName} onChange={update("guardianName")} />
              </div>

              <div className="nva-field">
                <label htmlFor="guardianRelation">Guardian Relation with Student *</label>
                <input id="guardianRelation" type="text" required maxLength={60}
                  placeholder="e.g. Father, Mother, Brother"
                  value={form.guardianRelation} onChange={update("guardianRelation")} />
              </div>

              <div className="nva-row">
                <div className="nva-field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" required maxLength={120}
                    value={form.email} onChange={update("email")} />
                </div>

                <div className="nva-field">
                  <label htmlFor="whatsapp">WhatsApp Number *</label>
                  <input id="whatsapp" type="tel" required maxLength={30}
                    placeholder="+92 300 1234567"
                    value={form.whatsapp} onChange={update("whatsapp")} />
                </div>
              </div>

              <fieldset className="nva-fieldset">
                <legend>What would you like to apply for? *</legend>
                {["Free Trial Classes", "Proper Admission"].map((option) => (
                  <label className="nva-check" key={option}>
                    <input
                      type="radio"
                      name="applyFor"
                      value={option}
                      required
                      checked={form.applyFor === option}
                      onChange={update("applyFor")}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="nva-fieldset">
                <legend>Select your preferred days for Quran Classes *</legend>
                <div className="nva-days">
                  {DAYS.map((day) => (
                    <label className="nva-check" key={day}>
                      <input
                        type="checkbox"
                        checked={form.days.includes(day)}
                        onChange={() => toggleDay(day)}
                      />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {status.message && (
                <div className={`nva-alert ${status.type}`} role="alert">
                  {status.message}
                </div>
              )}

              <button type="submit" className="nva-submit" disabled={sending}>
                {sending ? "Submitting..." : "Submit Application"}
              </button>

            </form>
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