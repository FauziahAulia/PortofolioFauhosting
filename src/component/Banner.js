import React from "react";
import first from "../video/first.gif";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <main class="main-content">
        <section class="home" id="home">
          <div class="container">
            <div class="intro">
              <img src={first} alt="fauziah" />
              <h1>Hai , I'm Fauziah Aulia</h1>
              <span>
                I'm a <span class="info-text">Student</span>
              </span>

              <ul class="social-icons">
                <li>
                  <a href="https://www.instagram.com/p/CHy60UvJgCx/?uttm_medium=copy_link">
                    <i class="lni lni-instagram-original"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/single_sign_on">
                    <i class="lni lni-twitter-original"></i>
                  </a>
                </li>
                <li>
                  <a href="https://id.pinterest.com/">
                    <i class="lni lni-pinterest"></i>
                  </a>
                </li>
              </ul>

              <div>
                <Link to="/about" class="btn btn-default">
                  About me
                </Link>
              </div>

              <div class="scroll-down">
                <a href="#" class="mouse-wrapper">
                  <span>Scroll Down</span>
                  <span class="mouse">
                    <span class="wheel"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
