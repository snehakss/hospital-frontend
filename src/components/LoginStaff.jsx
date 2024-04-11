import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginStaff = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState(
        {
            "email": "",
            "password": ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:3002/api/login/signin", input).then((response) => {
            if(response.data.status==="success"){
                navigate("/profilestaff")
            }else{
                alert(response.data.status)
            }
        })
    }
    console.log(input)
    return (
        <div style={{
            backgroundImage: `url('https://uploads-ssl.webflow.com/621f30168f38525d6967fb5f/624ef88a6d7e4fc3deac2f52_healthcare.png')`,
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
                        <div className="card shadow" style={{ backgroundColor: 'rgba(240, 240, 240, 0.6)' }}>
                            <div className="card-body">
                                <div className="text-center mb-4">
                                    <img
                                        height="80"
                                        width="80"
                                        src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg"
                                        alt="Navbar Logo"
                                        className="navbar-logo rounded-circle"
                                    />
                                    <h3 className="mt-2">MediScheduler</h3>
                                </div>
                                <h4 className="card-title text-center mb-4">Staff Login</h4>
                                
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">E-mail Id</label>
                                        <input type="email" className="form-control" id="username" placeholder="Enter your username" name='email' value={input.email} onChange={inputHandler} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input name='password' value={input.password} onChange={inputHandler} type="password" className="form-control" id="password" placeholder="Enter your password" />
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

export default LoginStaff