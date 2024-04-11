import React, { useState } from 'react'
import NaviAdmin from './NaviAdmin'
import axios from 'axios';

const BookingAppointment = () => {

  function TimeSlotPicker() {
    const [timeSlots, setTimeSlots] = useState(generateTimeSlots());
  
    function generateTimeSlots() {
      const startTime = new Date();
      startTime.setHours(9, 0, 0, 0); // Set start time to 9:00 AM
      const endTime = new Date();
      endTime.setHours(18, 0, 0, 0); // Set end time to 6:00 PM
  
      const timeSlots = [];
      let currentTime = new Date(startTime);
  
      while (currentTime <= endTime) {
        timeSlots.push({
          time: formatTime(currentTime),
          disabled: false
        });
        currentTime.setMinutes(currentTime.getMinutes() + 20);
      }
  
      return timeSlots;
    }
  
    function formatTime(time) {
      return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
  
    function handleTimeSelection(index) {
      const updatedTimeSlots = [...timeSlots];
      updatedTimeSlots[index].disabled = true;
      setTimeSlots(updatedTimeSlots);
    }
  
    return (
      <select
        className="form-control"
        onChange={(e) => {
          handleTimeSelection(e.target.selectedIndex - 1);
        }}
      >
        <option value="" disabled>Select a time</option>
        {timeSlots.map((slot, index) => (
          <option key={index} value={slot.time} disabled={slot.disabled}>
            {slot.time}
          </option>
        ))}
      </select>
    );
  }


    const [input,setInput]=new useState(
        {
            "Name":"",
            "Age":"",
            "Address":"",
            "Date":"",
            "Apdate":"",
            "Time":"",
            "Department":"",
            "DoctorName":"",
            "PhoneNumber":"",
            "Paymentstatus":"",
            "Purposeofthevisit":""
        }
    )

    const inputHandler = (event) => {
      const { name, value } = event.target;
      if (name === "Time") {
          // For Time field, value is directly provided, no need to change
          setInput({ ...input, [name]: value });
      } else if (name === "Paymentstatus") {
          // For Paymentstatus field, value is available in event.target.value
          setInput({ ...input, [name]: event.target.value });
      } else {
          // For other form fields, handle as usual
          setInput({ ...input, [name]: value });
      }
  };
  
      

        const readValues=()=>{
            console.log(input)
            axios.post("http://localhost:3002/api/booking/add",input).then(
                (response)=>{
                    console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully submitted")
                    setInput({
                        "Name":"",
                        "Age":"",
                        "Address":"",
                        "Date":"",
                        "Apdate":"",
                        "Time":"",
                        "Department":"",
                        "DoctorName":"",
                        "PhoneNumber":"",
                        "Paymentstatus":"",
                        "Purposeofthevisit":""
                    })
                } else {
                    alert("Something went wrong")
                }
                }
            )
        }

  return (
    <div>
        <NaviAdmin/>
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
                            <input type="text" className="form-control" name="Age" value={input.Age} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="Address" value={input.Address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" name="Date" id="" className="form-control" value={input.Date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Time</label>
                        <TimeSlotPicker/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name="Department" value={input.Department} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                            <label htmlFor="" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control" name="DoctorName" value={input.DoctorName} onChange={inputHandler}/>
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

export default BookingAppointment