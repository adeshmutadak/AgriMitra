import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import logo from "../Assets/logo.png";

export default function UserNavbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const state = useSelector((state) => state);

  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const logout = (e) => {
    dispatch({ type: "LogOut" });
    sessionStorage.clear();
    history.push("/");
    setActiveTab("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            className={`navbar-brand ${activeTab === "/" ? "active" : ""}`}
            to="/"
            onClick={() => setActiveTab("/")}
          >
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <h2>
              Agri <em>Mitra</em>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === "/" ? "active" : ""}`}
                  to="/"
                  onClick={() => setActiveTab("/")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeTab === "/products" ? "active" : ""
                  }`}
                  to="/products"
                  onClick={() => setActiveTab("/products")}
                >
                  Products
                </Link>
              </li>
              {state.loggedin && state.loggedin.Role === "Customer" ? (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "/mybookings" ? "active" : ""
                      }`}
                      to="/mybookings"
                      onClick={() => setActiveTab("/mybookings")}
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link`} to="/">
                      Hi {state.loggedin.Username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout} to="/">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "/about" ? "active" : ""
                      }`}
                      to="/about"
                      onClick={() => setActiveTab("/about")}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                      onClick={() => setActiveTab("/contact")}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "/register" ? "active" : ""
                      }`}
                      to="/register"
                      onClick={() => setActiveTab("/register")}
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "/login" ? "active" : ""
                      }`}
                      to="/login"
                      onClick={() => setActiveTab("/login")}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
