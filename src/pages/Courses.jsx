import { Link } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const courses = [
    {
      number: "01",
      title: "Noorani Qaida",
      description:
        "Learn the basics of Quran reading, Arabic letters, pronunciation, and essential reading rules from the beginning.",
      image: "/images/course-noorani-qaida.png",
    },
    {
      number: "02",
      title: "Quran Recitation",
      description:
        "Improve your Quran reading with proper pronunciation, fluency, correction, and regular teacher guidance.",
      image: "/images/course-quran-recitation.png",
    },
    {
      number: "03",
      title: "Tajweed Course",
      description:
        "Learn the rules of Tajweed and develop accurate Quran recitation with proper articulation and pronunciation.",
      image: "/images/course-tajweed.png",
    },
    {
      number: "04",
      title: "Quran Translation",
      description:
        "Understand the meanings and messages of the Quran through guided translation and explanation.",
      image: "/images/course-quran-translation.png",
    },
    {
      number: "05",
      title: "Islamic Studies",
      description:
        "Explore Islamic teachings, manners, values, basic beliefs, Seerah, and everyday Islamic guidance.",
      image: "/images/course-islamic-studies.png",
    },
    {
      number: "06",
      title: "Sisters' Classes",
      description:
        "Dedicated online Quran and Islamic education opportunities for sisters in a comfortable learning environment.",
      image: "/images/course-sisters-classes.png",
    },
  ];

  return (
    <main className="courses-page">

      {/* ================= HERO ================= */}
      <section className="courses-hero">

        <div className="courses-hero-overlay"></div>

        <div className="courses-hero-content">

          <span className="courses-eyebrow">
            OUR COURSES
          </span>

          <h1>
            Quran Courses
            <br />
            <span>For Every Age & Goal</span>
          </h1>

          <p>
            Learn Quran and Islamic teachings through structured online
            courses designed for beginners, children, adults, and
            learners at different levels.
          </p>

          <Link
            to="/admission"
            className="courses-hero-btn"
          >
            Start Your Free Trial
          </Link>

        </div>

      </section>


      {/* ================= COURSE INTRO ================= */}
      <section className="courses-intro">

        <div className="courses-container">

          <div className="courses-heading">

            <span>
              LEARNING FOR EVERYONE
            </span>

            <h2>
              Explore Our Courses
            </h2>

            <div className="courses-heading-line"></div>

            <p>
              Choose a course according to your learning needs and
              start your Quranic education journey with Noor Virtual
              Academy.
            </p>

          </div>


          {/* ================= COURSE CARDS ================= */}
          <div className="courses-grid">

            {courses.map((course) => (
              <article
                className="course-card"
                key={course.number}
              >

                <div className="course-image-wrapper">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="course-image-placeholder">
                    <span>
                      {course.number}
                    </span>

                    <p>
                      Course Image
                    </p>
                  </div>

                  <div className="course-number">
                    {course.number}
                  </div>

                </div>


                <div className="course-card-content">

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    {course.description}
                  </p>

                  <Link
                    to="/admission"
                    className="course-link"
                  >
                    Learn More
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="courses-features">

        <div className="courses-container">

          <div className="features-heading">

            <span>
              WHY LEARN WITH NVA?
            </span>

            <h2>
              A Better Way to Learn Online
            </h2>

          </div>


          <div className="features-grid">

            <div className="course-feature">

              <div className="course-feature-icon">
                01
              </div>

              <h3>
                Qualified Teachers
              </h3>

              <p>
                Learn with dedicated teachers who guide students
                throughout their learning journey.
              </p>

            </div>


            <div className="course-feature">

              <div className="course-feature-icon">
                02
              </div>

              <h3>
                Flexible Timings
              </h3>

              <p>
                Convenient online classes that can fit different
                schedules and routines.
              </p>

            </div>


            <div className="course-feature">

              <div className="course-feature-icon">
                03
              </div>

              <h3>
                One-to-One & Group
              </h3>

              <p>
                Learning options designed according to students'
                individual needs.
              </p>

            </div>


            <div className="course-feature">

              <div className="course-feature-icon">
                04
              </div>

              <h3>
                Learn From Anywhere
              </h3>

              <p>
                Access Quran and Islamic education from the comfort
                of your home.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEARNING JOURNEY ================= */}
      <section className="learning-journey">

        <div className="courses-container">

          <div className="journey-grid">

            <div className="journey-content">

              <span>
                YOUR LEARNING JOURNEY
              </span>

              <h2>
                Learn at Your Own Pace
              </h2>

              <p>
                At Noor Virtual Academy, students receive guidance
                according to their level and learning requirements.
                Our goal is to create a comfortable environment where
                students can learn, practice, and improve.
              </p>

              <div className="journey-points">

                <div className="journey-point">
                  <span>✓</span>
                  <p>Beginner-friendly learning</p>
                </div>

                <div className="journey-point">
                  <span>✓</span>
                  <p>Personal teacher guidance</p>
                </div>

                <div className="journey-point">
                  <span>✓</span>
                  <p>Regular learning progress</p>
                </div>

                <div className="journey-point">
                  <span>✓</span>
                  <p>Online learning from anywhere</p>
                </div>

              </div>

              <Link
                to="/admission"
                className="journey-btn"
              >
                Join a Free Trial
              </Link>

            </div>


            {/* ================= PICTURE 7 ================= */}
            <div className="journey-visual">

              <img
                src="/images/courses-learning-journey.png"
                alt="Learn at Your Own Pace - Noor Virtual Academy"
                className="journey-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="courses-cta">

        <div className="courses-cta-content">

          <span>
            READY TO BEGIN?
          </span>

          <h2>
            Start Your Quran Learning Journey
          </h2>

          <p>
            Take the first step and experience learning with Noor
            Virtual Academy through a free trial class.
          </p>

          <Link
            to="/admission"
            className="courses-cta-btn"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Courses;