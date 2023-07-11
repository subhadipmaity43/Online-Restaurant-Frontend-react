import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useLocation } from "react-router-dom";

function MenuItem({ id, name, price, image, category, desc }) {
  const { addToCart, removeFromCart } = useContext(AppContext);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded"
          src={image}
          alt=""
          style={{ width: "110px" }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{name}</span>
            <span className="text-primary">{"₹" + price}</span>
          </h5>
          <small className="fst-italic">{desc}</small>
          <br></br>
          <div
            className="input-group quantity mr-3"
            style={{ width: "100%", justifyContent: "right" }}
          >
            <div className="input-group-btn">
              {currentPath === "/cart" ? (
                <button
                  className="btn btn-primary px-3"
                  onClick={() => {
                    alert(removeFromCart(id));
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              ) : (
                <button
                  className="btn btn-primary px-3"
                  onClick={() => {
                    alert(addToCart(id));
                  }}
                >
                  <i className="fa fa-shopping-cart mr-1"></i> Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
