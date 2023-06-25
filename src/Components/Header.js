import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Finances
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Send and Request
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Help
                </a>
              </li>
            </ul>
            <ul className="nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faBell} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faCog} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
