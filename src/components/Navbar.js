import React from "react";
import image from "../logo-small.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <article className="navbar-brand p-2 ml-5">
        <img src={image} alt="logo" />
      </article>

      <ul className="navbar-nav ml-auto mr-5 h5">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
