import React from "react";
import Navbar from "../Components/Navber";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <!-- Service Start --> */}

      <div className="container-xxl py-5">
        <div className="container">
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
      {/* <!-- Service End -->


<!-- About Start --> */}
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
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                Restoran
              </h1>
              <p className="mb-4">
                Restaurants know the importance of a strong first impression.
                It's why they invest in exterior design, decorate their
                entranceways and train hosts to welcome guests with a warm
                smile. Nowadays, however, more than 70% of diners visit a
                restaurant's website before deciding where to dine, which means
                the first impression happens long before they set foot
                on-premises. It happens online. And when it does, the restaurant
                description plays a pivotal role.
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
              <Link to="/About" className="btn btn-primary py-3 px-5 mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End -->


<!-- Menu Start --> */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-className text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-1.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-2.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-3.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-4.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-9.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-6.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-7.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-8.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-1.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-2.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-3.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-4.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-5.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-6.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-7.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-8.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-1.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-2.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-3.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-4.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-5.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-6.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-7.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={require("../images/menu-8.jpg")}
                        alt=""
                        style={{ width: "110px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                        <br></br>
                        <div
                          className="input-group quantity mr-3"
                          style={{ width: "100%", justifyContent: "right" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-primary px-3">
                              <i className="fa fa-shopping-cart mr-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Menu End -->


<!-- Reservation Start --> */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Booking
        </h5>
        <h1 className="mb-5">Book Your Table</h1>
      </div>
      <div className="container-xxl position-relative p-0">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <img
                className="flex-shrink-0 img-fluid rounded"
                src={
                  "https://restaurants.yelp.com/wp-content/uploads/2022/03/reserved-table-at-a-restaurant.jpeg"
                }
                alt=""
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                Booking
              </h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              <form action="https://formspree.io/f/xoqzbkgd" method="POST">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
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
                        name="email"
                        required
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Phone No."
                      />
                      <label htmlFor="email">Phone No.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="select1"
                        name="No of Person"
                        required
                      >
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                        <option value="4">People 4</option>
                        <option value="5">People 5</option>
                        <option value="6">People 6</option>
                        <option value="7">People 7</option>
                        <option value="8">People 8</option>
                      </select>
                      <label htmlFor="select1">No Of People</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      // id="date3"
                      // data-target-input="nearest"
                    >
                      <input
                        type="date"
                        className="form-control datetimepicker-input"
                        id="date"
                        name="date"
                        required
                        placeholder="Date"
                        data-target="#date3"
                        data-toggle="datepicker"
                      />
                      <label htmlFor="datetime">Date</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      // id="date3"
                      // data-target-input="nearest"
                    >
                      <input
                        type="time"
                        className="form-control datetimepicker-input"
                        id="time"
                        name="time"
                        required
                        placeholder="time"
                        time-target="#time3"
                        time-toggle="timepicker"
                      />
                      <label htmlFor="datetime">Time</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        name="message"
                        required
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Reservation End -->


<!-- Team Start --> */}
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
                    <i className="fab fa-google"></i>
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
                    <i className="fab fa-google"></i>
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
                    <i className="fab fa-google"></i>
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
                    <i className="fab fa-google"></i>
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

      {/* <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="text-center">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">
              Testimonial
            </h5>
            <h1 class="mb-5">Our Clients Say!!!</h1>
          </div>
          <div class="owl-carousel testimonial-carousel">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid flex-shrink-0 rounded-circle"
                  alt=""
                  src={require("../images/testimonial-1.jpg")}
                  style={{ width: "50px", height: "50px" }}
                />
                <div class="ps-3">
                  <h5 class="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid flex-shrink-0 rounded-circle"
                  src={-require("../images/testimonial-2.jpg")}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div class="ps-3">
                  <h5 class="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../images/testimonial-3.jpg")}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div class="ps-3">
                  <h5 class="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid flex-shrink-0 rounded-circle"
                  src={require("../images/testimonial-4.jpg")}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div class="ps-3">
                  <h5 class="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Team End --> */}
      <Footer />
    </div>
  );
}

export default Home;
