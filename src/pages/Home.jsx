import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const whyChooseUs = [
  {
    icon: "🎓",
    title: "Qualified Teachers",
    description:
      "Learn from experienced and dedicated Quran teachers who focus on proper guidance and student development.",
  },
  {
    icon: "🕐",
    title: "Flexible Classes",
    description:
      "Choose suitable class timings according to your routine and learning requirements.",
  },
  {
    icon: "📖",
    title: "Interactive Learning",
    description:
      "Engaging online classes designed to make Quran learning simple, comfortable and effective.",
  },
  {
    icon: "🌍",
    title: "Global Access",
    description:
      "Join Noor Virtual Academy from anywhere in the world through convenient online classes.",
  },
  {
    icon: "✨",
    title: "Free Trial",
    description:
      "Experience our teaching method before continuing with regular classes.",
  },
];

const stats = [
  {
    number: "100+",
    label: "Students",
  },
  {
    number: "20+",
    label: "Qualified Teachers",
  },
  {
    number: "10+",
    label: "Courses",
  },
  {
    number: "24/7",
    label: "Global Support",
  },
];

const faqs = [
  {
    question: "What courses does Noor Virtual Academy offer?",
    answer:
      "Noor Virtual Academy offers Quran and Islamic education courses including Noorani Qaida, Quran Recitation, Tajweed, Quran Translation, Islamic Studies and Sisters' Classes.",
  },
  {
    question: "How do online Quran classes work?",
    answer:
      "Classes are conducted online through a convenient digital learning setup. Students can attend their classes from home using a computer, tablet or mobile device.",
  },
  {
    question: "What are the class timings?",
    answer:
      "Our class timings are flexible and can be arranged according to the student's availability and the academy's available schedule.",
  },
  {
    question: "Do you offer a free trial class?",
    answer:
      "Yes. You can apply for a free trial class through our Admission & Free Trial page and experience our teaching method before continuing.",
  },
  {
    question: "Are classes one-to-one or group-based?",
    answer:
      "Depending on the course and available arrangements, students may be able to join one-to-one or group-based classes.",
  },
  {
    question: "How qualified are your teachers?",
    answer:
      "Our teachers are selected for their Quran teaching knowledge, experience and commitment to helping students learn effectively.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Visit our Admission & Free Trial page and complete the online admission form. Your submitted information will be received by our academy team.",
  },
  {
    question: "How can I contact Noor Virtual Academy?",
    answer:
      "You can contact us through WhatsApp, Facebook, TikTok or YouTube using the contact options available on our Contact page.",
  },
];

const youtubeVideos = [
  {
    title: "Noor Virtual Academy Introduction",
    videoId: "YOUR_VIDEO_ID_1",
  },
  {
    title: "Quran Learning at NVA",
    videoId: "YOUR_VIDEO_ID_2",
  },
  {
    title: "Online Quran Classes",
    videoId: "YOUR_VIDEO_ID_3",
  },
  {
    title: "Learn Quran with NVA",
    videoId: "YOUR_VIDEO_ID_4",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="hero-pattern"></div>

        <div className="home-container hero-container">
          <div className="hero-content">
            <span className="hero-small-title">
              NOOR VIRTUAL ACADEMY
            </span>

            <h1>
              Learn Quran.
              <span> Build Character.</span>
            </h1>

            <p className="hero-description">
              A professional online Quran academy helping students learn
              Quran, Tajweed and Islamic studies from the comfort of their
              homes.
            </p>

            <div className="hero-buttons">
              <Link to="/admission" className="primary-button">
                Book Free Trial
                <span>→</span>
              </Link>

              <Link to="/courses" className="secondary-button">
                Explore Courses
              </Link>
            </div>

            <div className="hero-features">
              <div>
                <span>✓</span>
                Qualified Teachers
              </div>

              <div>
                <span>✓</span>
                Flexible Timings
              </div>

              <div>
                <span>✓</span>
                Learn From Anywhere
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="arch arch-one">
              <div className="arch-image">
                <img
                  src="/images/home-quran.png"
                  alt="Quran learning"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="image-placeholder">
                  <span>۞</span>
                  <p>Quran Learning</p>
                </div>
              </div>
            </div>

            <div className="arch arch-two">
              <div className="arch-image">
                <img
                  src="/images/home-teacher.png"
                  alt="Qualified Quran teacher"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="image-placeholder">
                  <span>✦</span>
                  <p>Qualified Teachers</p>
                </div>
              </div>
            </div>

            <div className="arch arch-three">
              <div className="arch-image">
                <img
                  src="/images/home-student.png"
                  alt="Online Quran student"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="image-placeholder">
                  <span>☾</span>
                  <p>Online Learning</p>
                </div>
              </div>
            </div>

            <div className="hero-gold-circle circle-one"></div>
            <div className="hero-gold-circle circle-two"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="welcome-section">
        <div className="home-container welcome-grid">
          <div className="welcome-image">
            <div className="welcome-image-frame">
              <img
                src="/images/home-about.png"
                alt="Noor Virtual Academy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="welcome-placeholder">
                <span>ﷲ</span>
                <p>Noor Virtual Academy</p>
              </div>
            </div>

            <div className="experience-badge">
              <strong>100%</strong>
              <span>Online Learning</span>
            </div>
          </div>

          <div className="welcome-content">
            <span className="section-label">WELCOME TO NVA</span>

            <h2>
              Bringing the Light of Quran
              <span> to Your Home</span>
            </h2>

            <p>
              Noor Virtual Academy is dedicated to providing accessible,
              structured and meaningful Quran education for students of
              different ages and learning levels.
            </p>

            <p>
              Through qualified teachers, flexible online classes and a
              supportive learning environment, we aim to make Quran learning
              convenient for families around the world.
            </p>

            <div className="welcome-points">
              <div>
                <span>✓</span>
                Quran & Tajweed Education
              </div>

              <div>
                <span>✓</span>
                Individual Attention
              </div>

              <div>
                <span>✓</span>
                Student-Friendly Environment
              </div>

              <div>
                <span>✓</span>
                Global Online Access
              </div>
            </div>

            <Link to="/about" className="text-button">
              Discover Our Story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>
              Why Choose Noor Virtual Academy?
            </h2>

            <p>
              A learning experience designed around quality teaching,
              flexibility and the spiritual development of every student.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <article className="why-card" key={index}>
                <div className="why-icon">{item.icon}</div>

                <span className="card-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="card-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="stats-pattern"></div>

        <div className="home-container stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= QURAN QUOTE ================= */}
      <section className="quote-section">
        <div className="home-container">
          <div className="quote-card">
            <div className="quote-decoration quote-left">❝</div>

            <span className="quote-arabic">
              وَقُلْ رَبِّ زِدْنِي عِلْمًا
            </span>

            <p className="quote-text">
              “And say: My Lord, increase me in knowledge.”
            </p>

            <span className="quote-reference">
              Surah Taha — 20:114
            </span>

            <div className="quote-decoration quote-right">❞</div>
          </div>
        </div>
      </section>

      {/* ================= COURSES PREVIEW ================= */}
      <section className="home-courses-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-label">OUR PROGRAMS</span>

            <h2>
              Learn Quran With Purpose
            </h2>

            <p>
              Explore our carefully structured Quran and Islamic education
              programs.
            </p>
          </div>

       <div className="home-course-grid">

  {/* ================= COURSE 1 ================= */}
  <div className="home-course-card">

    <div className="home-course-image">
      <img
        src="/images/home-noorani-qaida.png"
        alt="Noorani Qaida"
      />
    </div>

    <h3>Noorani Qaida</h3>

    <p>
      Build a strong foundation in Quran reading and pronunciation.
    </p>

  </div>


  {/* ================= COURSE 2 ================= */}
  <div className="home-course-card">

    <div className="home-course-image">
      <img
        src="/images/home-quran-recitation.png"
        alt="Quran Recitation"
      />
    </div>

    <h3>Quran Recitation</h3>

    <p>
      Improve your Quran reading with proper pronunciation and flow.
    </p>

  </div>


  {/* ================= COURSE 3 ================= */}
  <div className="home-course-card">

    <div className="home-course-image">
      <img
        src="/images/home-tajweed.png"
        alt="Tajweed Course"
      />
    </div>

    <h3>Tajweed Course</h3>

    <p>
      Learn the rules of Tajweed for accurate and beautiful recitation.
    </p>

  </div>


  {/* ================= COURSE 4 ================= */}
  <div className="home-course-card">

    <div className="home-course-image">
      <img
        src="/images/home-islamic-studies.png"
        alt="Islamic Studies"
      />
    </div>

    <h3>Islamic Studies</h3>

    <p>
      Develop Islamic knowledge and understanding through structured
      lessons.
    </p>

  </div>

</div>

          <div className="center-button">
            <Link to="/courses" className="primary-button">
              View All Courses <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= YOUTUBE ================= */}
      <section className="youtube-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-label">WATCH & LEARN</span>

            <h2>
              Learn With Noor Virtual Academy
            </h2>

            <p>
              Explore our educational videos and stay connected with our
              learning community.
            </p>
          </div>

          <div className="youtube-grid">
            {youtubeVideos.map((video, index) => (
              <div className="youtube-card" key={index}>
                <div className="youtube-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>

                  <div className="youtube-placeholder">
                    <span>▶</span>
                    <p>Add YouTube Video</p>
                  </div>
                </div>

                <h3>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="home-cta-section">
        <div className="cta-pattern"></div>

        <div className="home-container home-cta-content">
          <div>
            <span className="section-label light-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Give Your Child the Gift of Quranic Education
            </h2>

            <p>
              Take the first step towards a meaningful and convenient Quran
              learning journey with Noor Virtual Academy.
            </p>
          </div>

          <Link to="/admission" className="gold-button">
            Book Your Free Trial
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-label">NEED HELP?</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to some of the most common questions about Noor
              Virtual Academy.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openFaq === index ? "faq-open" : ""
                }`}
                key={index}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;