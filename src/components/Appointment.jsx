import React, { useEffect, useState } from 'react'
import NavStaff from './NavStaff'
import axios from 'axios';

const Appointment = () => {

  
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [input, setInput] = useState({
    Name: '',
    Age: '',
    Address: '',
    Date: '',
    Apdate: '', // Appointment date
    Time: '', // Time slot
    Department: '', // Department
    DoctorName: '',
    PhoneNumber: '',
    Paymentstatus: '',
    Purposeofthevisit: ''
  });

  const timeSlots = [
    '9:00 am',
    '9:20 am',
    '9:40 am',
    '10:00 am',
    '10:20 am',
    '10:40 am',
    '11:00 am',
    '2:00 pm',
    '2:20 pm',
    '2:40 pm',
    '3:00 pm',
    '3:20 pm',
    '3:40 pm',
    '4:00 pm'
  ];

  // Fetch all departments and doctors data from API
  useEffect(() => {
    fetch('http://localhost:3002/api/profile/viewall')
      .then(response => response.json())
      .then(data => {
        setDepartments(data.departments);
        setDoctors(data.doctors);
      })
      .catch(error => console.error('Error fetching data:', error));
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
    console.log(input);
    axios.post("http://localhost:3002/api/booking/add", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Successfully submitted");
          setInput({
            Name: '',
            Age: '',
            Address: '',
            Date: '',
            Apdate: '',
            Time: '',
            Department: '',
            DoctorName: '',
            PhoneNumber: '',
            Paymentstatus: '',
            Purposeofthevisit: ''
          });
        } else {
          alert("Something went wrong");
        }
      })
      .catch(error => console.error('Error booking appointment:', error));
  };
  return (
    <div >
        <NavStaff/>
        <br /><br />
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-lg-12 ">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="Age" value={input.Age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="Address" value={input.Address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="date" name="Date" id="" className="form-control" value={input.Date} onChange={inputHandler}/>
                        </div>
                        <div className="col-lg-6">
                <label htmlFor="" className="form-label">Department</label>
                <select name="Department" className="form-control" value={input.Department} onChange={inputHandler}>
  <option value="">Select Department</option>
  {departments.map(department => (
    <option key={department._id} value={department.Department}>{department.Department}</option>
  ))}
</select>

              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
                <select id="doctorName" className="form-control" onChange={(e) => handleDoctorSelect(e.target.value)} name='doctor' value={input.doctor}>
                  <option value="">Select Doctor</option>
                  {doctors.map(doctor => (
                    <option key={doctor._id} value={doctor._id}>{doctor.Name}</option>
                  ))}
                </select>
              </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" className="form-control" name="PhoneNumber" value={input.PhoneNumber} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Payment</label>
                            <select name="Paymentstatus" id="" className="form-control" value={input.Paymentstatus} onChange={inputHandler}>
                                <option value="select">select</option>
                                <option value="Paid">Paid</option>
                                <option value="Not Paid">Not Paid</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Purpose of the visit</label>
                            <input type="text" className="form-control" name="Purposeofthevisit" value={input.Purposeofthevisit} onChange={inputHandler}/>
                        </div>
                        <div className="col-lg-6">
                <label htmlFor="" className="form-label">Appointment Date</label>
                <input type="date" name="Apdate" className="form-control" value={input.Apdate} onChange={inputHandler} />
              </div>

              <div className="col-lg-6">
                <label htmlFor="" className="form-label">Time Slot</label>
                <select name="Time" className="form-control" value={input.Time} onChange={inputHandler}>
  <option value="">Select Time Slot</option>
  {timeSlots.map(slot => (
    <option key={slot} value={slot}>{slot}</option>
  ))}
</select>

              </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-flex">
                            <button className="btn btn-success" onClick={readValues}>Book Appointment</button>
                            
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment