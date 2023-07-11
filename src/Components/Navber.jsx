import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../Context/AppContext";

function Navber() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);
  // let isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  // console.log(isLoggedIn);
  const userLogout = async () => {
    await fetch("http://localhost:5000/user/logout", { method: "POST" });
    navigate("/");
    setUserData(null);
    // setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
    console.log("hi");
  };
  useEffect(() => {
    let currentUser = localStorage.getItem("currentUser");
    // console.log(currentUser);
    if (currentUser) {
      setUserData(JSON.parse(currentUser));
    }
  }, [setUserData]);
  // console.log(userData);
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restoran
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/menu" className="nav-item nav-link">
                Menu
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>

              <button
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  paddingLeft: "20px",
                }}
                onClick={() => {
                  isLoggedIn ? navigate("/cart") : alert("Login First");
                }}
              >
                <FiShoppingCart className="cart-trolly" />
              </button>
            </div>
            {/* {console.log(userData)} */}
            {isLoggedIn ? (
              <button
                className="btn btn-primary py-2 px-4"
                onClick={userLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary py-2 px-4">
                Login
              </Link>
            )}
          </div>
        </nav>
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">
                  Welcome
                  <br />
                  {isLoggedIn ? userData[0]?.firstname : " to Restoran"}
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  specializes in delicious food featuring fresh ingredients and
                  masterful preparation by the culinary team. Whether you’re
                  ordering a multi-course meal or grabbing a drink and pizza at
                  the bar, lively, casual yet upscale atmosphere makes it
                  perfect for dining with friends, family, clients and business
                  associates.
                </p>
                <Link
                  to="/Booking"
                  className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Book A Table
                </Link>
              </div>
              <div className="col-lg-6">
                <img src={require("../images/hero.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navber;
