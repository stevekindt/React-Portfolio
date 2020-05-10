import React from "react";

function NavTabs(props) {
  return (
    <div className="row">
      <div className="col-sm-8">
        {" "}
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          id="logo"
        >
          Steve Kindt
        </a>
      </div>

      <div className="col-sm-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-item nav-link"
                href="#about"
                onClick={() => props.handlePageChange("About")}
              >
                About
              </a>
              <a
                className="nav-item nav-link"
                href="#portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
              <a
                className="nav-item nav-link"
                href="#contact"
                onClick={() => props.handlePageChange("Contact")}
              >
                Contact Form
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavTabs;
