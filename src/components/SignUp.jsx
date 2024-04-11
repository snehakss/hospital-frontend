import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

    const [input,setInput]=useState(
        {
            "username":"",
            "email":"",
            "password":"",
            "confirm":""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/login/signup",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status === "success") {
                    
                    alert("Signup successfull")
                    setInput({
                        "username":"",
                        "email":"",
                        "password":"",
                        "confirm":""
                    }

                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/doctor-man-consulting-patient-while-filling-up-application-form-desk-hospital_1150-12965.jpg')`,
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
                    <div className="row g-3">
                        <div className="col col-12">
                            <h2 className="text-center mb-4">Create an Account</h2>
                        </div>
                        <div className="col col-12 g-flex">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" id="username" className="form-control" name='username' value={input.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 g-flex">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" id="email" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 g-flex">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 g-flex">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="form-control" name='confirm' value={input.confirm} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 g-flex">
                            <button className="btn btn-success w-100" onClick={readValues}>Sign Up</button>
                            <a href="/logindoctor" target="_blank" rel="noopener noreferrer">Back to Login page</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SignUp