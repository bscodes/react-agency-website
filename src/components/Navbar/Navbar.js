import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { navItems } from "lib/data/navItems";

const Navbar = () => {
  return (
    <header className="header-transparent">
      <nav className="navbar navbar-expand-lg text-center">
        <div className="container">
          <Link to="/" className="navbar-brand">
            A.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fi-xwluxl-three-bars-wide"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navItems.map((item) => {
              return (
                <ul className="navbar-nav ml-auto" key={item.id}>
                  <li className="nav-item">
                    <Link to={item.link} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
