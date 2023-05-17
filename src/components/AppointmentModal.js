import React from "react";

const AppointmentModal = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="appointmentModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-white text-center bg-success">
              <h5 class="modal-title" id="exampleModalLabel">
                Book Appointment with PMC verified Doctors
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-12">
                  <label for="yourName" class="form-label">
                    Patient's Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="yourName"
                    required
                  />
                </div>

                <div class="col-12">
                  <label for="yourEmail" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    id="yourName"
                    required
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100" type="submit">
                    Book Appointment
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
