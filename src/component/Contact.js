import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="contact section" id="contact">
        <div class="container">
          <h2 class="section-title padd-15">Contact me</h2>
          <div class="row">
            <div class="contact-box padd-15">
              <div class="contact-data">
                <div class="contact-information">
                  <h3 class="contact-subtitle">Call me </h3>
                  <span class="contact-description">
                    <i class="lni lni-phone contact-icon"></i>
                    +92 345 5676
                  </span>
                </div>
                <div class="contact-information">
                  <h3 class="contact-subtitle">Email saya</h3>
                  <span class="contact-description">
                    <i class="lni lni-user contact-icon"></i>
                    fauziahaulia1825@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <form class="contact-form padd-15">
              <div class="contact-inputs">
                <div class="contact-content">
                  <input type="email" class="contact-input" />
                  <label for="" class="contact-label">
                    Email
                  </label>
                </div>
                <div class="contact-content">
                  <input type="text" class="contact-input" />
                  <label class="contact-label">Subject</label>
                </div>
                <div class="contact-content contact-area">
                  <textarea class="contact-input"></textarea>
                  <label class="contact-label">Message</label>
                </div>
              </div>
              <a href="#" class="btn btn-default">
                Send Message
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
