import React, { useEffect, useState } from 'react';
import NavDoctor from './NavDoctor';
import axios from 'axios';

const CancelAppointment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/booking/viewall");
      setData(response.data.data); // Update state with the appointment data
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const deleteAppointment = async (id) => {
    try {
      const response = await axios.post("http://localhost:3002/api/booking/delete", { "_id": id });
      if (response.data.status === "success") {
        alert("Appointment Deleted");
        fetchData(); // Re-fetch data after deletion
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      // Handle error deleting appointment
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <NavDoctor />
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
                  <th scope="col">Time</th>
                  <th scope="col">Department</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Purpose of the visit</th>
                  <th scope="col">Payment status</th>
                  <th scope="col">Appointment Cancellation</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.Name}</td>
                    <td>{value.Age}</td>
                    <td>{value.Address}</td>
                    <td>{value.Date}</td>
                    <td>{value.Time}</td>
                    <td>{value.Department}</td>
                    <td>{value.PhoneNumber}</td>
                    <td>{value.Purposeofthevisit}</td>
                    <td>{value.Paymentstatus}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteAppointment(value._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointment;
