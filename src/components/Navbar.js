import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light"?'success':"#44B407"} bg-${props.mode === "light"?'success':"dark"}`}>
      <div className={`container-fluid text-${props.mode === 'light'?"black":'light'}`}>
        <a className={`navbar-brand text-${props.mode === 'light'?'black':'white'}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode === 'light'?'black':'white'}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode === 'light'?'black':'white'}`} aria-current="page" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          
          {/* Darkmode enable switch */}
          <div className="form-check form-switch">
            <input
            onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label me-3" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light'?"DarkMode":"LightMode"}
            </label>
          </div>

        {/*  Search section*/}
          <form className="d-flex">
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
