import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { AppContext } from "../Context/AppContext";

function Register() {
  const navigate = useNavigate();
  const { setUserEmail } = useContext(AppContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credential, setCredential] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [fetchData, setFetchData] = useState(null);
  let my_header = new Headers();
  my_header.append("Content-type", "application/json");
  const reqOption = {
    method: "POST",
    headers: my_header,
    body: JSON.stringify(credential),
  };
  const userRegister = () => {
    setIsLoading(true);
    let emailPattern = /\w+@gmail.com+$/g;
    let emailMatched = credential.email.search(emailPattern);
    if (emailMatched === -1) {
      setErrorMsg("Provide a Valid Email ");
    } else if (credential.password !== credential.confirmpassword) {
      setErrorMsg("Password Mismatch");
    } else {
      fetch("http://localhost:5000/user/register", reqOption)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.status === 1) {
            setFetchData(res);
            setUserEmail(credential.email);
            navigate("/login");
            setIsLoading(false);
          } else {
            setErrorMsg(res.msg);
          }
        })
        .catch((err) => {
          fetchData(err);
          setErrorMsg(err);
          setIsLoading(false);
        });
      setCredential({
        firstname: "",
        lastname: "",
        phoneno: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };

  return (
    <div>
      {/* <!-- Navbar & Hero Start --> */}
      <div className="container-xxl position-relative p-0">
        <Header />

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Register
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
                  Register
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Navbar & Hero End -->


        <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Register Yourself
            </h5>
            <h1 className="mb-5">Register yourself</h1>
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
              <img
                className="flex-shrink-0 img-fluid rounded"
                src={require("../images/img1.jpg")}
                alt=""
                style={{ maxWidth: "90%", height: "90%" }}
              />
            </div>

            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        value={credential.firstname}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            firstname: e.target.value,
                          });
                        }}
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={credential.lastname}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            lastname: e.target.value,
                          });
                        }}
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={credential.email}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            email: e.target.value,
                          });
                        }}
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={credential.phoneno}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            phoneno: e.target.value,
                          });
                        }}
                        placeholder="phone"
                      />
                      <label htmlFor="phone">Phone No.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={credential.password}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            password: e.target.value,
                          });
                        }}
                        placeholder="password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="confirmpassword"
                        value={credential.confirmpassword}
                        onChange={(e) => {
                          setCredential({
                            ...credential,
                            confirmpassword: e.target.value,
                          });
                        }}
                        placeholder="password"
                      />
                      <label htmlFor="password">Confirm Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      onClick={() => {
                        userRegister();
                      }}
                    >
                      {isLoading ? "Loading..." : "Register"}
                    </button>
                  </div>

                  <p style={{ color: "red" }}>{errorMsg}</p>
                  <p>
                    Have any Account.
                    <Link to="/login"> Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Register End --> */}
      <Footer />
    </div>
  );
}

export default Register;
