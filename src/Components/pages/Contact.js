import React from "react";

function Contact() {
  return (
    <div id="main-content" className="container-fluid">
      <section className="main-section">
        <div className="row">
          <div className="col-sm-12">
            <h1>Contact Form</h1>
            <form
              action="mailto:steve.kindt@gmail.com"
              method="get"
              enctype="text/plain"
            >
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="John Smith"
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="example@gmail.com"
              />

              <label for="message">Message</label>
              <textarea id="message" name="user_message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
