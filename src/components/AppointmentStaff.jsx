import axios from 'axios';
import { useEffect, useState } from 'react';
import NaviAdmin from './NaviAdmin';
import NavStaff from './NavStaff';

const AppointmentStaff = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/booking/viewall");
                setData(response.data.data); // Update state with fetched data array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavStaff/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table table-bordered">
                            <thead>
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
                                {data && data.map((value, index) => (
                                    <tr key={index}>
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentStaff;

