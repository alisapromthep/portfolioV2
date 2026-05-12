import "./NavBar.scss";

const NAV_TABS = [
  { id: "about", label: "About" },
  { id: "data", label: "Data Projects" },
  { id: "web", label: "Web Projects" },
];

const NavBar = ({ activeSection, setActiveSection, openModal }) => {
  return (
    <nav className="nav">
      <span className="nav__name">A.P.</span>
      <div className="nav__tabs">
        {NAV_TABS.map(({ id, label }) => (
          <button
            key={id}
            className={`nav__tab nav__tab--${id} ${activeSection === id ? "nav__tab--active" : ""}`}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
