import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="/">
                Reservation
              </a>
              <a className="btn btn-link" href="/">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="/">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Sonarpur, Kolkata,
                West Bengal
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>8250946026
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 12AM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p>
                Online food ordering has become the only source of enjoying the
                lip-smacking delicacies of famous outlets in the safest manner.
              </p>
              <div className="position-relative mx-auto">
                {/* <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                /> */}
                <Link
                  to="/feedback"
                  type="button"
                  className="btn btn-primary py-2
                  position-absolute top-0 end-0 mt-2 me-2"
                  style={{ width: "100%" }}
                >
                  Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <button
        onClick={scrollToTop}
        type="button"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
}

export default Footer;
