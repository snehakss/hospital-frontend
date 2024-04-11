import React, { useEffect, useState } from 'react'
import NaviAdmin from './NaviAdmin'
import axios from 'axios'

const ViewStaff = () => {

  const [data,setData]=new useState([])

  const getData=()=>{
    axios.get("http://localhost:3002/api/profile/viewall").then(
      (response)=>{
        setData(response.data)
      }
    )
  }
  useEffect(()=>{getData()},[])
  return (
    <div>
        <NaviAdmin/>
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
      <th scope="col">DOB</th>
      <th scope="col">Department</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
     
    </tr>
  </thead>
  <tbody>
   {
    data.map(
      (value,index)=>{
        return  <tr>
        <td>{value.Name}</td>
        <td>{value.Age}</td>
        <td>{value.Address}</td>
        <td>{value.DOB}</td>
        <td>{value.Department}</td>
        <td>{value.Phone}</td>
        <td>{value.email}</td>
        <td>{value.Designation}</td>
      </tr>
      }
    )
   }
   
  </tbody>
</table>
<center><button className="btn btn-success">Print</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStaff