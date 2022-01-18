import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header class="header" id="header">
        <nav class="nav container padd-15">
          <Link to="/PortofolioFauhosting/" class="nav-logo">
            <h2>portofolio</h2>
          </Link>

          <div class="nav-menu" id="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">
                <Link to="/PortofolioFauhosting/" class="nav-link active-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/PortofolioFauhosting/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/PortofolioFauhosting/project" class="nav-link">
                  Project
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/PortofolioFauhosting/contact" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <div class="nav-close" id="nav-close">
              <i class="lni lni-close"></i>
            </div>
          </div>

          <div class="nav-btns">
            <i class="lni lni-pallet change-theme" id="theme-button"></i>

            <div class="nav-toggle" id="nav-toggle">
              <i class="lni lni-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
