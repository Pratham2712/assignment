import React from "react";
import "./FormLayout.css";

const FormLayout = () => {
  return (
    <div className="form-content">
      <h2>Pro Form Layout</h2>
      <main style={{ paddingTop: "1rem" }}>
        <section className="form-1">
          <form>
            <h3>Contact Form 2</h3>
            <div className="input-fields">
              <div className="first">
                <h5>First Name</h5>
                <input type="text" />
              </div>
              <div className="last">
                <h5>Last Name</h5>
                <input type="text" />
              </div>
              <div className="email">
                <h5>Email</h5>
                <input type="email" />
              </div>
              <div className="phone">
                <h5>Phone</h5>
                <input type="tel" />
              </div>
            </div>
            <div className="select">
              <h5>Select option</h5>
              <input type="radio" id="graphic" />
              <label htmlFor="graphic">Graphic Design</label>
              <input type="radio" id="web" />
              <label htmlFor="web">Web Development</label>
              <input type="radio" id="logo" />
              <label htmlFor="logo">logo Design</label>
              <input type="radio" id="other" />
              <label htmlFor="other">Others</label>
            </div>
            <div className="msg">
              <h5>Message</h5>
              <input type="text" />
            </div>
            <div>
              <button>Send Message</button>
            </div>
          </form>
        </section>
        <section className="form-2"></section>
      </main>
    </div>
  );
};

export default FormLayout;
