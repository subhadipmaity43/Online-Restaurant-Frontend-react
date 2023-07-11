import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
// import { AppContext } from "../Context/AppContext";
import MenuItem from "../Components/MenuItem";
import { AppContext } from "../Context/AppContext";
import Cartcalculator from "../Components/Cartcalculator";

function Addtocart() {
  const cart = JSON.parse(localStorage.getItem("data"));
  const [isState, setIsState] = useState(false);
  const [total, setTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [grandTotal, setGarndTotal] = useState(0);
  const navigate = useNavigate();
  const { isCartLoaded } = useContext(AppContext);
  useEffect(() => {
    setIsState(!isState);
    let t = cart.map((item, index) => {
      return item.price;
    });
    // console.log(t);
    setTotal(t.reduce((a, b) => a + b, 0));
    setDeliveryCharge(20);
    setGarndTotal(total + deliveryCharge);
    // console.log(total, deliveryCharge, grandTotal);
    // navigate("/");
  }, [cart]);

  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <Header />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Add to Cart
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
                  Cart Item
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Cart Item
              </h5>
              <h1 className="mb-5">Items Added</h1>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-5">
                {cart &&
                  cart.map((item, index) => {
                    return (
                      <MenuItem
                        id={item.id}
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                        category={item.category}
                        image={item.image}
                        key={index}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {total === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            color: "red",
            fontFamily: "Nunito, sans-serif",
          }}
        >
          No item in Your Cart!!
          <br /> Please add Some Food.
        </p>
      ) : (
        <Cartcalculator
          total={total}
          deliveryCharge={deliveryCharge}
          grandTotal={grandTotal}
        />
      )}
      <Footer />
    </div>
  );
}

export default Addtocart;
