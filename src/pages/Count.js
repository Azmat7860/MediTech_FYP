import React from "react";
import NumberCounter from "number-counter";
const Count = () => {
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <span>
                  <NumberCounter start={0} end={100} delay={3} />
                </span>

                <p>
                  <strong>Doctors</strong> consequuntur quae qui deca rode
                </p>
                <a href="/">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
              <i class="bi bi-hospital"></i>
                <span>
                  <NumberCounter start={0} end={26} delay={3} />
                </span>
                <p>
                  <strong>Departments</strong> adipisci atque cum quia aut
                  numquam delectus
                </p>
                <a href="/">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-flask"></i>
                <span>
                  <NumberCounter start={0} end={14} delay={3} />
                </span>
                <p>
                  <strong>Research Lab</strong> aut commodi quaerat. Aliquam
                  ratione
                </p>
                <a href="/">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-award"></i>
                <span>
                  <NumberCounter start={0} end={150} delay={3} />
                </span>
                <p>
                  <strong>Awards</strong> rerum asperiores dolor molestiae
                  doloribu
                </p>
                <a href="/">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
