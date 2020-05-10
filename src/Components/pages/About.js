import React from "react";
import "../../index.css";

function About() {
  return (
    <div id="main-content" className="container-fluid">
      <section className="main-section">
        <div className="row">
          <div className="col-sm-12">
            <h1>About Me</h1>

            <p>
              <img
                className="profile img-responsive"
                src="assets/images/profile-pic.png"
                alt="Steve Kindt"
              />
              After working in the medical device industry for a number of years
              I decided that I wanted to find a creative outlet in my
              professional life. I thought that web design would be a good
              opportunity to exercise this desire. I was also drawn to the idea
              that the field is constantly changing with new technologies and
              frameworks requiring non-stop learning. After buying a few coding
              books and taking some free courses online, I decided to get
              serious and invest in this new path by enrolling in a coding
              bootcamp at the University of Minnesota.
            </p>
            <p>
              As a new web design student I am excited to begin my journey
              toward a challenging and rewarding profession.
            </p>
          </div>
        </div>
      </section>
      <section className="links">
        <div className="row">
          <div className="col-sm-12">
            <h3>Contacts and Links</h3>
            <p>
              <a href="mailto:stevemkindt@gmail.com">
                Email: stevemkindt@gmail.com
              </a>
            </p>
            <p id="phone">Phone: (612) 940-6468</p>
            <p>
              <a
                href="assets/images/Steve Kindt Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </p>
            <p>
              <a
                href="https://github.com/stevekindt"
                target="_blank"
                rel="noopener noreferrer"
              >
                My GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/steve-kindt-279578109/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
