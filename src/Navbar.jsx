import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import image from "./images/logo-no-background.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluidv nav_bg">
        <div className="row">
          <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={image} alt="logo" />
                  {/* Tech World.. */}
                </NavLink>
                <div className="collapse navbar-collapse ">
                  <ul className="navbar-nav">
                    <li className="nav-item ">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
