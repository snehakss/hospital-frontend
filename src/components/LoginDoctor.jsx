import  axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginDoctor = () => {

    const navigate=useNavigate()

    const [input,setInput]=useState(
        {
            "email":"",
            "password":""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/login/signin",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status=="success") {

                    // console.log(response.data.userData._id)
                    // sessionStorage.setItem("userId",response.data.userData._id)
                    navigate("/profile")
                    
                } else {
                  if (response.data.status=="invalid user") {
                     alert("Invalid User")
                   }  

                   if (response.data.status=="incorrect password") {
                     alert("Invalid Password")
                   }
                }
            }
        )
    }
    
  return (
    <div style={{
        backgroundImage: `url('https://images2.alphacoders.com/133/1330529.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow" style={{backgroundColor:  'rgba(240, 240, 240, 0.6)'}}>
                        <div className="card-body">
                            <div className="text-center mb-4">
                            <img 
  height="80"
  width="80"
  src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg" 
  alt="Navbar Logo" 
  className="navbar-logo rounded-circle" // Apply Bootstrap's rounded-circle class
/>
                                <h3 className="mt-2">MediScheduler</h3>
                            </div>
                            <h4 className="card-title text-center mb-4">Doctor Login</h4>
                            
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="username" placeholder="Enter your username" name='email' value={input.email} onChange={inputHandler}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name='password' value={input.password} onChange={inputHandler}/>
                                </div>
                                <button type="submit" className="btn btn-success btn-block" onClick={readValues}>Login</button>

                                <div className="mt-3 text-center">
                                    <a href="/signup" className="text-decoration-none">Don't have an account? Sign Up Here</a>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default LoginDoctor