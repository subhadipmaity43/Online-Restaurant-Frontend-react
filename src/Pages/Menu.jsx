import React, { useEffect, useContext } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import MenuItem from "../Components/MenuItem";
import { AppContext } from "../Context/AppContext";

function Menu() {
  // const addToCart = () => {};
  // const [menuItems, setMenuItems] = useState(null);
  const { items, setItems } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:5000/product/get")
      .then((res) => res.json())
      .then((res) => setItems(res.products))
      .catch((error) => console.error);
  });
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <Header />

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Menu
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
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Food Menu
              </h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {items &&
                  items.map((item, index) => {
                    return (
                      <MenuItem
                        id={item._id}
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

      <Footer />
    </div>
  );
}

export default Menu;
