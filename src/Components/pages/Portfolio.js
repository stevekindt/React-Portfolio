import React from "react";

function Portfolio() {
  return (
    <div id="main-content" className="container-fluid">
      <section className="main-section">
        <div className="row">
          <div className="col-sm-12">
            <h1>Portfolio</h1>
            <div className="port">
              <h5>Random Password Generator</h5>
              <img
                className="img-responsive"
                src="assets/images/password.png"
                alt="Random Password Generator Application"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This application generates a random password based on
                    user-selected character types and length.
                  </p>
                  <p>
                    <a
                      href="https://github.com/stevekindt/Password-Generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://stevekindt.github.io/Password-Generator/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Application
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="port">
              <h5>Weather Dashboard</h5>
              <img
                className="img-responsive"
                src="assets/images/weather.png"
                alt="Weather Dashboard Application"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This application generates current and forecasted weather
                    conditions for locations searched.
                  </p>
                  <p>
                    <a
                      href="https://github.com/stevekindt/Weather-Dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://stevekindt.github.io/Weather-Dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Application
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="port">
              <h5>TravelMaster</h5>
              <img
                className="img-responsive"
                src="assets/images/travelmaster.png"
                alt="Travel Application API Group Project"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This group project interacts with APIs to provide weather,
                    interesting facts, and a map to travelers searching for
                    information about a destination.
                  </p>
                  <p>
                    <a
                      href="https://github.com/stevekindt/Project-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://stevekindt.github.io/Project-1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Application
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="port">
              <h5>Employee Tracker CLI</h5>
              <img
                className="img-responsive"
                src="assets/images/employee-tracker-CLI.png"
                alt="CLI Content Management System"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This CLI acts as a Content Management System for an employee
                    tracker. It is built using node, inquirer, and MySQL. The
                    application allows the user to add departments, roles, and
                    employees; view departments, roles, and employees; and
                    update employee roles.
                  </p>
                  <p>
                    <a
                      href="https://github.com/stevekindt/Employee-Tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="port">
              <h5>Devouring Burgers</h5>
              <img
                className="img-responsive"
                src="assets/images/burger.png"
                alt="Burger Eating MVC App on Heroku"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This application follows the MVC design pattern using Node,
                    MySQL, Express, and Handlebars to create an interactive page
                    deployed to Heroku.
                  </p>
                  <p>
                    <a
                      href="https://github.com/stevekindt/Burger-Logger"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://young-waters-35613.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Application
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="port">
              <h5>Quiz Game</h5>
              <img
                className="img-responsive"
                src="assets/images/quiz-game.png"
                alt="Quiz Game App on Heroku"
              />
              <div className="overlay">
                <div className="text">
                  <p className="description">
                    This group project is a quiz game app where users can take
                    and create quizzes. It is deployed to Heroku.
                  </p>
                  <p>
                    <a
                      href="https://github.com/kelly-bazella/Project-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://gold-team-quiz.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed Application
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
