import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Services() {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <Header />
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
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
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Navbar & Hero End -->


        <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Our Services
            </h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h5>Master Chefs</h5>
                  <p>
                    A master or executive chef is the ultimate leader of a
                    kitchen and its staff. They improving workflow processes in
                    the back of house.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                  <h5>Quality Food</h5>
                  <p>
                    The preparation of food in large amounts to serve people
                    within a period of time. It is an activity of preparing food
                    on large scale.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                  <h5>Online Order</h5>
                  <p>
                    Customer Can order from website by browse a digital menu,
                    either on website and place and pay for their order online.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                  <h5>24/7 Service</h5>
                  <p>
                    Today’s customers enjoy having choices that are convenient
                    for them.Resoran have the benefit from 24/7 access to their
                    Customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={require("../images/team-1.jpg")}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={require("../images/team-2.jpg")}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={require("../images/team-3.jpg")}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={require("../images/team-4.jpg")}
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
