import React, { useEffect, useState } from 'react'
import NaviAdmin from './NaviAdmin'
import axios from 'axios'

const RemoveStaff = () => {

    const [data,setData]=new useState([])

    const getData=()=>{
        axios.get("http://localhost:3002/api/login/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }

    useEffect(()=>{getData()},[])

    const deleteStaff=(id)=>{
      let data={"_id":id}
      axios.post("http://localhost:3002/api/login/delete",data).then(
        (response)=>{
          if (response.data.status=="success") {
            alert("Account Deleted")
            getData()
          }
        }
      )
    }
  return (
    <div>
        <NaviAdmin/>
        <br /><br />
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Password</th>
      <th scope='col'>Remove Account</th>
    </tr>
  </thead>
  <tbody>
   
   {
    data.map(
        (value,index)=>{
            return  <tr>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td>{value.password}</td>
            <td>
                <button className="btn btn-danger" onClick={()=>{deleteStaff(value._id)}}>Delete Account</button>
            </td>
          </tr>
        }
    )
   }
    
  </tbody>
</table>

    </div>
  )
}

export default RemoveStaff