import React, { useEffect } from "react";
import { init } from "../js/main";

const Feedback = () => {
  useEffect(() => {
    //   // Call a function from the imported script
    init();
  }, []);
  return (
    <div>
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>What Our Users Say About Us!</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit.
            </p>
          </div>

          <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        class="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      Amazing lifesaver app. I am from the UK and all I needed
                      was to speak to a hematologist. There isnt a simple way to
                      do this in the UK that is good value for money. I used
                      this app and got exactly what i needed and was able to
                      speak to a speacilist same day.
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        class="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      What a wonderful, helpful and Awesome i personally
                      recommend to all of you please use this app. Because when
                      i visit to Doctor through this app i just ask wowww two
                      thumps up for the Doctor and this application ❤️❤️❤️❤️❤️.
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        class="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      This app is user friendly and very helpful. Anyone can
                      easily use it and search for the relavent doctor. ✅ Also
                      there are several different options available to search
                      doctors based on areas which made my
                      experience even better! Highly recommended.
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        class="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      Literally the best website to book the appointments online
                      for Doctors. The service is great, helpline guys are very
                      cooperative and understanding. And I don't have to hassle
                      through different hospitals anymore now.
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <div class="d-flex align-items-center">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        class="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      Great platform, very efficient and works really well on
                      both phone and web. I think this is the most easiest way
                      of booking appointments in Pakistan as it has made the
                      whole process much more efficient.
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
