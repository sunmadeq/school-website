import type { Metadata } from "next";
import * as Tabs from "@/components/base/tabs";
import * as Gallery from "@/components/base/gallery";
import * as ReactIcons from "@/components/base/icon";

export const metadata: Metadata = {
  title: "Academics",
  description: "This is the description of the academics page.",
};

export default function AcademicsPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__badge">Academics</h1>
          <p className="banner__title">Nurturing Young Minds for Success</p>
        </div>
        <div className="banner__body">
          <p className="banner__description">
            Welcome to our Academics page, where we take pride in providing a comprehensive and
            stimulating educational experience for your child. Our kindergarten school's academic
            program is thoughtfully designed to foster a love for learning while building a strong
            foundation of essential skills and knowledge. From language arts and mathematics to
            science and social studies, our curriculum is carefully crafted to spark curiosity and
            encourage active exploration.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Features</span>
          <h2 className="section__title">Our Special Features</h2>
          <p className="section__description">
            Our kinder garden school provides a nurturing and stimulating environment, fostering a
            love for learning that lasts a lifetime. Join us as we embark on an exciting educational
            journey together!
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="card">
            <ReactIcons.BookIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Thematic Learning</h3>
              <p className="card__text">
                Our curriculum is centered around engaging themes that capture children's
                imaginations. Each theme integrates multiple subjects, making learning enjoyable and
                relevant.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.SignalIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">STEAM Education</h3>
              <p className="card__text">
                We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics)
                programs that promote hands-on exploration, critical thinking, and problem-solving
                skills.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.PuzzleIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Language Immersion</h3>
              <p className="card__text">
                Through language immersion programs, children have the opportunity to learn a second
                language, enhancing cognitive development and global awareness.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.BrushIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Art and Creativity</h3>
              <p className="card__text">
                Art is celebrated at Little Learners Academy. Our art-focused activities encourage
                self-expression, creativity, and the appreciation of various art forms.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.SunIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Outdoor Education</h3>
              <p className="card__text">
                Our expansive outdoor learning spaces provide a stimulating environment for children
                to explore nature, fostering a connection with the environment.
              </p>
            </div>
          </div>
          <div className="card">
            <ReactIcons.StarIcon className="card__icon" />
            <div className="card__body">
              <h3 className="card__name">Play-Based Learning</h3>
              <p className="card__text">
                Play is an integral part of early childhood education. Our play-based approach
                enhances social skills, emotional development, and imaginative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Features</span>
          <h2 className="section__title">What Students Learn</h2>
          <p className="section__description">
            At Little Learners Academy, we strive to cultivate a love for learning and equip
            children with essential skills for their future success. Our academic programs cover a
            wide range of subjects, allowing students to develop a strong foundation and discover
            their interests. Some key areas of learning include
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="feature">
            <img className="feature__image" src="/features/language-arts.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Language Arts</h3>
              <p className="feature__text">
                Reading, writing, storytelling, and communication skills.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="feature__image" src="/features/mathematics.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Mathematics</h3>
              <p className="feature__text">
                Number sense, basic operations, problem-solving, and logic.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="feature__image" src="/features/science.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Science</h3>
              <p className="feature__text">
                Exploring the natural world through hands-on experiments and investigations.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="feature__image" src="/features/social-studies.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Social Studies</h3>
              <p className="feature__text">
                Cultivating an understanding of diverse cultures and communities.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="feature__image" src="/features/arts-and-crafts.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Arts and Crafts</h3>
              <p className="feature__text">
                Encouraging creativity through various art forms and crafts.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="feature__image" src="/features/physical-education.png" alt="" />
            <div className="feature__body">
              <h3 className="feature__name">Physical Education</h3>
              <p className="feature__text">
                Promoting physical fitness, coordination, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Gallery</span>
          <h2 className="section__title">Our Rooms Gallery</h2>
          <p className="section__description">
            Step into our Gallery and immerse yourself in a visual journey of cherished moments and
            unforgettable experiences at our kindergarten school.
          </p>
        </div>
        <Tabs.Provider defaultTab="all">
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="all">All</Tabs.Trigger>
              <Tabs.Trigger value="classrooms">Classrooms</Tabs.Trigger>
              <Tabs.Trigger value="library">Library</Tabs.Trigger>
              <Tabs.Trigger value="science-lab">Science Lab</Tabs.Trigger>
              <Tabs.Trigger value="computer-lab">Computer Lab</Tabs.Trigger>
              <Tabs.Trigger value="garden-and-nature-area">Garden and Nature Area</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Item value="classrooms">
              <Gallery.Provider>
                <Gallery.Root>
                  <Gallery.Images images={[
                    "/gallery/classrooms/1.png",
                    "/gallery/classrooms/2.png",
                    "/gallery/classrooms/3.png",
                    "/gallery/classrooms/4.png"
                  ]} />
                  <Gallery.Body>
                    <Gallery.Title>Classrooms</Gallery.Title>
                    <Gallery.Navigation />
                  </Gallery.Body>
                  <Gallery.Description>
                    Our well-equipped classrooms are designed to provide a nurturing and stimulating
                    learning environment. Each classroom is thoughtfully arranged to inspire creativity,
                    curiosity, and engagement.
                  </Gallery.Description>
                </Gallery.Root>
              </Gallery.Provider>
            </Tabs.Item>
            <Tabs.Item value="library">
              <Gallery.Provider>
                <Gallery.Root>
                  <Gallery.Images images={[
                    "/gallery/library/1.png",
                    "/gallery/library/2.png",
                    "/gallery/library/3.png",
                    "/gallery/library/4.png"
                  ]} />
                  <Gallery.Body>
                    <Gallery.Title>Library</Gallery.Title>
                    <Gallery.Navigation />
                  </Gallery.Body>
                  <Gallery.Description>
                    Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.
                  </Gallery.Description>
                </Gallery.Root>
              </Gallery.Provider>
            </Tabs.Item>
            <Tabs.Item value="science-lab">
              <Gallery.Provider>
                <Gallery.Root>
                  <Gallery.Images images={[
                    "/gallery/science-lab/1.png",
                    "/gallery/science-lab/2.png",
                    "/gallery/science-lab/3.png",
                    "/gallery/science-lab/4.png"
                  ]} />
                  <Gallery.Body>
                    <Gallery.Title>Science Lab</Gallery.Title>
                    <Gallery.Navigation />
                  </Gallery.Body>
                  <Gallery.Description>
                    Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.
                  </Gallery.Description>
                </Gallery.Root>
              </Gallery.Provider>
            </Tabs.Item>
            <Tabs.Item value="computer-lab">
              <Gallery.Provider>
                <Gallery.Root>
                  <Gallery.Images images={[
                    "/gallery/computer-lab/1.png",
                    "/gallery/computer-lab/2.png",
                    "/gallery/computer-lab/3.png",
                    "/gallery/computer-lab/4.png"
                  ]} />
                  <Gallery.Body>
                    <Gallery.Title>Computer Lab</Gallery.Title>
                    <Gallery.Navigation />
                  </Gallery.Body>
                  <Gallery.Description>
                    Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills
                  </Gallery.Description>
                </Gallery.Root>
              </Gallery.Provider>
            </Tabs.Item>
            <Tabs.Item value="garden-and-nature-area">
              <Gallery.Provider>
                <Gallery.Root>
                  <Gallery.Images images={[
                    "/gallery/garden-and-nature-area/1.png",
                    "/gallery/garden-and-nature-area/2.png",
                    "/gallery/garden-and-nature-area/3.png",
                    "/gallery/garden-and-nature-area/4.png"
                  ]} />
                  <Gallery.Body>
                    <Gallery.Title>Garden and Nature Area</Gallery.Title>
                    <Gallery.Navigation />
                  </Gallery.Body>
                  <Gallery.Description>
                    Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.
                  </Gallery.Description>
                </Gallery.Root>
              </Gallery.Provider>
            </Tabs.Item>
          </Tabs.Root>
        </Tabs.Provider>
      </section>
    </>
  );
}
