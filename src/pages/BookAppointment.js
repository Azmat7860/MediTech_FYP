import React from "react";
import { Result } from "antd";
import Breadcrumb from "../components/Breadcrumb";

const BookAppointment = () => {
  document.documentElement.scrollTop = 0;

  return (
    <div>
        <Breadcrumb subtitle={"Booked Appointment"}/>
      <Result
        status="success"
        title="Your Appointment is Booked Successfully."
        subTitle="Your appointment is booked & our team will contact you as soon as possible."
      />
    </div>
  );
};

export default BookAppointment;
