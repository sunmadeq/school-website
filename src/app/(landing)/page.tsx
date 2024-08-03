import type { Metadata } from "next";
import * as ReactIcons from "@/components/base/icon";
import * as Accordion from "@/components/base/accordion";
import * as Switch from "@/components/base/switch";
import "./page.scss";

export const metadata: Metadata = {
  title: "Home",
  description: "This is the description of the home page."
};

export default function HomePage() {
  return (
    <>
      <div className="introduction">
        <div>
          <img className="introduction__image" src="/abstract/banner.png" alt="" />
        </div>
        <div>
          <div className="introduction__body">
            <div className="introduction__head">
              <p className="introduction__underline">Welcome to Little Learners Academy</p>
              <h1 className="introduction__title">
                <span>Where Young Minds Blossom </span>
                <span>and Dreams Take Flight.</span>
              </h1>
            </div>
            <p className="introduction__text">
              Our kinder garden school provides a nurturing and stimulating environment, fostering a
              love for learning that lasts a lifetime. Join us as we embark on an exciting
              educational journey together!
            </p>
          </div>

          <div className="introduction__card">
            <div>
              <p>+7000</p>
              <p>Students Graduated</p>
            </div>
            <div />
            <div>
              <p>+37</p>
              <p>Awards & Recognitions</p>
            </div>
            <div />
            <div>
              <p>+15</p>
              <p>Experienced Educators</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Children Deserve Bright Future</span>
          <h2 className="section__title">Our Benefits</h2>
          <p className="section__description">
            With a dedicated team of experienced educators, state-of-the-art facilities, and a
            comprehensive curriculum, we aim to lay a strong foundation for your child's future.
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="card">
            <ReactIcons.EducationIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Holistic Learning Approach</h3>
              <p className="card__text">
                Our curriculum focuses on nurturing cognitive, social, emotional, and physical
                development, ensuring a well-rounded education.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.CrownIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Experienced Educators</h3>
              <p className="card__text">
                Our passionate and qualified teachers create a supportive and stimulating learning
                environment.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.MaskIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Nurturing Environment</h3>
              <p className="card__text">
                We prioritize safety and provide a warm and caring atmosphere for every child.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.FlagIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Play-Based Learning</h3>
              <p className="card__text">
                We believe in the power of play to foster creativity, problem-solving skills, and
                imagination.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.GearIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Individualized Attention</h3>
              <p className="card__text">
                Our small class sizes enable personalized attention, catering to each child's unique
                needs.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.UnionIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Parent Involvement</h3>
              <p className="card__text">
                We foster a strong parent-school partnership to ensure seamless communication and
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Their Happy Words 🤗</span>
          <h2 className="section__title">Our Testimonials</h2>
          <p className="section__description">
            Our testimonials are heartfelt reflections of the nurturing environment we provide,
            where children flourish both academically and emotionally.
          </p>
        </div>
        <Switch.Provider>
          <Switch.Root>
            <Switch.Body>
              <div className="testimonial">
                <div className="testimonial__head">
                  <div>
                    <img src="/avatars/jennifer.png" alt="" />
                  </div>
                  <p>Jennifer B</p>
                </div>
                <div className="testimonial__body">
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                </div>
                <p className="testimonial__text">
                  Little Learners Academy has been a second home for my child. The caring staff and
                  engaging programs have made her excited to go to school every day!
                </p>
              </div>
              <div className="testimonial">
                <div className="testimonial__head">
                  <div>
                    <img src="/avatars/david.png" alt="" />
                  </div>
                  <p>David K</p>
                </div>
                <div className="testimonial__body">
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                </div>
                <p className="testimonial__text">
                  Choosing Little Learners Academy for my daughter was the best decision. She has
                  thrived in their nurturing and stimulating environment.
                </p>
              </div>
              <div className="testimonial">
                <div className="testimonial__head">
                  <div>
                    <img src="/avatars/emily.png" alt="" />
                  </div>
                  <p>Emily L</p>
                </div>
                <div className="testimonial__body">
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                  <ReactIcons.StarIcon />
                </div>
                <p className="testimonial__text">
                  My son's social and academic growth has been remarkable since joining Little
                  Learners Academy. I am grateful for the supportive and dedicated teachers.
                </p>
              </div>
            </Switch.Body>
            <Switch.Foot />
          </Switch.Root>
        </Switch.Provider>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Solutions For The Doubts</span>
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__description">
            Find all the essential information you need in our FAQ section, designed to address the
            most frequently asked questions and help you make informed decisions for your child's
            education.
          </p>
        </div>
        <Accordion.Provider>
          <Accordion.Root>
            <Accordion.Item id="1">
              <Accordion.Head>
                <Accordion.Title>
                  What are the school hours at Little Learners Academy?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer
                extended care options for parents who need early drop-off or late pick-up.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="2">
              <Accordion.Head>
                <Accordion.Title>
                  Is there a uniform policy for students?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="3">
              <Accordion.Head>
                <Accordion.Title>
                  What extracurricular activities are available for students?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="4">
              <Accordion.Head>
                <Accordion.Title>
                  What extracurricular activities are available for students?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="5">
              <Accordion.Head>
                <Accordion.Title>
                  How do you handle food allergies and dietary restrictions?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="6">
              <Accordion.Head>
                <Accordion.Title>
                  What is the teacher-to-student ratio at Little Learners Academy?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="7">
              <Accordion.Head>
                <Accordion.Title>
                  How do you handle discipline and behavior management?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item id="8">
              <Accordion.Head>
                <Accordion.Title>
                  How do I apply for admission to Little Learners Academy?
                </Accordion.Title>
                <Accordion.Trigger />
              </Accordion.Head>
              <Accordion.Body>
                This is the answer for this question.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Root>
        </Accordion.Provider>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Explore More</span>
          <h2 className="section__title">Navigate through our Pages</h2>
          <p className="section__description">
            Your gateway to discovering a wealth of valuable information about our kindergarten
            school, Feel free to explore and learn more about the enriching experiences that await
            your child at our kindergarten school
          </p>
        </div>
        <div className="section__body section__body--plan">
          <div className="page">
            <div className="page__head">
              <h3 className="page__name">About Us</h3>
              <div className="page__line" />
            </div>
            <p className="page__text">
              Discover our Mission, Values, and our unwavering commitment to providing the best
              learning experience for your child. Learn about our passionate educators and our
              engaging approach to early education.
            </p>
            <a className="page__link" href="/about-us">
              Learn More &rarr;
            </a>
          </div>
          <div className="page">
            <div className="page__head">
              <h3 className="page__name">Academics</h3>
              <div className="page__line" />
            </div>
            <p className="page__text">
              Delve into our comprehensive academic programs designed to stimulate young minds,
              foster creativity, and encourage a love for learning. Explore our well-rounded
              curriculum that nurtures both intellectual and social development.
            </p>
            <a className="page__link" href="/academics">
              Learn More &rarr;
            </a>
          </div>
          <div className="page">
            <div className="page__head">
              <h3 className="page__name">Student Life</h3>
              <div className="page__line" />
            </div>
            <p className="page__text">
              Peek into the vibrant and enriching world of Student Life at Little Learners Academy.
              Discover the array of extracurricular activities, arts and crafts, sports, and social
              events that make our school experience truly memorable.
            </p>
            <a className="page__link" href="/student-life">
              Learn More &rarr;
            </a>
          </div>
          <div className="page">
            <div className="page__head">
              <h3 className="page__name">Admission</h3>
              <div className="page__line" />
            </div>
            <p className="page__text">
              Learn about our Enrollment Process and how to secure your child's place at Little
              Learners Academy. Find information about our admission requirements, application
              deadlines, and available spaces.
            </p>
            <a className="page__link" href="/admission">
              Learn More &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
