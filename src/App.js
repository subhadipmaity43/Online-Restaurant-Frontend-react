// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Addtocart from "./Pages/Addtocart";
import Booking from "./Pages/Booking";
import Navber from "./Components/Navber";
import Feedback from "./Pages/Feedback";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/service" element={<Services />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Addtocart />} />
            <Route exact path="/navber" element={<Navber />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
