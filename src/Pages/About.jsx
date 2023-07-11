import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      {/* <Navber /> */}
      <div className="container-xxl position-relative p-0">
        <Header />

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
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
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-xxl bg-white p-0">
        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img src={require("../images/about-1.jpg")} alt="" />
                  </div>
                  <div className="col-6 text-start">
                    <img src={require("../images/about-2.jpg")} alt="" />
                  </div>
                  <div className="col-6 text-end">
                    <img src={require("../images/about-3.jpg")} alt="" />
                  </div>
                  <div className="col-6 text-end">
                    <img src={require("../images/about-4.jpg")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  About Us
                </h5>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <i className="fa fa-utensils text-primary me-2"></i>
                  Restoran
                </h1>
                <p className="mb-4">
                  Restaurants know the importance of a strong first impression.
                  It's why they invest in exterior design, decorate their
                  entranceways and train hosts to welcome guests with a warm
                  smile. Nowadays, however, more than 70% of diners visit a
                  restaurant's website before deciding where to dine, which
                  means the first impression happens long before they set foot
                  on-premises. It happens online. And when it does, the
                  restaurant description plays a pivotal role.
                </p>
                <p className="mb-4">
                  Here Restoran is the best choice to dine out and also ordering
                  food online.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0"
                        data-toggle="counter-up"
                      >
                        15
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Years of</p>
                        <h6 className="text-uppercase mb-0">Experience</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0"
                        data-toggle="counter-up"
                      >
                        50
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Popular</p>
                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
