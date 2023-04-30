import React from "react";
import WhyUs from "./WhyUs";
import Count from "./Count";

const About = () => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
          </div>

          <div class="row content">
            <div class="col-lg-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <ul>
                <li>
                <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
                <li>
                <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit
                </li>
                <li>
                <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
          </div>
          <a href="/" class="btn-learn-more">
            Learn More
          </a>
        </div>
      </section>
      {/* <!-- End About Us Section --> */}
      

      {/* <!-- ======= Why Us Section ======= --> */}
      <WhyUs/>
      {/* <!-- ======= Why Us Section ======= --> */}
      <Count/>
      
    </div>
  );
};

export default About;
