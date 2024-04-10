import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import Patients from './Patients';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('component1');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <div className="adminhead">
                <h1>
                    Admin Dashboard
                </h1>
                {/* <h2>Create Blog </h2> */}
            </div>
    <div className="dashcontainer">
      
      <div className="sidebar">
       
      
          <div onClick={() => handleOptionClick('component1')}>Blogs</div>
          <div onClick={() => handleOptionClick('component2')}>Patients</div>
          
       
          </div>
          
      <div className="dash-content">
        {selectedOption === 'component1' && <AdminDashboard />}
        {selectedOption === 'component2' && <Patients />}
        
      </div>
      </div>
      </>
  );
};

export default Dashboard;
