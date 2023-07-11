import React from "react";
import { useNavigate } from "react-router-dom";

function Cartcalculator({ total, deliveryCharge, grandTotal }) {
  const navigate = useNavigate();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (garndTotal) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline...Get back to Online");
      return;
    }

    const options = {
      key: "rzp_test_45LWBb43Q0VLrb",
      currency: "INR",
      amount: garndTotal * 100,
      name: "Restoran",
      description: "Thanks for Purcahsing",
      image:
        "https://img.rawpixel.com/private/static/images/website/2022-05/upwk61661577-wikimedia-image-kowapeej.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=14769aec7c86811c0c7e4eb29fa4a76e",

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        alert("Payment Successfull");
        navigate("/");
      },
      prefill: {
        name: "Subha Maity",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="col-lg-4" style={{ marginRight: "8%" }}>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="" style={{ fontSize: "25px" }}>
          Cart Summary
        </span>
      </h5>
      <div className="bg-light p-30 mb-5">
        <div className="border-bottom pb-2">
          <div className="d-flex justify-content-between mb-3">
            <h6 className="font-weight-medium">Total</h6>
            <h6 className="font-weight-medium">₹{total}</h6>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h6 className="font-weight-medium">Delivery Charge</h6>
            <h6 className="font-weight-medium">₹{deliveryCharge}</h6>
          </div>
        </div>
        <div className="pt-2">
          <div className="d-flex justify-content-between mt-2">
            <h5>Grand Total</h5>
            <h5>₹{grandTotal}</h5>
          </div>
          <button
            className="btn btn-block btn-primary font-weight-bold my-3 py-3"
            onClick={() => displayRazorpay(grandTotal)}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartcalculator;
