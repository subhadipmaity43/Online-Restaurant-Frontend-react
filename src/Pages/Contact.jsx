import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Contact() {
  const ifStyle = {
    width: "100%",
    height: "400px",
    border: "2px solid black",
  };
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
          <Header />
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Contact Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Contact Us
              </h5>
              <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      Booking
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      book@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      General
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      info@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      Technical
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14751.546179875293!2d88.41130235!3d22.4332957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680458133424!5m2!1sen!2sin"
                  title="frameTitle"
                  frameBorder="0"
                  style={ifStyle}
                ></iframe>
              </div>

              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form action="https://formspree.io/f/mzbqyjdn" method="POST">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="Name"
                            required
                            placeholder="Your Name"
                            autoComplete="off"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="Email"
                            required
                            placeholder="Your Email"
                            autoComplete="off"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="Subject"
                            required
                            placeholder="Subject"
                            autoComplete="off"
                          />
                          <label htmlFor="subject">Enter Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            type="text"
                            className="form-control"
                            id="message"
                            name="Message"
                            required
                            placeholder="Leave a message here"
                            autoComplete="off"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Contact End --> */}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
