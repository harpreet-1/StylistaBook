import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/BusnessNavbar.module.css";
import logoImg1 from "../images/stylista.png";
const BusinessNavbar = () => {
  let navigate = useNavigate();
  return (
    <nav
      style={{ margin: "0px", padding: "0px", position: "static" }}
      className={`navbar navbar-expand-lg ${styles.navbarcss}`}
    >
      <div
        style={{ margin: "0px", padding: "0px" }}
        className="container-fluid"
      >
        <Link className="navbar-brand" to="/business">
          <img className={styles.logoImg} src={logoImg1} alt="StylistaBook" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/business"
              >
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">
                Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/requests">
                Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Services
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <span className={styles.usernamecss}>
            {localStorage.getItem("name") || ""}
          </span>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className={`btn btn-outline-danger ${styles.logoutbtncss}`}
            type="submit"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;
