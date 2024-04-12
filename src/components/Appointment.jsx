import React, { useEffect, useState } from "react";
import NavStaff from "./NavStaff";
import axios from "axios";

const Appointment = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [input, setInput] = useState({
    Name: "",
    Age: "",
    Address: "",
    Date: "",
    Apdate: "", // Appointment date
    Time: "", // Time slot
    Department: "", // Department
    DoctorName: "",
    PhoneNumber: "",
    Paymentstatus: "",
    Purposeofthevisit: "",
  });
  const [timeSlots, setTimeSlots] = useState([
    { time: "9:00am", available: true },
    { time: "9:20am", available: true },
    { time: "9:40am", available: true },
    { time: "10:00am", available: true },
    { time: "10:20am", available: true },
    { time: "10:40am", available: true },
    { time: "11:00am", available: true },
    { time: "12:20pm", available: true },
    { time: "2:00pm", available: true },
    { time: "2:20pm", available: true },
    { time: "2:40pm", available: true },
    { time: "3:00pm", available: true },
    { time: "3:20pm", available: true },
    { time: "3:40pm", available: true },
    { time: "4:00pm", available: true },
  ]);

  const fetchBooking = () => {
    axios
      .get("http://localhost:3002/api/booking/viewall")
      .then((response) => {
        // Extract booked time slots from API response
        const bookedTimeSlots = response.data.data.map((data) => data.Time);
        console.log("booked",bookedTimeSlots)

        // Update availability of time slots based on booked time slots
        const updatedTimeSlots = timeSlots.map((timeslot) => ({
          time: timeslot.time,
          available: !bookedTimeSlots.includes(timeslot.time), // Set available to false if the time is booked
        }));

        // Update state with updated time slots
        setTimeSlots(updatedTimeSlots);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  };

  useEffect(() => {
    fetchBooking();
  }, []);
  console.log(timeSlots);
  console.log("input",input)

  // Fetch all departments and doctors data from API
  const fetchDepartement = () => {
    axios.get("http://localhost:3002/api/profile/viewall").then((response) => {
      const doctors = response.data.data.map((data) => data.Name);
      const uniqueDoctors = Array.from(new Set(doctors));
      setDoctors(uniqueDoctors);
      const department = response.data.data.map((data) => data.Department);
      const uniqueDepartment = Array.from(new Set(department));
      setDepartments(uniqueDepartment);
    });
  };
  useEffect(() => {
    fetchDepartement();
  }, []);

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctorId);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3002/api/booking/add", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          setInput({
            Name: "",
            Age: "",
            Address: "",
            Date: "",
            Apdate: "",
            Time: "",
            Department: "",
            DoctorName: "",
            PhoneNumber: "",
            Paymentstatus: "",
            Purposeofthevisit: "",
          });
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => console.error("Error booking appointment:", error));
  };
  return (
    <div>
      <NavStaff />
      <br />
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-lg-12 ">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={input.Name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Age"
                  value={input.Age}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  value={input.Address}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="Date"
                  id=""
                  className="form-control"
                  value={input.Date}
                  onChange={inputHandler}
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className="form-label">
                  Department
                </label>
                <select
                  name="Department"
                  className="form-control"
                  value={input.Department}
                  onChange={inputHandler}
                >
                  <option value="">Select Department</option>
                  {departments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="doctorName" className="form-label">
                  Doctor's Name
                </label>
                <select
                  id="doctorName"
                  className="form-control"
                  onChange={(e) => handleDoctorSelect(e.target.value)}
                  name="doctor"
                  value={input.doctor}
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctors, index) => {
                    return (
                      <option key={index} value={doctors}>
                        {doctors}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="PhoneNumber"
                  value={input.PhoneNumber}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Payment
                </label>
                <select
                  name="Paymentstatus"
                  id=""
                  className="form-control"
                  value={input.Paymentstatus}
                  onChange={inputHandler}
                >
                  <option value="select">select</option>
                  <option value="Paid">Paid</option>
                  <option value="Not Paid">Not Paid</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                <label htmlFor="" className="form-label">
                  Purpose of the visit
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Purposeofthevisit"
                  value={input.Purposeofthevisit}
                  onChange={inputHandler}
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className="form-label">
                  Appointment Date
                </label>
                <input
                  type="date"
                  name="Apdate"
                  className="form-control"
                  value={input.Apdate}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-lg-6">
                <label htmlFor="" className="form-label">
                  Time Slot
                </label>
                <select
                  name="Time"
                  className="form-control"
                  value={input.Time}
                  onChange={inputHandler}
                >
                  <option value="">Select Time Slot</option>
                  {timeSlots.map((timeslot, index) => (
                    <option
                      key={index}
                      value={timeslot.time}
                      disabled={!timeslot.available}
                    >
                      {timeslot.time}
                    </option>
                  ))}
                </select>
              </div>
              <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-flex">
                  <button className="btn btn-success" onClick={readValues}>
                    Book Appointment
                  </button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
