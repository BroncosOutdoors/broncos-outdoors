import "../styles/Nav.css";
import logo from "../assets/logo.svg";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MyNewsletters from "../pages/MyNewsletters";
import CreateNewsletter from "../pages/CreateNewsletter";
import { NavLink, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div id="logoContainer">
          <img id="broncosLogo" src={logo} alt="Broncos Outdoors Logo" />
        </div>
        <Link to="/" className="logo">
          Broncos Outdoors
        </Link>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-newsletter" activeClassName="active">
              Create Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-newsletters" activeClassName="active">
              My Newsletters
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-newsletter" element={<CreateNewsletter />} />
        <Route path="/my-newsletters" element={<MyNewsletters />} />
      </Routes>
    </>
  );
}
