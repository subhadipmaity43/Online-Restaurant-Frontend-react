import React, { useState, useContext } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { AppContext } from "../Context/AppContext";

function Login() {
  const navigate = useNavigate();
  const { setUserData, userEmail } = useContext(AppContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credential, setCredential] = useState({
    email: userEmail,
    password: "",
  });

  const userLogin = () => {
    setIsLoading(true);
    let my_header = new Headers();
    my_header.append("Content-type", "application/json");
    const reqOption = {
      method: "POST",
      headers: my_header,
      body: JSON.stringify(credential),
    };

    fetch("http://localhost:5000/user/login", reqOption)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 1) {
          window.localStorage.setItem("isLoggedIn", true);
          const newUserData = [];
          newUserData.push(res.user);
          localStorage.setItem("currentUser", JSON.stringify(newUserData));
          setUserData(res.user);
          setErrorMsg(res.msg);
          navigate("/");
          setIsLoading(false);
        } else {
          setErrorMsg(res.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
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
                Login
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
                    Login
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
                Login
              </h5>
              <h1 className="mb-5">Login Yourself</h1>
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
                  src={require("../images/img.jpg")}
                  alt=""
                  style={{ maxWidth: "90%", height: "90%" }}
                />
              </div>

              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="row g-3">
                    <div className="col-md-12">
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
                          placeholder="Your Email-ID"
                        />
                        <label htmlFor="name">Your Email-ID</label>
                      </div>
                    </div>

                    <div className="col-12">
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
                          placeholder="Your Password"
                        />
                        <label htmlFor="message">Enter Your Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        onClick={() => {
                          userLogin();
                        }}
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </div>
                    <p style={{ color: "red" }}>{errorMsg}</p>
                    <p>
                      <Link to=""> Forget Password !!</Link>
                    </p>
                    <p>
                      Don't Have any Account ?
                      <Link to="/register"> Register</Link>
                    </p>
                  </div>
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

export default Login;
