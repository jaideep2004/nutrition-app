

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NumberPatients = () => {
  const [inView, setInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3 // When 50% of the component is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const [patientData, setPatientData] = useState([
    { type: "Patients Served & Satisfied", value: 1, max: 2000 },
    { type: "High Blood Pressure Reversal", value: 1, max: 1000 },
    { type: "Type 1 & 2 Diabetes Reversal", value: 1, max: 500 },
    { type: "Thyroid & Hormone Imbalance Reversal", value: 1, max: 600 }
  ]);

  useEffect(() => {
    const animationSpeeds = [20, 10, 9, 10]; // Speeds at which the numbers change
    let animationFrameId;

    const updatePatientData = () => {
      setPatientData((prevPatientData) => {
        return prevPatientData.map((data, index) => {
          if (!inView) {
            // Reset the value to 1 when out of view
            return { ...data, value: 1 };
          }
          const newValue = Math.min(
            data.value + animationSpeeds[index],
            data.max
          );
          return { ...data, value: newValue };
        });
      });
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      updatePatientData();
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView]);

  return (
    <div className="patientscontain" ref={componentRef}>
      {patientData.map((data, index) => (
        <div
          className="pcontain"
          key={index}
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div className="patienttext">{data.type} </div>
          <div className="numberpatients">{data.value} +</div>
        </div>
      ))}
    </div>
  );
};

export default NumberPatients;
