const Footer = () => {
  return (
    <footer className="container footer">
      <div>
        <div className="footer__head">
          <div className="footer__header">
            <div className="footer__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="m8.907 15 6.25-6.25 6.25 6.25-6.25 6.25L8.907 15Zm18.75-7.5V15l-12.5-12.5h7.5l5 5Zm0 15V15l-12.5 12.5h7.5l5-5Zm-25 0V15l12.5 12.5h-7.5l-5-5Zm0-15V15l12.5-12.5h-7.5l-5 5Z" />
              </svg>
              <span>Little Learners</span>
            </div>

            <p className="footer__text">
              We believe in the power of play to foster creativity, problem-solving skills, and
              imagination.
            </p>
          </div>

          <div className="footer__contacts">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M1.25 7.224v7.151a2.5 2.5 0 0 0 2.5 2.5h12.5a2.5 2.5 0 0 0 2.5-2.5v-7.15l-7.44 4.578a2.5 2.5 0 0 1-2.62 0L1.25 7.224Z" />
                <path d="M18.75 5.757v-.132a2.5 2.5 0 0 0-2.5-2.5H3.75a2.5 2.5 0 0 0-2.5 2.5v.132l8.095 4.981a1.25 1.25 0 0 0 1.31 0l8.095-4.981Z" />
              </svg>
              <span>hello@littlelearners.com</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.25 3.75a2.5 2.5 0 0 1 2.5-2.5h1.143c.717 0 1.342.488 1.516 1.184L7.33 6.12a1.563 1.563 0 0 1-.578 1.628l-1.078.809c-.112.084-.136.207-.105.293a9.404 9.404 0 0 0 5.581 5.58c.086.032.209.008.293-.104l.809-1.078a1.563 1.563 0 0 1 1.628-.578l3.687.921a1.563 1.563 0 0 1 1.183 1.516v1.143a2.5 2.5 0 0 1-2.5 2.5h-1.875C7.126 18.75 1.25 12.874 1.25 5.625V3.75Z"
                />
              </svg>
              <span>+91 91813 23 2309</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m9.616 18.626.06.034.023.013a.634.634 0 0 0 .602 0l.024-.013.059-.034c.05-.03.122-.072.212-.128.181-.11.436-.275.741-.49a16.34 16.34 0 0 0 2.235-1.902c1.62-1.659 3.303-4.15 3.303-7.356a6.875 6.875 0 1 0-13.75 0c0 3.205 1.683 5.697 3.303 7.356a16.32 16.32 0 0 0 2.976 2.392c.09.056.162.099.212.128ZM10 11.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                />
              </svg>
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>

        <div className="footer__navigation">
          <div>
            <p>Home</p>
            <nav>
              <a href="#">Features</a>
              <a href="#">Our Testimonials</a>
              <a href="#">FAQ</a>
            </nav>
          </div>
          <div>
            <p>Academics</p>
            <nav>
              <a href="#">Special Features</a>
              <a href="#">Gallery</a>
            </nav>
          </div>
          <div>
            <p>About Us</p>
            <nav>
              <a href="#">Our Mission</a>
              <a href="#">Our Vision</a>
              <a href="#">Awards and Recognitions</a>
              <a href="#">History</a>
              <a href="#">Teachers</a>
            </nav>
          </div>
          <div>
            <p>Contact Us</p>
            <nav>
              <a href="#">Information</a>
              <a href="#">Map & Directions</a>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <div className="footer__separator" />

        <div className="footer__links">
          <nav className="footer__legal">
            <a href="#">Terms of Service</a>
            <div />
            <a href="#">Privacy Policy</a>
            <div />
            <a href="#">Cookie Policy</a>
          </nav>

          <nav className="footer__media">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.55 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.21-.004-.426-.014-.637A9.999 9.999 0 0 0 24 4.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 0 0 2.165-2.723 9.897 9.897 0 0 1-3.126 1.195 4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.673 3.15a4.93 4.93 0 0 0 1.523 6.57 4.93 4.93 0 0 1-2.23-.614v.061a4.922 4.922 0 0 0 3.95 4.828 4.894 4.894 0 0 1-2.221.085 4.934 4.934 0 0 0 4.597 3.42A9.875 9.875 0 0 1 0 19.54a13.969 13.969 0 0 0 7.55 2.211Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z" />
              </svg>
            </a>
          </nav>
        </div>

        <div className="footer__separator" />

        <p className="footer__copyright">
          Copyright &copy; 2024 Little Learners Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
