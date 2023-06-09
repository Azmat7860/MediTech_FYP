import React from 'react'
import { Link } from 'react-router-dom';

const Step = () => {
  const toTop = () =>{
  document.documentElement.scrollTop = 0;
  }
  return (
    <div>
        <section id="onfocus" class="onfocus">
      <div class="container-fluid p-0" data-aos="fade-up">

        <div class="row g-0">
          <div class="col-lg-6 video-play position-relative">
            <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></Link>
          </div>
          <div class="col-lg-6">
            <div class="content d-flex flex-column justify-content-center h-100">
              <h3>Book your appointments in 3 easy steps</h3>
              <p class="fst-italic">
              Find and Book the appointment with Best Doctors nearby
              </p>
              <ul>
                <li><i class="bi bi-1-circle"></i> <b>Search</b> for doctors by specialty, service or city.</li>
                <li><i class="bi bi-2-circle"></i> <b>Select</b> based on Experience, Fee or Rating.</li>
                <li><i class="bi bi-3-circle"></i> <b>Book</b> a Confirmed Appointment within Seconds.</li>
              </ul>
              <Link to="/" onClick={()=>{toTop()}} class="read-more align-self-start"><span>Find a Doctor</span><i class="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Step