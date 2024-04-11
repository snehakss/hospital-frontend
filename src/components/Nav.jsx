import React from 'react'

const Nav = () => {
  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand custom-font" href="/home">
      <img 
      height="80"
      width="80"
      src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg" alt="Navbar Logo" className="navbar-logo"/> 
     <b> MediScheduler</b>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<nav className="navbar navbar-expand-md navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/department">Departments</a>
        <a className="nav-link" href="/logindoctor">Doctor</a>
        <a className="nav-link" href="/loginstaff">Staff</a>
        <a className="nav-link" href="/loginadmin">Admin</a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav