import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <Header />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Booking
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
                  Book Your Table
                </li>
              </ol>
            </nav>
          </div>
        </div>
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
                Reservation
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
      <Footer />
    </div>
  );
}

export default Booking;
