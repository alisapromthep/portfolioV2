import "./NavBar.scss";

const NavBar = ({ handleScrollToAbout, handleScrollToProject, openModal }) => {
  return (
    <nav className="nav">
      <span className="nav__name">A.P.</span>
      <div className="nav__tabs">
        <button
          className="nav__tab nav__tab--active"
          onClick={handleScrollToAbout}
        >
          About
        </button>
        <button className="nav__tab" onClick={handleScrollToProject}>
          Projects
        </button>
        {/* <a
          className="nav__tab"
          href="https://docs.google.com/document/d/e/2PACX-1vSE8GB9wynWs1sdh-r0mueZmOwiHMzscNesOOJChC4kMtlIJkeT_kravPNAwASnqcSS1SLA8gimdiZ0/pub"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a> */}
      </div>
    </nav>
  );
};

export default NavBar;
