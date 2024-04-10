import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Patients = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);


    const fetchPatients = async () => {
        try {
            const response = await axios.get(
                "https://nutrition-app-zyc5.onrender.com/api/patients"
            );
            setPatients(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
	};



  return (
     
          
          <div className='patientcon'>
                    {patients.map((patient) => (
                        <div key={patient._id}>
                            <h3>Name: {patient.name}</h3>
                            <p>Phone No: {patient.phone}</p>
                            <p>Age: {patient.age}</p>
                            <p>Disease: {patient.disease}</p>
                            <p>Address: {patient.address}</p>
                        </div>
                    ))}
                </div>
    
  )
}

export default Patients