import React, { useState, useEffect } from 'react';
// import './NumberPatients.css'; // Import CSS file for styling

const NumberPatients = () => {
  const [patientsServed, setPatientsServed] = useState(0);

  useEffect(() => {
    const animationSpeed = 1; // Speed at which the number changes
    let animationFrameId;

    const updatePatientsServed = () => {
      setPatientsServed(prevPatientsServed => {
        const newPatientsServed = Math.min(prevPatientsServed + animationSpeed, 1500);
        return newPatientsServed;
      });
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      updatePatientsServed();
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="number-patients-container">
      <div className="number-patients">{patientsServed}</div>
      <div className="patients-text">Patients Served</div>
    </div>
  );
};

export default NumberPatients;
