import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
//Star Rating and other modules
import { Rate, Form } from "antd";
import "antd/dist/antd";

function Feedback() {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <Header />

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Feedback
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
                  Rate Your Experience With Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: "40%" }}>Please Rate Us!!</h1>
      </div>
      <form
        action="https://formspree.io/f/xbjeekpq"
        method="POST"
        name="basic"
        initialValues={{ remember: true }}
        style={{ marginLeft: "40%" }}
      >
        <Form.Item label="Food" name="Food">
          <Rate allowHalf defaultValue={null} />
        </Form.Item>
        <Form.Item label="Ambeance" name="Ambeance">
          <Rate allowHalf defaultValue={null} />
        </Form.Item>
        <Form.Item label="Service" name="Service">
          <Rate allowHalf defaultValue={null} />
        </Form.Item>
        <Form.Item>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Special Request"
                id="message"
                name="message"
                required
                style={{ height: "100px", width: "40%" }}
              ></textarea>
              <label htmlFor="message">Please Give Your Feedback</label>
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <button
            className="btn btn-primary  py-2"
            type="submit"
            style={{ marginLeft: "5%", width: "30%" }}
          >
            Submit
          </button>
        </Form.Item>
      </form>

      <Footer />
    </div>
  );
}

export default Feedback;
