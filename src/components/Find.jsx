import React, { useEffect, useState } from 'react'
import NavStaff from './NavStaff';

const Find = () => {

    const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');


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
    // Add more time slots as needed
  ];




  // Fetch all departments and doctors data from API
  useEffect(() => {
    fetch('http://localhost:3002/api/profile/viewall')
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error('Error fetching departments:', error));

    fetch('http://localhost:3002/api/profile/viewall')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctorId);
  };

  const handleFindDoctor = () => {
    // Send booking information to the backend
    fetch('http://localhost:3002/api/bookings/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timeSlot: selectedTimeSlot,
        doctorId: selectedDoctor,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('Appointment booked successfully!');
        } else {
          alert('Failed to book appointment. Please try again.');
        }
      })
      .catch(error => console.error('Error booking appointment:', error));
  };


  return (
    <div>
<NavStaff/>
<br /><br />

<div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="department" className="form-label">Department</label>
                <select id="department" className="form-control">
                  <option value="">Select Department</option>
                  {departments.map(department => (
  <option key={department._id} value={department._id}>{department.Department}</option>
))}

                </select>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
                <select id="doctorName" className="form-control" onChange={(e) => handleDoctorSelect(e.target.value)}>
                  <option value="">Select Doctor</option>
                  {doctors.map(doctor => (
                    <option key={doctor._id} value={doctor._id}>{doctor.Name}</option>
                  ))}
                </select>
              </div>
              


              
<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 time-slot-section">
  <label htmlFor="timeSlot" className="form-label">Time Slot</label>
  <div className="time-slots">
    {timeSlots.map(slot => (
      <button
        key={slot}
        type="button"
        className={`btn btn-outline-secondary ${selectedTimeSlot === slot ? 'disabled' : ''}`}
        onClick={() => handleTimeSlotSelect(slot)}
        disabled={selectedTimeSlot === slot}
      >
        {slot}
      </button>
    ))}
  </div>
</div>



              <div className="col col-12">
                <button className="btn btn-success" onClick={handleFindDoctor}>Find Doctor</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Find