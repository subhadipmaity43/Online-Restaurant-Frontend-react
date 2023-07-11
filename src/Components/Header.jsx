import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../Context/AppContext";

function Header() {
  const navigate = useNavigate();
  const { setUserData } = useContext(AppContext);
  // let isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  // console.log(isLoggedIn);

  const userLogout = async () => {
    await fetch("http://localhost:5000/user/logout", { method: "POST" });
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    navigate("/");
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
            <Link to="/service" className="nav-item nav-link active">
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
          {console.log(isLoggedIn)}
          {isLoggedIn ? (
            <button className="btn btn-primary py-2 px-4" onClick={userLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary py-2 px-4">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
