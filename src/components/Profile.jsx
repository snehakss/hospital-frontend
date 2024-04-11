import React, { useState } from 'react'
import NavDoctor from './NavDoctor'
import axios from 'axios'

const Profile = () => {

  const [input,setInput]=new useState(
    {
      "Name":"",
      "DOB":"",
      "Age":"",
      "Address":"",
      "Qualification":"",
      "Department":"",
      "Phone":"",
      "email":"",
      "Designation":""
    }
  )

  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }

  const readValues=()=>{
    console.log(input)
    axios.post("http://localhost:3002/api/profile/add",input).then(
      (response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
          alert("Successfully submitted")
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
  return (
    <div>
      <NavDoctor/>
      <br /><br />
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">DOB</label>
                  <input type="date" name="DOB" id="" className="form-control" value={input.DOB} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Age</label>
                  <input type="text" className="form-control" name='Age' value={input.Age} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Address</label>
                  <input type="text" className="form-control" name='Address' value={input.Address} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Qualification</label>
                  <input type="text" className="form-control" name='Qualification' value={input.Qualification} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Department</label>
                  <input type="text" className="form-control" name='Department' value={input.Department} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Phone</label>
                  <input type="text" className="form-control" name='Phone' value={input.Phone} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">e-mail</label>
                  <input type="email" name="email" id="" className="form-control" value={input.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-flex">
                  <label htmlFor="" className="form-label">Designation</label>
                  <input type="text" className="form-control" name='Designation' value={input.Designation} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-flex">
                  <center>
                    <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </center>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile