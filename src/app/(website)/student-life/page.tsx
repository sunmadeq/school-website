import type { Metadata } from "next";
import * as ReactIcons from "@/components/base/icon";

export const metadata: Metadata = {
  title: "Student Life",
  description: "This is the description of the student life page.",
};

export default function StudentLifePage() {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__badge">Enriching Student Life</h1>
          <p className="banner__title">Embracing Learning with Discovery and Joy</p>
        </div>
        <div className="banner__body">
          <p className="banner__text">
            Welcome to our Student Life page, where the magic of childhood comes alive through the
            enriching experiences and adventures that our students embark on each day. At our
            kindergarten school, we believe that learning goes beyond textbooks, and we strive to
            create a holistic and engaging environment that nurtures every aspect of a child's
            development.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section__header">
          <h2 className="section__badge">Contact Form</h2>
          <p className="section__title">Student Information</p>
          <p className="section__description">
            If you have specific questions or wish to request more information about Little Learners
            Academy, please complete the contact form below. Kindly provide the following details to
            help us better understand your needs
          </p>
        </div>
        <div className="section__body--grid">
          <div className="card">
            <ReactIcons.SparkIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Sports and Athletics</h3>
              <p className="card__text">
                Students can participate in various sports, from soccer and basketball to gymnastics
                and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.BrushIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Art and Creativity</h3>
              <p className="card__text">
                Our art classes and creative workshops provide a platform for students to express
                their creativity through painting, drawing, and other artistic forms.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.MusicIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Music and Performing Arts</h3>
              <p className="card__text">
                Students can discover their musical talents through singing, playing musical
                instruments, and participating in drama and theater performances.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.PuzzleIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Language Clubs</h3>
              <p className="card__text">
                Language clubs offer an opportunity for students to immerse themselves in different
                languages and cultures, fostering global awareness.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.FlaskIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Science Club</h3>
              <p className="card__text">
                The science club allows young scientists to explore the wonders of science through
                fun experiments and hands-on learning.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.MagicIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Cooking and Culinary Arts</h3>
              <p className="card__text">
                Cooking classes introduce students to the joys of preparing and tasting delicious
                and healthy meals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Features</span>
          <h2 className="section__title">Events & Celebrations</h2>
          <p className="section__description">
            At Little Learners Academy, we celebrate every milestone and create cherished memories
            for our students. Throughout the year, we host a variety of events and celebrations that
            bring the entire school community together. Some of our memorable events include
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="event">
            <img className="event__image" src="/events/annual-sports-day.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">Annual Sports Day</h3>
              <p className="event__description">
                A day filled with friendly competition, team spirit, and sportsmanship.
              </p>
            </div>
          </div>
          <div className="event">
            <img className="event__image" src="/events/cultural-festivals.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">Cultural Festivals</h3>
              <p className="event__description">
                Celebrations of diverse cultural festivals, promoting cultural exchange and
                appreciation.
              </p>
            </div>
          </div>
          <div className="event">
            <img className="event__image" src="/events/art-exhibitions.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">Art Exhibitions</h3>
              <p className="event__description">
                Showcasing our students' artistic talents through exhibitions and displays.
              </p>
            </div>
          </div>
          <div className="event">
            <img className="event__image" src="/events/science-fair.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">Science Fair</h3>
              <p className="event__description">
                A platform for budding scientists to present their innovative projects and
                experiments.
              </p>
            </div>
          </div>
          <div className="event">
            <img className="event__image" src="/events/international-day.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">International Day</h3>
              <p className="event__description">
                A vibrant celebration of our diverse community, embracing cultures from around the
                world.
              </p>
            </div>
          </div>
          <div className="event">
            <img className="event__image" src="/events/graduation-ceremony.png" alt="" />
            <div className="event__body">
              <h3 className="event__title">Graduation Ceremony</h3>
              <p className="event__description">
                A significant milestone as our Kindergarten students prepare to embark on their
                academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Achievements</span>
          <h2 className="section__title">Student Support</h2>
          <p className="section__description">
            At Little Learners Academy, we are committed to providing a supportive and nurturing
            environment that meets the unique needs of each student. Our student support services
            include
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="card">
            <ReactIcons.LightIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Counseling</h3>
              <p className="card__text">
                Professional counselors offer guidance and support to students, addressing their
                emotional and social well-being.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.BookIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Learning Support</h3>
              <p className="card__text">
                Our educators provide additional assistance to students who may require extra
                support in their academic journey.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.UnionIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Parent-Teacher Collaboration</h3>
              <p className="card__text">
                We foster a strong partnership with parents to ensure seamless communication and
                mutual support in a child's development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
