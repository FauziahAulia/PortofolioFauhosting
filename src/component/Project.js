import React from "react";

export default function Project() {
  return (
    <div>
      <section class="services section">
        <div class="container">
          <h2 class="section-title padd-15">Project Saya</h2>
          <div class="row">
            <div
              class="service-item padd-15"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div
                class="service-item-inner"
                style={{ background: "rgb(108,108,229)" }}
              >
                <h3>Web perpustakaan</h3>
                <p>
                  Adalah salah satu web saya dengan nama Polibrary
                  website-Perpustakaan{" "}
                </p>
              </div>
            </div>
            <div
              class="service-item padd-15"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="100"
            >
              <div
                class="service-item-inner"
                style={{ background: "rgb(249,215,76)" }}
              >
                <h3>Kalkulator web</h3>
                <p>
                  Membuat kalkulator sederhana menggunakan HTML,CSS dan
                  Javascript
                </p>
              </div>
            </div>
            <div
              class="service-item padd-15"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="200"
            >
              <div
                class="service-item-inner"
                style={{ background: "rgb(108,108,229)" }}
              >
                <h3>Logo</h3>
                <p>Desain logo menggunakan canva untuk kelas </p>
              </div>
            </div>
          </div>
          <div class="text padd-15">
            <p>
              {" "}
              <a href="#">Click here</a> to contact me! 👋
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
