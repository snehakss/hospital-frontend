import React, { useEffect, useState } from 'react'
import NavDoctor from './NavDoctor'
import  axios  from 'axios'


const ViewAppointments = () => {

  const [data,setData]=useState([])

  const getData=()=>{
    axios.get("http://localhost:3002/api/booking/viewall").then(
      (response)=>{
        setData(response.data)
      }
    )
  }

  useEffect(()=>{getData()},[])
  return (
    <div>
        <NavDoctor/>
        <br /><br />
        <div className="container">
            <div className="row">

           
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <table className="table table-bordered">
  <thead className="table-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
      <th scope="col">Date</th>
      <th scope="col">Appointment Date</th>
      <th scope="col">Time</th>
      <th scope="col">Department</th>
      <th scope="col">Phone</th>
      <th scope="col">Purpose of the visit</th>
      <th scope="col">Payment status</th>
      
    </tr>
  </thead>
  <tbody>
    {
      data.map(
        (value,index)=>{
          return <tr>
          <td>{value.Name}</td>
          <td>{value.Age}</td>
          <td>{value.Address}</td>
          <td>{value.Date}</td>
          <td>{value.Apdate}</td>
          <td>{value.Time}</td>
          <td>{value.Department}</td>
          <td>{value.PhoneNumber}</td>
          <td>{value.Purposeofthevisit}</td>
          <td>{value.Paymentstatus}</td>
        </tr>
        }
      )
    }
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAppointments