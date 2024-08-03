import type { Metadata } from "next";
import * as Switch from "@/components/base/switch";
import * as ReactIcons from "@/components/base/icon";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is the description of the about us page."
};

export default function AboutPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__badge">Overview</h1>
          <p className="banner__title">Welcome to Little Learners Academy</p>
        </div>
        <div className="banner__body">
          <p className="banner__description">
            A leading kinder garden school dedicated to providing a nurturing and stimulating
            environment for young learners. With a commitment to excellence in early education, we
            believe in shaping curious minds and building a strong foundation for a lifelong love of
            learning. Our holistic approach fosters intellectual, social, emotional, and physical
            development, ensuring that each child reaches their full potential.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Mission & Visions</span>
          <h2 className="section__title">Our Mission & Visions</h2>
          <p className="section__description">
            We are here to provide a nurturing and inclusive environment where young minds can
            thrive, fostering a love for learning and personal growth.
          </p>
        </div>
        <div className="section__body section__body--plan">
          <div className="plan">
            <div className="plan__head">
              <h3 className="plan__name">Mission</h3>
              <img className="plan__icon" src="/plan/mission.png" alt="" />
            </div>
            <p className="plan__body">
              At Little Learners Academy, our mission is to inspire a passion for learning and
              empower young minds to become confident, compassionate, and creative individuals. We
              strive to create a safe and inclusive space where children thrive academically,
              socially, and emotionally, setting the stage for a successful educational journey.
            </p>
          </div>
          <div className="plan">
            <div className="plan__head">
              <h3 className="plan__name">Vision</h3>
              <img className="plan__icon" src="/plan/vision.png" alt="" />
            </div>
            <p className="plan__body">
              Our vision is to be a beacon of educational excellence, where children are encouraged
              to explore, discover, and express their unique talents. We aim to foster a generation
              of lifelong learners equipped with critical thinking, empathy, and a deep appreciation
              for diversity.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Achievements</span>
          <h2 className="section__title">Our Awards and Recognitions</h2>
          <p className="section__description">
            Little Learners Academy takes pride in our commitment to delivering high-quality
            education and outstanding student experiences. We are honored to have received various
            awards and recognitions for our dedication to early childhood education. These accolades
            reflect our team's relentless efforts in creating an exceptional learning environment
            for our students.
          </p>
        </div>
        <Switch.Provider>
          <Switch.Root>
            <Switch.Body>
              <div className="card">
                <ReactIcons.ClockIcon className="card__icon" />
                <div className="card__body">
                  <h3 className="card__name">Outstanding Early Childhood Education Award</h3>
                  <p className="card__text">
                    Presented by the National Association for the Education of Young Children
                    (NAEYC) in recognition of Little Learners Academy's commitment to delivering
                    exceptional early childhood education and fostering a nurturing learning
                    environment.
                  </p>
                </div>
              </div>
              <div className="card">
                <ReactIcons.SignalIcon className="card__icon" />
                <div className="card__body">
                  <h3 className="card__name">Innovative STEAM Education Award</h3>
                  <p className="card__text">
                    Awarded by the Education Excellence Association for our pioneering efforts in
                    introducing innovative STEAM (Science, Technology, Engineering, Arts, and
                    Mathematics) programs that ignite creativity and critical thinking in young
                    learners.
                  </p>
                </div>
              </div>
              <div className="card">
                <ReactIcons.SparkIcon className="card__icon" />
                <div className="card__body">
                  <h3 className="card__name">Environmental Stewardship Award</h3>
                  <p className="card__text">
                    Received from the Green Earth Society for our dedication to environmental
                    education, sustainable practices, and fostering a love for nature in our
                    students.
                  </p>
                </div>
              </div>
            </Switch.Body>
            <Switch.Foot />
          </Switch.Root>
        </Switch.Provider>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Progressive Journey</span>
          <h2 className="section__title">Our History</h2>
          <p className="section__description">
            Founded with a passion for early education in 2005, our kindergarten school boasts a
            rich history of empowering young learners to reach their potential through innovative
            teaching methods and a supportive learning environment.
          </p>
        </div>
        <div className="history">
          <div className="history__item">
            <div className="history__badge">
              <div className="history__image">
                <img src="/abstract/square.png" alt="" />
              </div>

              <p className="history__year">2023</p>
            </div>
            <div className="history__content">
              <h3 className="history__title">Resilience and Future Horizons</h3>
              <p className="history__description">
                Adapting to new challenges, we remained committed to our mission of providing an
                exceptional early education. Looking ahead with optimism, we envision a future
                filled with boundless possibilities as we continue shaping the leaders and thinkers
                of tomorrow.
              </p>
            </div>
          </div>
          <div className="history__item">
            <div className="history__badge">
              <div className="history__image">
                <img src="/abstract/square.png" alt="" />
              </div>
              <p className="history__year">2017</p>
            </div>
            <div className="history__content">
              <h3 className="history__title">Innovation and Technology</h3>
              <p className="history__description">
                Innovation became the driving force behind our kindergarten's progress from 2016 to
                2020. Embracing the latest educational technologies, we crafted engaging and
                interactive learning experiences for our students.
              </p>
            </div>
          </div>
          <div className="history__item">
            <div className="history__badge">
              <div className="history__image">
                <img src="/abstract/square.png" alt="" />
              </div>
              <p className="history__year">2012</p>
            </div>
            <div className="history__content">
              <h3 className="history__title">Expansion and Recognition</h3>
              <p className="history__description">
                These years marked as a period of expansion and recognition for our school. As we
                extended our facilities and enhanced our curriculum, we received accolades for our
                commitment to quality education and innovative teaching methodologies.
              </p>
            </div>
          </div>
          <div className="history__item">
            <div className="history__badge">
              <div className="history__image">
                <img src="/abstract/square.png" alt="" />
              </div>
              <p className="history__year">2005</p>
            </div>
            <div className="history__content">
              <h3 className="history__title">Inception and Growth</h3>
              <p className="history__description">
                Established in 2005, our kindergarten school began its journey with a vision to
                provide a nurturing space for young minds to explore, learn, and grow. Over the next
                five years, we witnessed significant growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Teachers With Expertise</span>
          <h2 className="section__title">Our Team Members</h2>
          <p className="section__description">
            At Little Learners Academy, our teaching team is the heart of our educational journey.
            We take great pride in employing highly qualified and passionate educators who possess a
            deep understanding of early childhood development. Our teachers create a warm and
            engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love
            for learning.
          </p>
        </div>
        <div className="section__body section__body--plan">
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/1.png" alt="" />
              <p className="member__name">Ms. Sarah Anderson</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification:Bachelor's Degree in Early Childhood Education
              </div>
              <div className="member__description">
                Ms. Sarah is a passionate educator with over 10 years of experience in guiding young
                minds. Her warm and nurturing approach creates a welcoming classroom environment
                where children feel comfortable to explore and learn.
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/2.png" alt="" />
              <p className="member__name">Mr. David Roberts</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification: Master's Degree in Elementary Education
              </div>
              <div className="member__description">
                With a strong background in elementary education, Mr. David brings a creative and
                interactive teaching style to his classroom. His enthusiasm for learning inspires
                students to ask questions and think critically.
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/3.png" alt="" />
              <p className="member__name">Ms. Emily Hernandez</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification: Diploma in Child Psychology
              </div>
              <div className="member__description">
                Ms. Emily's expertise in child psychology enables her to understand each child's
                unique needs and provide individualized support. Her caring nature fosters a strong
                sense of belonging and confidence in her students.
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/4.png" alt="" />
              <p className="member__name">Mr. Michael Turner</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification: Bachelor's Degree in Physical Education
              </div>
              <div className="member__description">
                Mr. Michael's passion for physical fitness and sports shines through in his
                energetic classes. He encourages students to stay active, promoting teamwork and a
                healthy lifestyle.
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/5.png" alt="" />
              <p className="member__name">Ms. Jessica Lee</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification: Master's Degree in Special Education
              </div>
              <div className="member__description">
                Ms. Jessica's specialization in special education allows her to create an inclusive
                and supportive learning environment for all students. She is dedicated to helping
                every child reach their full potential.
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member__head">
              <img className="member__image" src="/members/6.png" alt="" />
              <p className="member__name">Mr. William Parker</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="member__icon"
              >
                <path d="M17.668 2.912H2.332A2.332 2.332 0 0 0 0 5.244v9.513a2.332 2.332 0 0 0 2.332 2.332h15.336A2.332 2.332 0 0 0 20 14.757V5.244a2.332 2.332 0 0 0-2.332-2.332Zm1.218 12.473-.444.526-6.217-5.075-.963.916a1.866 1.866 0 0 1-2.524 0l-.963-.916-6.217 5.075-.444-.526 5.837-5.333L1.075 4.53l.348-.46L10 10.569l8.577-6.5.347.461-5.875 5.522 5.837 5.333Z" />
              </svg>
            </div>
            <div className="member__body">
              <div className="member__qualification">
                Qualification: Bachelor's Degree in Fine Arts
              </div>
              <div className="member__description">
                Mr. William's background in fine arts brings creativity and imagination to his
                classroom. Through art projects and activities, he nurtures the artistic expression
                and self-confidence of his students.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
