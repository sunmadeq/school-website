const Header = () => {
  return (
    <header className="container header">
      <div className="header__announcement">
        <p>Admission is Open, Grab your seat now</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3.5 10.5a.75.75 0 0 1 .75-.75h10.638L10.73 5.79a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H4.25a.75.75 0 0 1-.75-.75Z" />
        </svg>
      </div>
      <div className="header__content">
        <a href="/">
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
        </a>
        <div>
          <nav className="header__navigation">
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/academics">Academics</a>
            <a href="/admission">Admission</a>
            <a href="/student-life">Student Life</a>
            <a href="/contact">Contact</a>
          </nav>
          <button className="header__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="currentColor"
            >
              <path d="M3.5 7.875c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H4.375a.875.875 0 0 1-.875-.875ZM3.5 14c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H4.375A.875.875 0 0 1 3.5 14Zm9.625 6.125c0-.483.392-.875.875-.875h9.625a.875.875 0 0 1 0 1.75H14a.875.875 0 0 1-.875-.875Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
