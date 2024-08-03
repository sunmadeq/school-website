import type { Metadata } from "next";
import * as ReactIcons from "@/components/base/icon";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/components/base/icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is the description of the contact page.",
};

export default function ContactPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__badge">Contact Us</h1>
          <p className="banner__title">Feel Free To Connect With Us</p>
        </div>
        <div className="banner__body">
          <p className="banner__text">
            We value open communication and are eager to assist you with any inquiries. Feel free to
            reach out to us through any of the following contact methods
          </p>
          <div className="banner__contacts">
            <div className="banner__contact">
              <ReactIcons.EmailIcon />
              <p>support@little-learners.com</p>
            </div>
            <div className="banner__contact">
              <ReactIcons.PhoneIcon />
              <p>+12-345-678-90</p>
            </div>
            <div className="banner__contact">
              <ReactIcons.PointIcon />
              <p>Vienna, Austria</p>
            </div>
            <div className="banner__contact">
              <ReactIcons.ClockIcon />
              <p>Office Hours: 9am - 6pm</p>
            </div>
          </div>
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
        <form className="form">
          <div className="form__header">
            <a href="/">
              <FacebookIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
            <a href="/">
              <LinkedInIcon />
            </a>
          </div>
          <div className="form__content">
            <fieldset className="form__fieldset">
              <div className="form__field">
                <label className="form__label">Parent Name</label>
                <input className="form__input" type="text" placeholder="Enter Parent Name" />
              </div>
              <div className="form__field">
                <label className="form__label">Email Address</label>
                <input className="form__input" type="email" placeholder="Enter Email Address" />
              </div>
            </fieldset>
            <fieldset className="form__fieldset">
              <div className="form__field">
                <label className="form__label">Phone Number</label>
                <input className="form__input" type="tel" placeholder="Enter Phone Number" />
              </div>
              <div className="form__field">
                <label className="form__label">Student Name</label>
                <input className="form__input" type="text" placeholder="Enter Student Name" />
              </div>
            </fieldset>
            <fieldset className="form__fieldset">
              <div className="form__field">
                <label className="form__label">Student Age</label>
                <input className="form__input" type="number" placeholder="Enter Student Age" />
              </div>
              <div className="form__field">
                <label className="form__label">Program of Interest</label>
                <select className="form__input">
                  <option id="biology" value="biology">
                    Biology
                  </option>
                  <option id="mathematics" value="mathematics">
                    Mathematics
                  </option>
                </select>
              </div>
            </fieldset>
            <div className="form__field">
              <label className="form__label">Message</label>
              <textarea className="form__textarea" placeholder="Enter your Message" />
            </div>
            <button type="submit" className="form__submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
