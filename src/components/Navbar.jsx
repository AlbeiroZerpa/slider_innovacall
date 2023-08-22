import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/icon-final.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="preheader pt-1 align-items-end">
        <div
          className="containerPreheader social-icons"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} width="200" height="50" />
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
              <li className="nav-item"></li>
            </ul>
            <div className="d-flex linksNavbar">
              <Link className="nav-link active" to="/inicio">
                Inicio
              </Link>
              <Link className="nav-link" to="/innova">
                Innova
              </Link>
              <Link className="nav-link" to="/soluciones">
                Soluciones
              </Link>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
