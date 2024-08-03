import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission",
  description: "This is the description of the admission page.",
};

export default function AdmissionPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__badge">Admission</h1>
          <p className="banner__title">Join Our Family of Young Learners</p>
        </div>
        <div className="banner__body">
          <p className="banner__description">
            At Little Learners Academy, we welcome you to embark on an exciting
            educational journey for your child. Our admission process is
            designed to be transparent, straightforward, and inclusive. Here's a
            step-by-step guide to joining our school
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Process</span>
          <h2 className="section__title">Admission Process</h2>
          <p className="section__description">
            Embark on a remarkable educational journey with us! Our Admission
            and Enrollment process is the gateway to providing your child with
            an exceptional learning experience at our kindergarten school
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="step">
            <div className="step__number">01</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">Inquiry</h3>
              <p className="step__text">
                Submit an inquiry form through our website or contact our
                admissions office to express your interest in Little Learners
                Academy.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step__number">02</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">School Tour</h3>
              <p className="step__text">
                Schedule a personalized school tour to explore our campus, meet
                our staff, and gain insights into our nurturing learning
                environment.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step__number">03</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">Application Form</h3>
              <p className="step__text">
                Complete the application form and provide the required
                documents, including your child's birth certificate, medical
                records, and any previous academic records (if applicable).
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step__number">04</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">Parent Interview</h3>
              <p className="step__text">
                We value parent engagement, and a meeting with our admissions
                team allows us to understand your child's needs and ensure
                Little Learners Academy aligns with your family's expectations.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step__number">05</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">Student Assessment</h3>
              <p className="step__text">
                For certain age groups, a student assessment may be conducted to
                understand their developmental progress and ensure the best
                placement.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step__number">06</div>
            <div className="step__line" />
            <div className="step__card">
              <h3 className="step__name">Acceptance</h3>
              <p className="step__text">
                Once the admission process is complete, you will receive an
                official acceptance letter from Little Learners Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__badge">Our Features</span>
          <h2 className="section__title">Fee Structure</h2>
          <p className="section__description">
            Our fee structure is transparent, and we strive to keep our fees
            competitive within the education sector. The fees vary based on the
            program, age group, and any additional services chosen.
          </p>
        </div>
        <div className="section__body section__body--list">
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Age Group</th>
                <th>Annual Tuition</th>
                <th>Registration Fee</th>
                <th>Activity Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nursery</td>
                <td>2 - 3 Years</td>
                <td>$1,686</td>
                <td>$162</td>
                <td>$12</td>
              </tr>
              <tr>
                <td>Pre - Kindergartens</td>
                <td>3 - 4 Years</td>
                <td>$2,686</td>
                <td>$220</td>
                <td>$16</td>
              </tr>
              <tr>
                <td>Kindergarten</td>
                <td>4 - 5 Years</td>
                <td>$3,686</td>
                <td>$340</td>
                <td>$20</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Additional Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Before and After-School Care</td>
                <td>$120 / per month</td>
              </tr>
              <tr>
                <td>Language Immersion Program</td>
                <td>$60 / per semester</td>
              </tr>
              <tr>
                <td>Transportation (optional)</td>
                <td>$80 / per month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
