import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [doctorAppointment, setDoctorAppointment] = useState([]);
  // console.log(doctorAppointment[0]._id);
  // const doc_id = JSON.parse(doctorAppointment[0]._id);
  // console.log(doc_id);
  const columns = [
    // {
    //   name: "Doctor Id",
    //   selector: (row) => row._id,
    //   sortable: true,
    // },
    {
      name: "Patient Name",
      selector: (row) => row.Appointments[0]?.patient_name,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.Appointments[0]?.phone,
      sortable: true,
    },
    {
      name: "Appointment Type",
      selector: (row) => row.Appointments[0]?.appointment_type,
      sortable: true,
    },
  ];
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/appointment/64645f18e22879433ca11e7d/appointment`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setDoctorAppointment(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Appoointment</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Appointment</li>
            </ol>
          </nav>
        </div>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <DataTable
                    columns={columns}
                    data={doctorAppointment}
                    pagination
                    highlightOnHover
                    selectableRows
                    subHeader
                    subHeaderComponent={
                      <input
                        type="text"
                        placeholder="Search here"
                        className="form-control my-3"
                        style={{ width: "35%" }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appointment;
