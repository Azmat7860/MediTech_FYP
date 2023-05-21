import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  document.documentElement.scrollTop = 0;
  return (
    <div>
      <Breadcrumb title={"Contact"}/>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header section-title">
            <h2>Contact</h2>
          </div>

          <div className="row gx-lg-0 gy-4">
            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>Street No. 4 House No. 93, Abbasia Town, Rahim Yar Khan</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>imazmat102@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>0315-0470727</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h4>Open Hours:</h4>
                    <p>Mon-Sun: 10AM - 7PM</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>
            </div>

            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                // role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
