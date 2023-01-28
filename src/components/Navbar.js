import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode ==='light'?'success':'dark'} navber-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode ==='light'?'dark':'light'}`} href="/">
          {props.title}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode ==='light'?'dark':'light'}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode ==='light'?'dark':'light'}`} href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>

          <div className={`form-check form-switch  text-${props.mode ==='light'?'dark':'light'} me-2`}>
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'light'?"Enable DarkMode":"Disable DarkMode"}
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-${props.mode === 'light'?'light':'success'}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
