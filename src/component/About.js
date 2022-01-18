import React from "react";

export default function About() {
  return (
    <div>
      <section class="about section" id="about">
        <div class="container">
          <h2 class="section-title padd-15">Tentang saya</h2>
          <div class="row">
            <div class="about-img padd-15" data-aos="fade-right">
              <img alt="fauziahaulia" src="img/profil.png"></img>
            </div>
            <div class="about-content padd-15" data-aos="fade-left">
              <div class="rounded">
                <div class="row">
                  <div class="about-text padd-15">
                    <p>
                      Hai saya Fauziah Aulia (Pao). Lahir di Banyuasin, 18
                      Februari 2005. Have a nice day!! and Thankyou..{" "}
                    </p>
                  </div>
                  <div class="skills padd-15">
                    <div class="row">
                      <div class="skill-item">
                        <h4>HTML</h4>
                        <div class="progress">
                          <div
                            class="progress-in"
                            style={{
                              width: "70%",
                              background: "rgb(255,209,92)",
                            }}
                          ></div>
                          <div class="skill-percent">70%</div>
                        </div>
                      </div>
                      <div class="skill-item">
                        <h4>CSS</h4>
                        <div class="progress">
                          <div
                            class="progress-in"
                            style={{
                              width: "45%",
                              background: "rgb(255,76,96)",
                            }}
                          ></div>
                          <div class="skill-percent">45%</div>
                        </div>
                      </div>
                      <div class="skill-item">
                        <h4>JavaScript</h4>
                        <div class="progress">
                          <div
                            class="progress-in"
                            style={{
                              width: "5%",
                              background: "rgb(108,108,229)",
                            }}
                          ></div>
                          <div class="skill-percent">5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="fact-item padd-15">
              <i class="lni lni-thumbs-up"></i>
              <div class="details">
                <h3>3</h3>
                <p>Project</p>
              </div>
            </div>
            <div class="fact-item padd-15">
              <i class="lni lni-coffee-cup"></i>
              <div class="details">
                <h3>8</h3>
                <p>Cup of coffee</p>
              </div>
            </div>
            <div class="fact-item padd-15">
              <i class="lni lni-users"></i>
              <div class="details">
                <h3>463</h3>
                <p>Friends</p>
              </div>
            </div>
            <div class="fact-item padd-15">
              <i class="lni lni-cup"></i>
              <div class="details">
                <h3>17</h3>
                <p>Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
