import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavDoctor = () => {

  const naviagte=useNavigate()

  const handleClick=()=>{
    naviagte('/home')
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand custom-font" href="/home">
    <img 
  height="50"
  width="50"
  src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg" 
  alt="Navbar Logo" 
  className="navbar-logo rounded-circle" // Apply Bootstrap's rounded-circle classNameName
/>
 
     <b> MediScheduler</b>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        

      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Logout</button>
      </form>
    </div>
  </div>
</nav>

<nav className="navbar navbar-expand-md navbar-dark -info-bg-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="/profile">
      
    <img 
      height="50"
      width="50"
      src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="Navbar Logo" className="navbar-logo"/>


      <b>    Doctor</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
        <a className="nav-link" href="/viewappointment">View Appointments</a>
        <a className="nav-link" href="/cancelappointment">Cancel Appointments</a>
        
      </div>
    </div>
  </div>
</nav>


</div>

  )
}

export default NavDoctor