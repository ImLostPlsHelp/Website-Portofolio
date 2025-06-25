import { useState } from "react";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Maurits Sitinjak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-white" />
    </nav>
  );
}

export default Navbar;
