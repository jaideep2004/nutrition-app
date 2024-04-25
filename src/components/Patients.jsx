import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Patients = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch initial blog posts when component mounts
        fetchPatients();
    
        // Set up interval to fetch blog posts periodically
        const intervalId = setInterval(() => {
          fetchPatients();
        }, 300); // Fetch every 1 minute (adjust interval as needed)
    
        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
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